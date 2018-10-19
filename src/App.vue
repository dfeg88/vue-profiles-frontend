<template>
  <v-app>
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <template>
          <v-layout>
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
          </v-layout>
        </template>
      </v-list>
      <v-divider></v-divider>
      <sidenav-options/>
    </v-navigation-drawer>
    <v-toolbar 
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="blue darken-1"
      dark
      app
      fixed>
      <v-toolbar-title mr-4>
        <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
        <router-link :to="{name: 'home'}">Profile Manager</router-link>
      </v-toolbar-title>
    </v-toolbar>
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
      drawer: true,
      items: [{
        icon: 'sentiment_very_dissatisfied',
        title: 'Menu'
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

