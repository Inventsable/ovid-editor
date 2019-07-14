<template>
  <div class="loading-screen" v-if="showLoadingScreen">
    <div :class="isLoaded ? 'loading-out' : 'loading-in'">
      <slottie ref="slottie" @done="stopLoading()"/>
    </div>
  </div>
</template>

<script>
import slottie from "../slottie";

export default {
  name: "loadingscreen",
  components: {
    slottie
  },
  data: () => ({
    isLoaded: false,
    showLoadingScreen: true,
    canPass: false
  }),
  computed: {
    app() {
      return this.$root.$children[0];
    }
  },
  mounted() {
    const self = this;
    this.app.loadingscreen = this;
    setTimeout(() => {
      this.canPass = true;
    }, 2000);
  },
  methods: {
    stopLoading() {
      this.isLoaded = true;
      const self = this;
      setTimeout(() => {
        self.showLoadingScreen = false;
      }, 290);
    }
  }
};
</script>

<style>
.loading-screen,
.loading-out,
.loading-in {
  position: absolute;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  top: 0px;
  left: 0px;
  z-index: 9999;
  width: 100vw;
  height: 99vh;
  background-color: var(--color-bg);
}

.loading-in {
  -webkit-animation: fadein 300ms var(--quart);
  -moz-animation: fadein 300ms var(--quart);
  animation: fadein 300ms var(--quart);
}

.loading-out {
  -webkit-animation: fadeout 300ms var(--quart);
  -moz-animation: fadeout 300ms var(--quart);
  animation: fadeout 300ms var(--quart);
}

@keyframes fadeout {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
