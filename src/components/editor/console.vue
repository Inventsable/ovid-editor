<template>
  <div id="console" class="push-up">
    <div class="console-tab">Console</div>
    <!-- <v-layout > -->
    <div v-if="history.length" class="console-drawer">
      <div v-for="(line, i) in history" :key="i" class="console-line" :style="styleByType(line)">
        <v-icon small>{{line.error ? 'mdi-alert' : 'mdi-information'}}</v-icon>
        <span class="ml-2">{{line.text}}</span>
      </div>
    </div>
    <!-- </v-layout> -->
    <div v-else class="console-placeholder">Use console.log( ) to display information here</div>
    <div v-if="text.length" class="console-clear" @click="clearConsole()">
      <v-btn icon flat>
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
  </div>
</template>




<script>
export default {
  name: "consoler",
  data: () => ({
    hidden: false,
    text: "",
    history: [],
    height: 20
  }),
  computed: {
    app() {
      return this.$root.$children[0];
    }
  },
  mounted() {
    this.app.console = this;
    this.init();
  },
  watch: {
    text(contents) {
      // let consoleelt = document.getElementById("console");
      // consoleelt.scrollTop = consoleelt.scrollHeight;
      // console.log(`${consoleelt.scrollTop} => ${consoleelt.scrollHeight}`);
      this.scrollToBottom();
    }
  },
  methods: {
    styleByType(line) {
      // width: 100%;
      return `
        color: ${line.err ? "#ff0000" : "#fff"};
      `;
    },
    processText() {
      let temptext = this.text;
      temptext = temptext.replace("let", "var");
      temptext = temptext.replace("const", "var");
    },
    getStyle() {},
    handleResize(num) {
      this.height = `${num}px`;
      let consoleelt = document.getElementById("console");
      consoleelt.style.height = this.height;
    },
    init() {
      setTimeout(() => {
        this.app.csInterface.addEventListener("console", this.logData);
        this.app.csInterface.addEventListener("consoleerr", this.logError);
        this.app.csInterface.addEventListener(
          "clearconsole",
          this.clearConsole
        );
      }, 200);
    },
    hide() {
      this.show = false;
    },
    show() {
      this.show = true;
    },
    clearConsole() {
      console.log("Clearing console!");
      this.text = "";
    },
    logData(msg) {
      // this.text += `> ${msg.data}` + "<br>";
      this.history.push({
        text: msg.data,
        error: false
      });
    },
    logError(msg) {
      // this.text += `> ${msg.data}` + "<br>";
      this.history.push({
        text: msg.data,
        error: true
      });
    },
    scrollToBottom() {
      var div = document.getElementById("console");
      div.scrollTop = div.scrollHeight - div.clientHeight;
    }
  }
};
</script>


<style>
.push-up {
  position: absolute;
  bottom: 0px;
}

#console {
  background-color: var(--color-dark-accent);
  width: 100%;
  margin-top: 6px;
  /* min-height: 100px; */
  transform: rotate(0);
}

.console-tab {
  position: absolute;
  box-sizing: border-box;
  top: -20px;
  user-select: none;
  cursor: default;
  height: 20px;
  /* border: 2px solid red; */
  min-width: 50px;
  display: flex;
  justify-content: center;
  background-color: var(--color-dark-accent);
  align-items: flex-end;
  border-radius: 10px 10px 0px 0px;
}

.console-line {
  width: 100%;
}

.console-clear {
  position: absolute;
  top: 0px;
  right: 10px;
}

.console-drawer {
  /* border: 2px solid red; */
  padding: 10px;
  font-size: 1.5rem;
  height: 100%;
  overflow-y: scroll;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  /* flex-wrap: nowrap; */
}

.console-placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--adobe-color-scrollbar-thumb-hover);
  width: 100%;
  height: 100%;
  user-select: none;
  cursor: default;
  font-size: 2rem;
}
</style>
