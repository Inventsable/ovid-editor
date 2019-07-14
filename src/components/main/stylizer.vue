<template>
  <div></div>
</template>

<script>
// Invisible component which handles app theme and styling. All colors are based on CSS variables at :root,
// which this component will dynamically change (reflecting throughout the rest of the app)
// Access this component anywhere via this.app.stylizer (this.$root.$children[0].stylizer)

export default {
  name: "stylizer",
  data: () => ({
    theme: null,
    hostStyle: {
      ILST: [
        {
          name: "color-bg",
          lightest: "#f0f0f0",
          light: "#b8b8b8",
          dark: "#535353",
          darkest: "#323232"
        },
        {
          name: "color-icon",
          lightest: "#535353",
          light: "#404040",
          dark: "#c2c2c2",
          darkest: "#b7b7b7"
        },
        {
          name: "color-border",
          lightest: "#dcdcdc",
          light: "#5f5f5f",
          dark: "#5f5f5f",
          darkest: "#5f5f5f"
        },
        {
          name: "color-button-hover",
          lightest: "#f9f9f9",
          light: "#dcdcdc",
          dark: "#4a4a4a",
          darkest: "#292929"
        },
        {
          name: "color-button-active",
          lightest: "#bdbdbd",
          light: "#969696",
          dark: "#404040",
          darkest: "#1f1f1f"
        },
        {
          name: "color-button-disabled",
          lightest: "#e6e6e6",
          light: "#b0b0b0",
          dark: "#5a5a5a",
          darkest: "#393939"
        },
        {
          name: "color-text-active",
          lightest: "#484848",
          light: "#101010",
          dark: "#d8d8d8",
          darkest: "#1b1b1b"
        },
        {
          name: "color-text-default",
          lightest: "#484848",
          light: "#101010",
          dark: "#d5d5d5",
          darkest: "#a1a1a1"
        },
        {
          name: "color-text-disabled",
          lightest: "#c6c6c6",
          light: "#989898",
          dark: "#737373",
          darkest: "#525252"
        },
        {
          name: "color-input-focus",
          lightest: "#ffffff",
          light: "#e3e3e3",
          dark: "#ffffff",
          darkest: "#fcfcfc"
        },
        {
          name: "color-input-idle",
          lightest: "#ffffff",
          light: "#e3e3e3",
          dark: "#474747",
          darkest: "#262626"
        },
        {
          name: "color-scrollbar",
          lightest: "#fbfbfb",
          light: "#c4c4c4",
          dark: "#4b4b4b",
          darkest: "#2a2a2a"
        },
        {
          name: "color-scrollbar-thumb",
          lightest: "#dcdcdc",
          light: "#a8a8a8",
          dark: "#606060",
          darkest: "#383838"
        },
        {
          name: "color-scrollbar-thumb-hover",
          lightest: "#a6a6a6",
          light: "#7b7b7b",
          dark: "#747474",
          darkest: "#525252"
        },
        {
          name: "width-scrollbar-thumb",
          lightest: "20px",
          light: "20px",
          dark: "20px",
          darkest: "20px"
        },
        {
          name: "radius-scrollbar-thumb",
          lightest: "20px",
          light: "10px",
          dark: "10px",
          darkest: "10px"
        }
      ]
    }
  }),
  computed: {
    app() {
      return this.$root.$children[0];
    },
    appName() {
      return JSON.parse(window.__adobe_cep__.getHostEnvironment()).appName;
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      window.__adobe_cep__.addEventListener(
        "com.adobe.csxs.events.ThemeColorChanged",
        this.appThemeChanged
      );
      this.appThemeChanged();
      this.app.stylizer = this;
    },
    appThemeChanged() {
      const skinInfo = window.__adobe_cep__.getHostEnvironment();
      this.findTheme(JSON.parse(skinInfo).appSkinInfo);
      this.$emit("appThemeChange", this.getCurrentSkin());
    },
    getCurrentSkin() {
      let mirror = {};
      this.hostStyle.ILST.forEach(prop => {
        mirror[prop.name] = prop[this.theme];
      });
      return mirror;
    },
    findTheme(appSkin) {
      const bgcolor = appSkin.panelBackgroundColor.color;
      if (
        JSON.parse(window.__adobe_cep__.getHostEnvironment()).appName == "ILST"
      ) {
        if (bgcolor.red > 230) this.theme = "lightest";
        else if (bgcolor.red > 170) this.theme = "light";
        else if (bgcolor.red > 80) this.theme = "dark";
        else this.theme = "darkest";
        this.setILST();
      } else if (
        JSON.parse(window.__adobe_cep__.getHostEnvironment()).appName == "AEFT"
      ) {
        this.setAEFT(appSkin);
      } else {
        console.log(`Style wasn't recognized`);
      }
    },
    setILST() {
      console.log(`${this.appName} theme is ${this.theme}`);
      this.hostStyle.ILST.forEach(prop => {
        console.log(`adobe-${prop.name} == ${prop[this.theme]}`);
        this.setCSS(`adobe-${prop.name}`, prop[this.theme]);
      });
    },

    // THIS NEEDS REWORK
    setAEFT(appSkin) {
      const bgcolor = appSkin.panelBackgroundColor.color;
      this.app.setCSS("adobe-color-bg", this.toHex(bgcolor));
      this.app.setCSS("adobe-color-dark", this.toHex(bgcolor, -15));
      this.app.setCSS("adobe-color-input-idle", this.toHex(bgcolor, -12));
      this.app.setCSS("adobe-color-icon", this.toHex(bgcolor, 30));
      this.app.setCSS("adobe-color-button-disabled", this.toHex(bgcolor, 20));
      this.app.setCSS("adobe-color-scrollbar", this.toHex(bgcolor, -5));
      this.app.setCSS("adobe-color-scrollbar-thumb", this.toHex(bgcolor, 18));
      this.app.setCSS(
        "adobe-color-scrollbar-thumb-hover",
        this.toHex(bgcolor, 35)
      );
      this.app.setCSS("input-border-radius", "5px");
    },
    getCSS(prop) {
      // Returns current value of CSS variable
      // prop == typeof String as name of variable, with or without leading dashes:
      // this.getCSS('color-bg') || this.getCSS('--scrollbar-width')
      return window
        .getComputedStyle(document.documentElement)
        .getPropertyValue(`${/^\-\-/.test(prop) ? prop : "--" + prop}`);
    },
    setCSS(prop, data) {
      // Sets value of CSS variable
      // prop == typeof String as name of variable, with or without leading dashes:
      // this.setCSS('color-bg', 'rgba(25,25,25,1)') || this.setCSS('--scrollbar-width', '20px')
      document.documentElement.style.setProperty(
        `${/^\-\-/.test(prop) ? prop : "--" + prop}`,
        data
      );
    },
    toHex(color, delta) {
      function computeValue(value, delta) {
        var computedValue = !isNaN(delta) ? value + delta : value;
        if (computedValue < 0) {
          computedValue = 0;
        } else if (computedValue > 255) {
          computedValue = 255;
        }

        computedValue = Math.round(computedValue).toString(16);
        return computedValue.length == 1 ? "0" + computedValue : computedValue;
      }
      var hex = "";
      if (color) {
        hex =
          computeValue(color.red, delta) +
          computeValue(color.green, delta) +
          computeValue(color.blue, delta);
      }
      return "#" + hex;
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");

:root {
  /* 
      Below are CSS variables controlled by stylizer
      By default hard-coded to Illustrator's dark theme but will ultimately be overridden on launch
   */
  --adobe-color-bg: #323232;
  --adobe-color-dark: #1f1f1f;
  --adobe-color-selection: #46a0f5;
  --adobe-color-disabled: #525252;
  --adobe-color-hover: rgba(255, 255, 225, 0.2);

  --adobe-color-icon: #a1a1a1;
  --adobe-color-border: #3e3e3e;
  --adobe-color-text-active: #1b1b1b;
  --adobe-color-text-default: #a1a1a1;
  --adobe-color-text-disabled: #525252;
  --adobe-color-input-focus: #fcfcfc;
  --adobe-color-input-idle: #262626;
  --adobe-color-input-text: rgba(255, 255, 255, 0.7);
  --adobe-color-input-label: rgba(255, 255, 255, 0.6);

  --adobe-color-scrollbar: #2a2a2a;
  --adobe-color-scrollbar-thumb: #3e3e3e;
  --adobe-color-scrollbar-thumb-hover: #525252;
  --adobe-width-scrollbar: 14px;
  --adobe-width-scrollbar-thumb: 14px;
  --adobe-radius-scrollbar-thumb: 20px;

  --quad: cubic-bezier(0.48, 0.04, 0.52, 0.96);
  --quart: cubic-bezier(0.76, 0, 0.24, 1);
  --quint: cubic-bezier(0.84, 0, 0.16, 1);

  background-color: var(--adobe-color-bg);
  color: var(--adobe-color-text-default);
  font-family: "Open Sans", sans-serif;
  font-size: 10px;
}

/* Override certain default features to be more inline with Adobe's host app style */
.theme--dark.application {
  background-color: var(--color-bg);
}
body::-webkit-scrollbar {
  width: 0px;
}
#app::-webkit-scrollbar {
  display: block;
}
::-webkit-scrollbar {
  background-color: var(--color-scrollbar);
  width: var(--scrollbar-width);
}
::-webkit-scrollbar-thumb {
  width: var(--scrollbar-width);
  background: var(--color-scrollbar-thumb);
  border-radius: var(--scrollbar-thumb-radius);
}
::-webkit-scrollbar-thumb:hover {
  background: var(--color-scrollbar-thumb-hover);
}
::-webkit-scrollbar-resizer {
  display: none;
}
::-webkit-scrollbar-button {
  height: 0px;
}

/* Minor changes to vuetify's default component style */
.theme--dark.v-list {
  background-color: var(--color-input-idle);
}
.theme--dark.v-text-field--solo > .v-input__control > .v-input__slot {
  background-color: var(--color-scrollbar);
}
</style>
