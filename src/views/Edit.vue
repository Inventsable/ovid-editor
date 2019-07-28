<template>
  <div id="container">
    <monacoedit lang="javascript" />
  </div>
</template>

<script>
import monacoedit from "@/components/editor/neweditor.vue";
// import monacoeditor from "monaco-editor-vue";

export default {
  name: "Edit",
  components: {
    monacoedit
  },
  computed: {
    app() {
      return this.$root.$children[0];
    }
  },
  watch: {
    $route() {
      // this.retrieveFromStorage();
      // this.app.storage.setItem("lastRoute", this.$route.params.id);
    }
  },
  data: () => ({
    fakeCode: ""
  }),
  created() {
    console.log(this.$router);
    console.log("Hello?");
    console.log(this.$route);
    if (!this.$route.params.id) {
    } else {
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
#container {
  height: 100%;
}

.v-content__wrap {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
