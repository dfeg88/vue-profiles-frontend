<template>
  <v-app>
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      fixed
      app
    >
      <v-divider></v-divider>
      <sidenav-options/>
    </v-navigation-drawer>
    <v-toolbar 
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="black darken-1"
      dark
      app
      fixed>
      <v-toolbar-title mr-4>
        <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
        <router-link :to="{name: 'home'}">Profile Manager</router-link>
      </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
      <v-btn
        color="green"
        dark
        absolute
        bottom
        right
        fab
        class="mb-5"
        :to="{name: 'create'}">
        <v-icon>add</v-icon>
      </v-btn>
    </v-content>
    
    <v-footer app>
      <span>&copy; {{year}}</span>
    </v-footer>
    <v-snackbar
      v-model="snackbar"
      :color="color"
      :timeout="timeout"
      :vertical="mode === 'vertical'"
      :bottom="y"
      :left="x">
      {{snackbarText}}
      <v-btn
        dark
        flat
        @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      snackbar: false,
      snackbarText: '',
      color: null,
      mode: '',
      timeout: 3000,
      y: 'bottom',
      x: 'left',
      year: new Date().getFullYear(),
      drawer: true
    }
  },
  mounted() {
    this.$root.$on('initSnackBar', (data) => {
      this.snackbarText = data.text;
      this.color = data.color
      this.snackbar = true;
    });
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
    color: #fff;
  }

  footer {
    display: block;
    padding: 1em;
  }

  span {
    display: block;
    text-align: center;
  }
</style>
