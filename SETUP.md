# ovid

> Far easier than you might expect

![](https://thumbs.gfycat.com/BouncyEvilAffenpinscher-size_restricted.gif)

## How it's done:

> This assumes you're using [generator-cep-vue-cli](https://github.com/Inventsable/generator-cep-vue-cli) for a Vue CLI 3 panel or in the least Webpack as tooling

- Install [monaco-editor-webpack-plugin](https://github.com/Microsoft/monaco-editor-webpack-plugin) and any valid Monaco library (such as the [original](https://github.com/microsoft/monaco-editor) or the [Vue wrapper shown below](https://github.com/FE-Mars/monaco-editor-vue))

```bash
# Installing the webpack plugin and a prebaked Vue component
npm install monaco-editor-webpack-plugin monaco-editor-vue
```

- Add the webpack plugin to your `vue.config.js` file:

```js
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
module.exports = {
  publicPath: "./",
  configureWebpack: {
    plugins: [
      new MonacoWebpackPlugin({
        // available options are documented at https://github.com/Microsoft/monaco-editor-webpack-plugin#options
        languages: [
          "javascript",
          "typescript",
          "css",
          "html",
          "json",
          "markdown"
        ]
      })
    ]
  }
};
```

> If not using Vue CLI, [refer to the plugin documentation for webpack.config.js](https://github.com/Microsoft/monaco-editor-webpack-plugin#using)

- That's it! Now try it out 👍

## Example component from [monaco-editor-vue](https://github.com/FE-Mars/monaco-editor-vue)

```html
<template>
  <div id="app">
    <MonacoEditor
      width="800"
      height="500"
      theme="vs-dark"
      language="javascript"
      :options="options"
      @change="onChange"
    ></MonacoEditor>
  </div>
</template>

<script>
  import MonacoEditor from "monaco-editor-vue";
  export default {
    name: "App",
    components: {
      MonacoEditor
    },
    data() {
      return {
        options: {
          //Monaco Editor Options
        }
      };
    },
    methods: {
      onChange(value) {
        console.log(value);
      }
    }
  };
</script>
```

## Adding typescript support shown above

If you're using Javascript, be sure to include both `javascript` and `typescript` as languages -- `typescript` is what generates the auto-suggestions while writing in `javascript`.

I manually rigged both FEMar's above Vue component and Ten A's fork of pravdomil's types together, modifying only what I needed to make it work, [seen here](https://github.com/Inventsable/ovid/tree/master/src/components/monaco-adobe). I had to [add a single function](https://github.com/Inventsable/ovid/blob/master/src/components/monaco-adobe/monaco.js#L108) that reads the contents of each typescript file (themselves stripped of top-line references), appends them to a single variable, then passes them into monaco's library data before initialization. Should be app/workspace agnostic and able to be copy/pasted with exception to needing `npm install monaco-editor` directly rather than `npm install`monaco-editor-vue`.
