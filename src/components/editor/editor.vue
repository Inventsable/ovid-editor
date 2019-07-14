<template>
  <div class="editorContainer">
    <split-pane
      v-on:resize="resize"
      id="contents"
      :min-percent="5"
      :default-percent="80"
      split="horizontal"
    >
      <template id="paneL" slot="paneL">
        <div :style="padTop()"></div>
        <MonacoEditor
          id="editor"
          ref="editor"
          :width="editorW"
          :height="editorH"
          theme="vs-dark"
          :value="code"
          :language="lang"
          :options="options"
          @change="onChange"
          @keyup="checkKey"
        ></MonacoEditor>
      </template>
      <template id="paneR" slot="paneR">
        <consoler />
      </template>
    </split-pane>
  </div>
</template>
 
<script>
import splitPane from "vue-splitpane";
import launchLocalHost from "../../utils/main/launchLocalHost";

import consoler from "./console";
import MonacoEditor from "../monaco-adobe/monaco.js";
export default {
  name: "App",
  props: {
    code: String,
    lang: String
  },
  components: {
    MonacoEditor,
    consoler,
    "split-pane": splitPane
  },
  mounted() {
    console.log("Mounted");
    // Monaco doesn't use CSS and must have hard-coded dimensions, add window listeners to fix:
    this.handleEditorSize();

    // Assigning this to our App object gives access any where in the panel
    this.app.monaco = this;
    // This is the actual Monaco instance which exposes all properties and methods
    this.editor = this.$refs.editor._getEditor();

    // We should redress Monaco according to user's current app theme:
    this.theme = this.editor._theme;
    this.restyleEditor(this.editor);

    // This is where we assign Monaco commands
    this.assignCmds();

    let editor = document.getElementById("editor");
    editor.addEventListener("keyup", evt => {
      this.checkKey(evt);
    });
  },
  data: () => ({
    wOffset: 0,
    editorW: 200,
    editorH: 200,
    masterHOffset: 4,
    topPadding: 8,
    editor: null,
    theme: null,
    isDirty: false,
    lastTab: -1,
    options: {
      //Monaco Editor Options
      scrollBeyondLastLine: false,
      lineDecorationsWidth: "0px",
      lineNumbersMinChars: 4,
      autoIndent: true,
      formatOnPaste: true,
      formatOnType: true
    },
    fsError: [
      "NO_ERROR",
      "ERR_UNKNOWN",
      "ERR_INVALID_PARAMS",
      "ERR_NOT_FOUND",
      "ERR_CANT_READ",
      "ERR_UNSUPPORTED_ENCODING",
      "ERR_CANT_WRITE",
      "ERR_OUT_OF_SPACE",
      "ERR_NOT_FILE",
      "ERR_NOT_DIRECTORY",
      "ERR_FILE_EXISTS"
    ]
  }),
  computed: {
    app() {
      return this.$root.$children[0];
    },
    hOffset() {
      return (
        +this.app.getCSS("toolbar-height") +
        +this.app.getCSS("bottombar-height")
      );
    },
    contents() {
      return this.editor ? this.editor.getValue() : null;
    },
    selection() {
      return this.editor
        ? this.editor.getModel().getValueInRange(this.editor.getSelection())
        : null;
    },
    needsCompile() {
      let keyRX = [
        /^let|const\s/gm,
        /[\s|\,]let|const\s/gm,
        /\s?\=\>\s?/gm,
        /\.(forEach|map|find|filter)\(/gm
      ];
      let found = false;
      keyRX.forEach(rx => {
        if (rx.test(this.contents)) found = true;
      });

      return found;
    },
    editorHasPath() {
      if (this.app.tabsList) {
        let activeTab = this.app.tabsList.activeItem;
        return activeTab.path;
      } else {
        return false;
      }
    },
    editorTab() {
      if (this.app.tabsList) {
        let activeTab = this.app.tabsList.activeItem;
        return activeTab;
      } else {
        return null;
      }
    }
  },
  watch: {
    contents(content) {
      if (this.lastTab !== -1) {
        if (this.lastTab == this.app.tabsList.activeTab) {
          if (this.app.tabsList.activeItem.path) {
            this.isDirty = true;
          }
          if (!this.isDirty) this.isDirty = true;
        } else {
          console.log("Switching tabs.");
          this.lastTab = this.app.tabsList.activeTab;
        }
      } else {
        this.lastTab = this.app.tabsList.activeTab;
      }
      // console.log("Changed");
    },
    isDirty(state) {
      // console.log(state);
      this.app.tabsList.activeItem.isDirty = state;
      this.app.tabsList.updateTabsInStorage();
      // console.log(this.app.tabsList.activeItem);
    }
  },
  methods: {
    assignCmds() {
      const self = this;
      // Found here:
      // https://microsoft.github.io/monaco-editor/playground.html#interacting-with-the-editor-adding-an-action-to-an-editor-instance

      // We can add custom actions to the editor at any time. This method is called on mounted()
      this.editor.addAction({
        // An unique identifier of the contributed action.
        id: "run-script",

        // A label of the action that will be presented to the user.
        label: "Run script",

        // An optional array of keybindings for the action.
        // https://microsoft.github.io/monaco-editor/api/enums/monaco.keycode.html
        keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter],

        // A precondition for this action.
        precondition: null,

        // A rule to evaluate on top of the precondition in order to dispatch the keybindings.
        keybindingContext: null,
        contextMenuGroupId: "action",
        contextMenuOrder: 1.5,

        // Method that will be executed when the action is triggered.
        // @param editor The editor instance is passed in
        run: function(ed) {
          // alert("i'm running => " + ed.getPosition());
          self.app.runEditor();
          return null;
        }
      });
      this.editor.addAction({
        id: "run-selection",
        label: "Run selected text",
        contextMenuGroupId: "action",
        contextMenuOrder: 1.6,
        precondition: "editorHasSelection",
        keybindings: [monaco.KeyMod.Alt | monaco.KeyCode.Enter],
        keybindingContext: null,
        run: function(ed) {
          self.app.runEditor(self.selection);
          return null;
        }
      });
      this.editor.addAction({
        id: "editor.action.openLink",
        label: "Open Link in Default Browser",
        precondition: null,
        keybindingContext: null,
        precondition: "editorHasSelection",
        run: function(ed) {
          cep.util.openURLInDefaultBrowser(
            ed.getModel().getValueInRange(ed.getSelection())
          );
          return null;
        }
      });
      this.editor.addAction({
        id: "save",
        label: "Save",
        precondition: null,
        keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S],
        keybindingContext: null,
        contextMenuGroupId: "io",
        contextMenuOrder: 1.6,
        run: function(ed) {
          if (/untitled/.test(self.$route.params.id)) {
            console.log("Rerouting to save as");
            self.app.csInterface.evalScript(`ovidSaveAsDialog()`, state => {
              if (/\/c\//.test(state)) {
                state = state.replace(/\/c\//, "C://");
              }
              if (state.length > 7) {
                window.cep.fs.writeFile(state, self.contents);
                self.app.tabsList.renameTab(
                  state.match(/[^\/|\\]*$/)[0],
                  state
                );
              } else {
                self.editor.focus();
              }
            });
          } else {
            // console.log("This is not dirty");
            window.cep.fs.writeFile(
              self.app.tabsList.activeItem.path,
              self.contents
            );
          }
          self.isDirty = false;
          self.app.tabsList.activeItem.isDirty = false;
          self.app.tabsList.updateTabsInStorage();
        }
      });
      this.editor.addAction({
        id: "inspect",
        label: "Inspect Panel with Chrome",
        precondition: null,
        keybindings: [
          monaco.KeyMod.CtrlCmd | monaco.KeyCode.Shift | monaco.KeyCode.KEY_I
        ],
        keybindingContext: null,
        contextMenuGroupId: "action",
        contextMenuOrder: 2.2,
        run: function(ed) {
          launchLocalHost();
        }
      });
      this.editor.addAction({
        id: "save-as",
        label: "Save As...",
        precondition: null,
        keybindings: [
          monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KEY_S
        ],
        keybindingContext: null,
        contextMenuGroupId: "io",
        contextMenuOrder: 1.7,
        // 'C:\\Users\\TRSch\\AppData\\Roaming\\Adobe\\CEP\\extensions\\ovid\\src\\tabs\\test.jsx',
        run: function(ed) {
          self.app.csInterface.evalScript(`ovidSaveAsDialog()`, state => {
            if (/\/c\//.test(state)) {
              state = state.replace(/\/c\//, "C://");
            }
            if (state.length > 7) {
              window.cep.fs.writeFile(state, self.contents);
              self.app.tabsList.renameTab(state.match(/[^\/|\\]*$/)[0], state);
            } else {
              self.editor.focus();
            }
          });
        }
      });
      this.editor.addAction({
        id: "open",
        label: "Open file",
        precondition: null,
        keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_O],
        keybindingContext: null,
        contextMenuGroupId: "io",
        contextMenuOrder: 1.6,
        run: function(ed) {
          self.app.csInterface.evalScript(`ovidOpenDialog()`, state => {
            if (/\/c\//.test(state)) {
              state = state.replace(/\/c\//, "C://");
            }
            if (state.length > 7) {
              // console.log(state);
              let results = window.cep.fs.readFile(state);
              // console.log(results);
              if (!results.err)
                self.app.tabsList.newOpenTab(
                  state.match(/[^\/|\\]*$/)[0],
                  state,
                  results.data
                );
              // else
              // log error
            } else {
              self.editor.focus();
            }
          });
        }
      });
      this.editor.addAction({
        id: "new-file",
        label: "New file",
        precondition: null,
        keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_N],
        keybindingContext: null,
        contextMenuGroupId: "io",
        contextMenuOrder: 1.5,
        run: function(ed) {
          self.app.tabsList.newTab();
        }
      });
      this.editor.addAction({
        id: "reload",
        label: "Refresh Extension",
        precondition: null,
        keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_R],
        keybindingContext: null,
        contextMenuGroupId: "action",
        contextMenuOrder: 2.1,
        run: function(ed) {
          location.reload();
        }
      });
      this.editor.addAction({
        id: "cycle-theme",
        label: "Change editor theme",
        contextMenuGroupId: "action",
        contextMenuOrder: 2.2,
        keybindingContext: null,
        run: function(ed) {
          // self.app.runEditor(self.selection);
          let themes = ed._themeService._knownThemes;
          console.log(themes);
          // let theme = ed.getTheme()
          // console.log(ed);
          monaco.editor.setTheme("vs");
          self.editor.setTheme("vs");
          console.log(self.editor);
          return null;
        }
      });
      this.editor.addAction({
        id: "close-file",
        label: "Close file",
        precondition: null,
        keybindings: [monaco.KeyMod.Escape],
        keybindingContext: null,
        contextMenuGroupId: "io",
        contextMenuOrder: 1.9,
        run: function(ed) {
          self.app.tabsList.closeTab();
        }
      });
      this.editor.addAction({
        id: "next-tab",
        label: "Next Tab",
        precondition: null,
        keybindings: [monaco.KeyMod.Alt | monaco.KeyCode.RightArrow],
        keybindingContext: null,
        contextMenuGroupId: "action",
        contextMenuOrder: 1.5,
        run: function(ed) {
          self.app.tabsList.nextTab();
        }
      });
      this.editor.addAction({
        id: "prev-tab",
        label: "Previous Tab",
        precondition: null,
        keybindings: [monaco.KeyMod.Alt | monaco.KeyCode.LeftArrow],
        keybindingContext: null,
        contextMenuGroupId: "action",
        contextMenuOrder: 1.5,
        run: function(ed) {
          self.app.tabsList.prevTab();
        }
      });
    },
    resize(evt) {
      this.handleEditorSize();
      this.app.console.handleResize(
        this.$el.children.contents.children[2].offsetHeight
      );
    },
    checkKey(evt) {
      if (evt.key == "Escape") this.app.tabsList.closeTab(null);
      // if (evt.key == "Enter" && evt.altKey) {
      //   this.app.runEditor();
      // } else {
      // }
    },
    onChange(value) {
      this.app.storage.setItem(this.$route.params.id || "doc", value);
    },
    padTop() {
      return `
        background-color: #1e1e1e;
        width: 100%;
        height: ${this.topPadding}px
      `;
    },
    handleEditorSize() {
      let paneL = document.getElementById("paneL");
      this.editorW = window.innerWidth - this.wOffset;
      this.editorH = this.$el.children.contents.children[0].offsetHeight - 8;
      this.app.console.handleResize(
        this.$el.children.contents.children[2].offsetHeight
      );
      window.addEventListener("resize", () => {
        this.editorW = window.innerWidth - this.wOffset;
        this.editorH = this.$el.children.contents.children[0].offsetHeight - 8;
      });
    },
    restyleEditor(editor) {
      let theme = editor._themeService._theme;
      theme.colors["editor.background"].rgba = { r: 10, g: 10, b: 10, a: 1 };
    }
  }
};
</script>


<style>
.editorContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: centers;
  width: 100%;
  height: calc(100vh - 58px);
  /* margin-top: 6px; */
  overflow: hidden;
}

.monaco-editor,
.monaco-editor-background,
.monaco-editor .inputarea.ime-input {
  background-color: red;
}

.current-line {
  border: 0px solid transparent !important;
  background-color: var(--color-dark-accent);
}

/* Various colors used in syntax highlighting. Javascript doesn't pick up much unfortunately */
/* These work great in HTML for SVG */
.mtk1 {
  color: var(--mtk1) !important;
}

.mtk2 {
  color: var(--mtk2) !important;
}

.mtk3 {
  color: var(--mtk3) !important;
}

.mtk4 {
  color: var(--mtk4) !important;
}

.mtk5 {
  /* String */
  color: var(--mtk5) !important;
}

.mtk6 {
  /* Number */
  color: var(--mtk6) !important;
}

.mtk7 {
  color: var(--mtk7) !important;
}

.mtk8 {
  /* Keyword like let/var JS */
  /* tags for HTML */
  color: var(--mtk8) !important;
}

.mtk9 {
  /* Default */
  color: var(--mtk9) !important;
}

.mtk10 {
  /* Default */
  color: var(--mtk10) !important;
}
</style>
