<template>
  <div class="main-content">
    <span class="title mt-4" style="color: var(--color-text-default)">{{msg}}</span>
  </div>
</template>

<script>
// import slottie from "./slottie";

export default {
  // components: {
  //   slottie
  // },
  data: () => ({
    // msg: "Hello world"
  }),
  computed: {
    app() {
      return this.$root.$children[0];
    },
    msg() {
      return `${
        this.app.identity ? "Hello " + this.app.identity.extName : null
      }`;
    }
  },
  mounted() {
    this.app.home = this;
  }
};
</script>

<style>
.main-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
}
</style>
