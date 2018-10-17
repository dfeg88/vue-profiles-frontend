<template>
  <v-app>
    <v-toolbar 
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="blue darken-1"
      dark
      app
      fixed>
      <v-toolbar-title mr-4>
        <router-link :to="{name: 'home'}">Profile Manager</router-link>
      </v-toolbar-title>
    </v-toolbar>
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <sidenav-options/>
    </v-navigation-drawer>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      items: [{
        icon: 'bubble_chart',
        title: 'Profile Options'
      }]
    }
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
    color: #fff;
  }
</style>

