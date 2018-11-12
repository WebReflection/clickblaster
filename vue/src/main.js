import Vue from 'vue';
import Counter from './components/Counter.vue';

Vue.config.productionTip = false;

window.setup = () => {
  new Vue({render: h => h(Counter)}).$mount('body');
};
