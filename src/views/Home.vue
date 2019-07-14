<template>
  <div id="container">
    <monacoeditor :code="fakeCode" lang="javascript" />
  </div>
</template>

<script>
const require = cep_node.require || require;
const fs = require("fs");

import monacoeditor from "@/components/editor/editor.vue";

export default {
  name: "home",
  components: {
    monacoeditor
  },
  computed: {
    app() {
      return this.$root.$children[0];
    },
    root() {
      return decodeURI(window.__adobe_cep__.getSystemPath("extension")).replace(
        /file\:\/{1,}/,
        ""
      );
    }
  },
  watch: {
    $route() {
      this.retrieveFromStorage();
      this.app.storage.setItem("lastRoute", this.$route.params.id);
    }
  },
  data: () => ({
    fakeCode: "text"
  }),
  created() {
    console.log(this.$router);
    console.log("Hello?");
    console.log(this.$route);
    if (!this.$route.params.id) {
      console.log("Change route");
      this.$router.push({
        name: "home",
        params: {
          id: "untitled.jsx"
        }
      });
    } else {
      let lastRoute = this.app.storage.getItem("lastRoute") || "untitled.jsx";
      this.fakeCode = this.app.storage.getItem(lastRoute) || "";
    }
  },
  methods: {
    retrieveFromStorage() {
      let label = this.$route.params.id;
      if (this.app.storage.getItem(label))
        this.fakeCode = this.app.storage.getItem(label);
      // this.fakeCode = JSON.parse(this.app.storage.getItem(label));
      else this.fakeCode = "";
    }
  }
};
</script>

<style>
.home {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
#container {
  height: 100%;
}

.v-content__wrap {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
