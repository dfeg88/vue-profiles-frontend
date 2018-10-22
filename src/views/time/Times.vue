<template>
  <v-layout ma-5 row fill-height>
      <v-flex xs12 md6 lg6 v-if="!times && !loading">
        <v-toolbar dark color="grey darken-2">
          <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>
        <v-responsive class="white elevation-6 px-3 pt-3 pb-3">
          <strong class="red--text">Server currently unavailable</strong>
        </v-responsive>
      </v-flex>
      
      <v-flex xs12 md6 lg6 v-if="times">
        <v-toolbar dark color="grey darken-2">
          <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>
        <v-responsive class="white elevation-6 px-3 pt-3 pb-3">
          <strong class="pa-2">Local Time: {{times.localTime}}</strong>
          <br>
          <strong class="pa-2">Time in Canada: {{times.canadaTime}}</strong>
        </v-responsive>
      </v-flex>
  </v-layout>
</template>

<script>
import TimesService from '@/services/TimesService'
export default {
  data() {
    return {
      title:  'Current Times',
      times: null,
      loading: true
    }
  },
  async mounted() {
    try {
      this.times = (await TimesService.getTimes()).data;
      this.loading = false
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style>

</style>
