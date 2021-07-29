import Vue from 'vue';
import App from './App.vue';
import { extend, ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import * as rules from 'vee-validate/dist/rules';
import { ValidationObserver } from 'vee-validate';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

library.add(faMinusCircle)

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
