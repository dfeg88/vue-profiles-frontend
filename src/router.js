import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import CreateProfile from './views/profile/CreateProfile.vue'
import ViewProfiles from './views/profile/ViewProfiles.vue'
import HealthCheck from './views/health/HealthCheck'
import Times from './views/time/Times'

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
    },
    {
      path: '/health-check',
      name: 'health-check',
      component: HealthCheck
    },
    {
      path: '/times',
      name: 'times',
      component: Times
    }
  ]
});
