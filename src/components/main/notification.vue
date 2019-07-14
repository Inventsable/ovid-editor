<template>
  <!-- https://vuetifyjs.com/en/components/snackbars#snackbar -->
  <v-snackbar top v-model="status" :style="noteStyle()" :timeout="timeout" color="primary darken-1">
    {{ text }}
    <v-btn block dark flat @click="hide()">
      <v-icon>close</v-icon>
    </v-btn>
  </v-snackbar>
</template>

<script>
export default {
  name: "notification",
  data: () => ({
    timeout: 2000,
    status: false
  }),
  props: {
    text: String,
    color: String
  },
  computed: {
    app() {
      return this.$root.$children[0];
    }
  },
  methods: {
    show() {
      this.status = true;
    },
    hide() {
      this.status = false;
    },
    noteStyle() {
      return `
        z-index: 1001;
      `;
    }
  }
};
</script>

