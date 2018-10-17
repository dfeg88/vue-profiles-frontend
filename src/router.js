import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import CreateProfile from './views/CreateProfile.vue'
import ViewProfiles from './views/ViewProfiles.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/create",
      name: "create",
      component: CreateProfile
    },
    {
      path: '/profiles',
      name: 'profiles',
      component: ViewProfiles
    }
  ]
});
