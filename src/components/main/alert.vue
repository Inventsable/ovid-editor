<template>
  <div class="alertbar">
    <!-- https://vuetifyjs.com/en/components/alerts#alert -->
    <v-alert light dismissible :value="state" :type="type" transition="slide-y-transition">{{text}}</v-alert>
  </div>
</template>

<script>
export default {
  name: "alert",
  data: () => ({
    state: false,
    type: "error",
    text: "Hello world"
  }),
  computed: {
    app() {
      return this.$root.$children[0];
    }
  },
  mounted() {
    this.app.alert = this;
  }
};
</script>

<style>
.alertbar {
  position: absolute;
  top: 0px;
  width: 100%;
  z-index: 2000;
}

.v-alert {
  padding: 11px 16px;
}
.v-alert__dismissible {
  color: rgba(0, 0, 0, 0.3);
}

.v-alert .theme--dark.v-icon {
  color: rgba(0, 0, 0, 0.3);
}
</style>
