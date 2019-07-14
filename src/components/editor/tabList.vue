<template>
  <v-layout class="clipped-container-list" style="z-index: 2002;">
    <v-toolbar @wheel="scrollTabs" flat dense style="height: 36px;padding: 0px;margin: 0px;">
      <v-toolbar-side-icon @click="toggleDrawer()"></v-toolbar-side-icon>
      <div class="clipped-list">
        <v-btn-toggle mandatory v-model="activeTab" active-class="active-tab" class="tabs-list">
          <v-btn v-for="(tab, i) in tabs" :key="i" flat>
            <v-icon color="#f7df1e" class="pr-1">mdi-language-javascript</v-icon>
            <span class="text-none">{{tab.label}}</span>

            <span
              style="width: 16px; margin-left: 4px; display: flex; align-items: center;justify-contents: center;"
              @mouseenter="displayExit(tab)"
              @mouseleave="returnExit(tab)"
            >
              <v-icon v-if="tab.isDirty && !tab.isHover" small>mdi-circle-medium</v-icon>
              <v-icon v-else @click="closeTab(tab.label)" small>mdi-close</v-icon>
            </span>
          </v-btn>
        </v-btn-toggle>
      </div>

      <!-- <v-divider vertical class="pr-1"></v-divider> -->

      <v-btn-toggle id="addBtn" v-model="addTabber">
        <v-btn @click="newTab()">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-btn-toggle>
    </v-toolbar>
  </v-layout>
</template>

<script>
export default {
  name: "tabslist",
  data: () => ({
    tabs: [],
    paths: [],
    activeTab: null,
    toolbarElt: null,
    addTabber: null,
    tabElt: null,
    isHover: false,
    lastState: null
  }),
  watch: {
    activeTab(tab) {
      this.changeRoute(this.tabs[tab]);
    },
    addTabber(val) {
      if (val) this.addTabber = null;
    },
    tabs(tabs) {
      this.updateTabsInStorage();
      console.log(tabs);
    },
    isDirty(state) {
      // console.log(state);
    }
    // cursorPos(pos) {
    // console.log(pos);
    // this.tabs[this.activeTab].cursor = [pos.column, pos.lineNumber];
    // this.updateTabsInStorage();
    // }
  },
  computed: {
    app() {
      return this.$root.$children[0];
    },
    activeItem() {
      return this.tabs[this.activeTab];
    },
    cursorPos() {
      // return this.app.monaco ? this.app.monaco.editor.getPosition() : null;
    },
    isDirty() {
      return this.activeItem ? this.activeItem.isDirty : false;
    }
  },
  mounted() {
    this.app.tabsList = this;
    this.correctStyle();
    if (this.app.storage.getItem("masterTabs")) {
      this.getLastTabs();
    } else {
      this.tabs.push({
        label: "untitled.jsx"
      });
      this.activeTab = 0;
    }
  },
  methods: {
    displayExit(tab) {
      // (this.lastState = tab.isDirty), (this.isHover = true);
      tab.isHover = true;
      // console.log(`${this.lastState} => ${tab.isDirty} => ${this.isHover}`);
    },
    returnExit(tab) {
      // (tab.isDirty = this.lastState), (this.isHover = false);
      tab.isHover = false;
      // console.log(`${this.lastState} => ${tab.isDirty} => ${this.isHover}`);
    },
    getLastTabs() {
      this.tabs = JSON.parse(this.app.storage.getItem("masterTabs"));
      if (this.app.storage.getItem("lastRoute")) {
        let lastRoute = this.app.storage.getItem("lastRoute");
        this.tabs.forEach((tab, i) => {
          if (tab.label == lastRoute) {
            this.activeTab = i;
            // let pos = {
            //   lineNumber: tab.lineNumber,
            //   column: tab.column
            // };
            // this.app.monaco.editor.setPosition(pos);
            // this.app.monaco.editor.revealPositionInCenter(pos);
          }
          tab.isDirty = false;
        });
        this.app.monaco.editor.focus();
      }
    },
    correctStyle() {
      this.tabElt = document.getElementsByClassName("clipped-list")[0];
      this.toolbarElt = document.getElementsByClassName(
        "v-toolbar__content"
      )[0];
      this.toolbarElt.style.height = "36px";
      this.toolbarElt.style.marginRight = "0px";
      this.toolbarElt.style.paddingRight = "0px";
    },
    toggleDrawer() {
      console.log(this.app.drawer);
      this.app.drawer.show();
    },
    getGenericTitle() {
      let untitleds = this.tabs.filter(tab => {
        return /untitled/.test(tab.label);
      });
      return `untitled${untitleds.length ? untitleds.length + 1 : ""}.jsx`;
    },
    changeRoute(tab) {
      const self = this;
      if (tab) {
        this.$router.push({
          name: "home",
          params: {
            id: tab.label
          }
        });
        // this.app.monaco.editor.setPosition({
        //   lineNumber: self.activeItem.cursorPos[1],
        //   column: self.activeItem.cursorPos[0]
        // });
        // this.app.monaco.editor.focus();
      } else {
        console.log(tab);
      }
    },
    newTab() {
      let newname = this.getGenericTitle();
      let newtab = {
        label: newname,
        isHover: false,
        isDirty: false
      };
      this.tabs.push(newtab);
      setTimeout(() => {
        this.activeTab = this.tabs.length - 1;
        setTimeout(() => {
          this.$router.push({
            name: "home",
            params: {
              id: newname
            }
          });
        }, 10);
      }, 10);
    },
    renameTab(name, path) {
      let lastRoute = this.app.storage.getItem("lastRoute");
      this.app.storage.removeItem(lastRoute);
      this.app.storage.setItem(name, this.app.monaco.contents);
      this.tabs[this.activeTab].label = name;
      this.tabs[this.activeTab]["path"] = path;
      this.tabs[this.activeTab].isDirty = false;

      this.changeRoute(this.tabs[this.activeTab]);
      this.updateTabsInStorage();
    },
    updateTabsInStorage() {
      // let list = [];
      // this.tabs.forEach(tab => {
      //   list.push(tab.label);
      // });
      // this.app.storage.setItem("tabList", list.join(";"));
      this.app.storage.setItem("masterTabs", JSON.stringify(this.tabs));
    },
    newOpenTab(name, path, content) {
      let newtab = {
        label: name,
        path: path,
        isHover: false,
        isDirty: false
      };
      this.tabs.push(newtab);
      this.paths.push(path);

      setTimeout(() => {
        this.activeTab = this.tabs.length - 1;
        this.app.storage.setItem(name, content);
      }, 10);
    },
    closeTab(label, overridden = false) {
      const self = this;
      label = label || this.tabs[this.activeTab].label;
      if (!overridden) {
        if (
          (/untitled/.test(this.$route.params.id) &&
            this.app.monaco.contents.length) ||
          this.activeItem.isDirty
        ) {
          this.app.csInterface.evalScript(`ovidCloseDialog()`, state => {
            let realstate = JSON.parse(state);
            if (realstate) {
              self.closeTab(label, true);
            } else {
              return self.app.monaco.editor.focus();
            }
          });
        } else {
          self.closeTab(label, true);
        }
      } else {
        this.tabs = this.tabs.filter(tab => {
          return tab.label !== label;
        });
        this.app.storage.setItem(label, "");
        if (this.tabs.length < this.activeTab)
          this.activeTab = this.tabs.length - 1;
        console.log(this.activeTab);
      }
    },
    nextTab() {
      this.activeTab =
        this.activeTab < this.tabs.length - 1 ? this.activeTab + 1 : 0;
    },
    prevTab() {
      this.activeTab =
        this.activeTab > 0 ? this.activeTab - 1 : this.tabs.length - 1;
    },
    // BROKEN using v-toolbar instead of div
    scrollTabs(evt) {
      // console.log(evt);
      if (evt.deltaY > 0) {
        this.tabElt.scrollLeft =
          this.tabElt.scrollLeft <= window.innerWidth
            ? this.tabElt.scrollLeft + window.innerWidth / 4
            : window.innerWidth;
      } else {
        this.tabElt.scrollLeft =
          this.tabElt.scrollLeft >= 0
            ? this.tabElt.scrollLeft - window.innerWidth / 4
            : 0;
      }
    }
  }
};
</script>


<style>
.clipped-list,
.clipped-container-list {
  max-height: 36px;
  box-sizing: border-box;
}

.v-toolbar__content {
  height: 36px;
}

.v-toolbar {
  /* border: 2px solid red; */
  display: flex;
  padding: 0px;
  margin: 0px;
  justify-content: flex-start;
  align-items: flex-end;
}

#addBtn > .v-btn-toggle .v-btn.v-btn--active {
  border: 2px solid red;
}

.theme--dark.v-btn-toggle {
  background-color: transparent;
}

.active-add {
  border: 2px solid red;
}

.add-btn {
  min-width: 36px;
  min-height: 36px;
  padding: 0px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  /* background-color: rgb(66, 66, 66); */
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}

.add-btn:hover {
  background-color: rgb(75, 75, 75);
}

.clipped-list {
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  /* transform: rotate(-90deg);
  transform-origin: right top; */
}

.clipped-list::-webkit-scrollbar {
  display: none;
}

.v-btn-toggle--selected {
  -webkit-box-shadow: 0px;
  box-shadow: none !important;
}

.v-btn--active {
  /* background-color: var(--adobe-color-scrollbar-thumb); */
  background-color: #1e1e1e !important;
  /* border: 2px solid red; */
}

.active-tab {
  background-color: var(--adobe-color-scrollbar-thumb-hover);
}
</style>
