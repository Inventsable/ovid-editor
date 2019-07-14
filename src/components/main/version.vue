<template>
  <div class="versionFoot">{{version}}</div>
</template>

<script>
export default {
  name: "version",
  computed: {
    app() {
      return this.$root.$children[0];
    },
    version() {
      return this.app.identity ? this.app.identity.extVersion : null;
    }
  }
};
</script>

<style>
.versionFoot {
  cursor: default;
  position: absolute;
  bottom: 0px;
  right: 0px;
  padding: 0px 1rem 6px;
  color: var(--color-text-default);
  letter-spacing: 0.5ch;
  opacity: 0.5;
}
</style>
