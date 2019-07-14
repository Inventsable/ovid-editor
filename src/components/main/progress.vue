<template>
  <!-- https://vuetifyjs.com/en/components/progress#progress -->
  <div class="progress-container">
    <v-progress-linear
      id="progressbar"
      v-model="value"
      :active="show"
      :indeterminate="query"
      :query="true"
      :style="getProgressStyle()"
      height="4"
      :color="getProgressColor()"
    ></v-progress-linear>
  </div>
</template>

<script>
export default {
  name: "progressbar",
  data: () => ({
    value: 0,
    color: "primary",
    show: true,
    query: false
  }),
  computed: {
    app() {
      return this.$root.$children[0];
    }
  },
  mounted() {
    this.app.progress = this;
  },
  methods: {
    getProgressColor() {
      if (!this.query && this.value == 0) return "rgb(21,21,21)";
      // else
      return this.color;
    },
    getProgressStyle() {
      return `
        position: absolute;
        top: 36px;
        margin-top: 0px;
        left: 0px;
        z-index: 2000;
      `;
    },
    startIndeterminateProgress() {
      this.color = "primary";
      this.query = true;
      this.show = true;
      this.value = 0;
    },
    startStepProgress() {
      this.color = "primary";
      this.show = true;
      this.value = 0;
    },
    stepInProgress(index, max) {
      this.value = Math.floor(((index + 1) / max) * 100);
    },
    stopProgress() {
      this.query = false;
      this.show = false;
      this.value = 0;
      this.color = "rgb(21,21,21)";
    }
  }
};
</script>

<style>
.v-progress-linear {
  margin: 0px;
  z-index: 201;
}

.progress-container {
  height: 0px;
}

.progress-mask {
  position: absolute;
  top: 30px;
  left: 0px;
  z-index: 200;
  height: 4px;
  width: 100%;
  background-color: var(--color-dark-accent);
}
</style>
