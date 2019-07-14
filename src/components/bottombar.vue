<template>
  <div class="bottomBar" :style="getHeight()">
    <div class="leftBar">
      <div class="widgets pr-2">
        <span v-if="needsCompile">
          <v-icon small>mdi-code-not-equal</v-icon>
        </span>
      </div>
      <span class="filepath">{{editorPath}}</span>
    </div>
    <span class="version-id">{{version}}</span>
  </div>
</template>

<script>
export default {
  name: "bottombar",
  data: () => ({
    widgets: []
  }),
  computed: {
    app() {
      return this.$root.$children[0];
    },
    version() {
      return this.app.identity ? this.app.identity.extVersion : null;
    },
    needsCompile() {
      return this.app.monaco ? this.app.monaco.needsCompile : null;
    },
    editorHasPath() {
      if (this.app.tabsList) {
        let activeTab = this.app.tabsList.activeItem;
        return activeTab.path;
      } else {
        return false;
      }
    },
    editorPath() {
      return this.editorHasPath
        ? this.app.tabsList
          ? this.app.tabsList.activeItem.path
          : "None"
        : "Snippet is saved temporarily in storage";
    }
  },
  methods: {
    getHeight() {
      return `
        height: ${this.app.getCSS("bottombar-height")}px;
      `;
    }
  }
};
</script>

<style>
.bottomBar {
  /* color: red; */
  /* border: 2px solid red; */
  position: absolute;
  bottom: 0px;
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;
  align-items: center;
  user-select: none;
  width: calc(100vw - 2px);
  border: 0px;
  background-color: var(--color-dark-accent);
}

.version-id {
  letter-spacing: 0.75ch;
  cursor: default;
}

.leftBar {
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-items: center;
}
</style>
