import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme: {
    primary: '#46a0f5',
    accent: '#525252'
  },
  breakpoint: {
    thresholds: {
      xs: 200,
      sm: 450
    },
    scrollbarWidth: 10
  }
});
