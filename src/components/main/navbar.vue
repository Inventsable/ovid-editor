<template>
  <div>
    <!-- Toolbar element existing outside of route -->
    <progressbar />
    <div v-if="hasNavbar">
      <!-- https://vuetifyjs.com/en/components/toolbars#toolbar -->
      <v-toolbar app card dense dark>
        <!-- <v-toolbar-title>{{$route.name}}</v-toolbar-title> -->
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-spacer></v-spacer>

        <!-- https://vuetifyjs.com/en/components/buttons#button -->
        <!-- <v-btn v-for="(button, key) in buttons" :key="key" @click="goToLink(button.link)" icon flat>
          <v-icon small>{{button.icon}}</v-icon>
        </v-btn>-->

        <v-btn icon flat @click="runScript()">
          <v-icon>mdi-play-circle</v-icon>
        </v-btn>
      </v-toolbar>
    </div>
  </div>
</template>

<script>
import progressbar from "./progress";

export default {
  name: "navbar",
  components: {
    progressbar
  },
  data: () => ({
    buttons: [
      {
        icon: "mdi-vuetify",
        link: "https://vuetifyjs.com/en/components/toolbars#toolbar"
      }
    ],
    hasNavbar: false
  }),
  computed: {
    app() {
      return this.$root.$children[0];
    }
  },
  mounted() {
    this.app.navbar = this;
    const toolbar_content = document.querySelector(".v-toolbar__content");
    toolbar_content.style.height = `${this.app.getCSS("toolbar-height")}px`;
  },
  methods: {
    goToLink(link) {
      cep.util.openURLInDefaultBrowser(link);
    },
    runScript() {
      this.app.runEditor();
    }
  }
};
</script>

<style>
.darkToolbar,
.theme--dark.v-system-bar,
.theme--dark.v-toolbar {
  background-color: var(--color-dark-accent);
  cursor: default;
  z-index: 202;
}
</style>
