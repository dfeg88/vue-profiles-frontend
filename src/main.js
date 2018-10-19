import '@babel/polyfill'
import Vue from "vue";
import VeeValidate from 'vee-validate';
import './plugins/vuetify'
import Vuetify from 'vuetify'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import SidenavOptions from '@/components/navigation/SidenavOptions'
import EditProfile from '@/components/profile/EditProfile'

Vue.config.productionTip = false;
Vue.use(Vuetify)
Vue.use(VeeValidate)
Vue.component('sidenav-options', SidenavOptions)
Vue.component('edit-profile', EditProfile)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
