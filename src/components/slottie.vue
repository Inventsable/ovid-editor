<template>
  <div class="slottie-container">
    <div class="slottie-animation"></div>
  </div>
</template>

<script>
import * as lottie from "lottie-web";
import loading from "../assets/wrench.json";

export default {
  name: "slottie",
  data: () => ({
    speed: 1,
    elt: null,
    doneLoading: false,
    animData: null,
    loop: true,
    autoplay: true
  }),
  computed: {
    app() {
      return this.$root.$children[0];
    },
    loadingscreen() {
      return this.app.loadingscreen ? this.app.loadingscreen : null;
    }
  },
  mounted() {
    this.elt = this.$el.children[0];
    this.init();
  },
  methods: {
    init() {
      this.animData = this.buildAnimation();
      this.animData.addEventListener("loopComplete", this.isDone);
      this.animData.play();
    },
    isDone() {
      if (this.loadingscreen.canPass) this.$emit("done");
    },
    buildAnimation() {
      const self = this;
      const animData = {
        wrapper: self.elt,
        animType: "svg",
        loop: self.loop,
        prerender: true,
        autoplay: self.autoplay
      };
      animData.animationData = loading;
      return lottie.loadAnimation(animData);
    }
  }
};
</script>

<style>
svg {
  width: 100%;
}

.slottie-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.slottie-animation {
  max-width: 200px;
}

.anim-main {
  fill: var(--color-main);
  stroke: var(--color-main);
}

.anim-mask {
  fill: var(--color-bg);
}
</style>
