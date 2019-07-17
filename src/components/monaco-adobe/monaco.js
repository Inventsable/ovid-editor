// Thanks @FE-Mars
// https://github.com/FE-Mars/monaco-editor-vue

// from npm
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

// from client
// import * as monaco from "../monaco-editor/esm/vs/editor/editor.api";

const require = cep_node.require || require;
const fs = require("fs");

function noop() {}

export { monaco };

export default {
  name: "MonacoEditor",
  props: {
    diffEditor: { type: Boolean, default: false }, //是否使用diff模式
    width: { type: [String, Number], default: "100%" },
    height: { type: [String, Number], default: "100%" },
    original: String, //只有在diff模式下有效
    value: String,
    language: { type: String, default: "javascript" },
    theme: { type: String, default: "vs" },
    options: {
      type: Object,
      default() {
        return {};
      }
    },
    editorMounted: { type: Function, default: noop },
    editorBeforeMount: { type: Function, default: noop }
  },

  watch: {
    options: {
      deep: true,
      handler(options) {
        this.editor && this.editor.updateOptions(options);
      }
    },

    value() {
      this.editor &&
        this.value !== this._getValue() &&
        this._setValue(this.value);
    },

    language() {
      if (!this.editor) return;
      if (this.diffEditor) {
        //diff模式下更新language
        const { original, modified } = this.editor.getModel();
        monaco.editor.setModelLanguage(original, this.language);
        monaco.editor.setModelLanguage(modified, this.language);
      } else
        monaco.editor.setModelLanguage(this.editor.getModel(), this.language);
    },

    theme() {
      this.editor && monaco.editor.setTheme(this.theme);
    },

    style() {
      this.editor &&
        this.$nextTick(() => {
          this.editor.layout();
        });
    }
  },

  computed: {
    style() {
      return {
        width: !/^\d+$/.test(this.width) ? this.width : `${this.width}px`,
        height: !/^\d+$/.test(this.height) ? this.height : `${this.height}px`
      };
    }
  },

  mounted() {
    this.initMonaco();
  },

  beforeDestroy() {
    this.editor && this.editor.dispose();
  },

  render(h) {
    return <div class="monaco_editor_container" style={this.style} />;
  },

  methods: {
    initMonaco() {
      // this._getTypes();
      this._getAltTypes();
      this._getAdobeTokens();

      const { value, language, theme, options } = this;
      Object.assign(options, this._editorBeforeMount()); //编辑器初始化前
      this.editor = monaco.editor[
        this.diffEditor ? "createDiffEditor" : "create"
      ](this.$el, {
        value: value,
        language: language,
        theme: theme,
        ...options
      });
      this.diffEditor && this._setModel(this.value, this.original);
      this._editorMounted(this.editor); //编辑器初始化后
    },

    _getAltTypes() {
      let appName = JSON.parse(window.__adobe_cep__.getHostEnvironment())
        .appName;
      let root = decodeURI(
        window.__adobe_cep__.getSystemPath("extension")
      ).replace(/file\:\/{1,}/, "");

      monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
        // target: 1,
        allowNonTsExtensions: true,
        target: monaco.languages.typescript.ScriptTarget.CommonJS,
        noLib: true,
        allowJs: true,
        noEmit: true
      });

      monaco.languages.typescript.javascriptDefaults.addExtraLib(
        fs.readFileSync(
          `${root}/src/components/monaco-adobe/types-for-adobe/${appName}.d.ts`,
          {
            encoding: "utf-8"
          }
        ),
        `${root}/src/components/monaco-adobe/types-for-adobe/${appName}.d.ts`
      );
    },

    _getAdobeTokens() {
      const self = this;
      let appName = JSON.parse(window.__adobe_cep__.getHostEnvironment())
        .appName;
      let root = decodeURI(
        window.__adobe_cep__.getSystemPath("extension")
      ).replace(/file\:\/{1,}/, "");

      let sourcetext = fs.readFileSync(
        `${root}/src/components/monaco-adobe/types-for-adobe/${appName}.d.ts`,
        {
          encoding: "utf-8"
        }
      );

      this._tokenizeAdobe(sourcetext).then(result => {
        // console.log("Result:");
        // console.log(result);
        // Register a new language
        // monaco.languages.register({
        //   id: "adobeTypes"
        // });

        const model = self.editor.getModel();
        // console.log(model._tokens);

        // console.log(monaco.languages.getLanguages());
        // Define a new theme that contains only rules that match this language
        // monaco.editor.defineTheme("myCoolTheme", {
        //   base: "vs",
        //   inherit: false,
        //   rules: [
        //     {
        //       token: "keyword",
        //       foreground: "ff0000"
        //     }
        //     // {
        //     //   token: "custom-error",
        //     //   foreground: "ff0000",
        //     //   fontStyle: "bold"
        //     // },
        //     // {
        //     //   token: "custom-notice",
        //     //   foreground: "FFA500"
        //     // },
        //     // {
        //     //   token: "custom-date",
        //     //   foreground: "008800"
        //     // }
        //   ]
        // });
      });
    },

    _tokenizeAdobe(content) {
      return new Promise((resolve, reject) => {
        // console.log(content);

        let result = [];

        let tokenizer = [
          {
            // rx: /^[\s\t]*[a-zA-Z]{1,}\s?(?=\()/gm,
            rx: /^([\s\t]*|declare\sfunction\s)[a-zA-Z]{1,}\s?(?=\()/gm,
            tag: "functions"
          },
          {
            rx: /^[\s\t]*(readonly\s)?[a-zA-Z]{1,}\s?(?=\:)/gm,
            tag: "props"
          },
          {
            rx: /^[\s\t]*[a-zA-Z]{1,}\s?(?=\=)/gm,
            tag: "enum"
          }
        ];
        console.log(content);

        tokenizer.forEach(token => {
          let matches = content.match(token.rx);
          matches = matches.map(match => {
            return !/props/.test(token.tag)
              ? !/functions/.test(token.tag)
                ? match.trim()
                : match
                    .trim()
                    .replace("declare function", "")
                    .trim()
              : match
                  .trim()
                  .replace("readonly", "")
                  .trim();
          });
          result[token.tag] = [...new Set(matches)];
          console.log(`${matches.length} => ${result[token.tag].length}`);
        });

        resolve(result);
      });
    },

    _getEditor() {
      if (!this.editor) return null;
      return this.diffEditor ? this.editor.modifiedEditor : this.editor;
    },

    _setModel(value, original) {
      //diff模式下设置model
      const { language } = this;
      const originalModel = monaco.editor.createModel(original, language);
      const modifiedModel = monaco.editor.createModel(value, language);
      this.editor.setModel({
        original: originalModel,
        modified: modifiedModel
      });
    },

    _setValue(value) {
      let editor = this._getEditor();
      if (editor) return editor.setValue(value);
    },

    _getValue() {
      let editor = this._getEditor();
      if (!editor) return "";
      return editor.getValue();
    },

    _editorBeforeMount() {
      const options = this.editorBeforeMount(monaco);
      return options || {};
    },

    _editorMounted(editor) {
      this.editorMounted(editor, monaco);
      if (this.diffEditor) {
        editor.onDidUpdateDiff(event => {
          const value = this._getValue();
          this._emitChange(value, event);
        });
      } else {
        editor.onDidChangeModelContent(event => {
          const value = this._getValue();
          this._emitChange(value, event);
        });
      }
    },

    _emitChange(value, event) {
      this.$emit("change", value, event);
      this.$emit("input", value);
    }
  }
};
