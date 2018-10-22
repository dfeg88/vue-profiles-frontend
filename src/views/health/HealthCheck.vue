<template>
    <v-layout ma-5 row fill-height>
      <v-flex xs12 md6 lg6 v-if="!healthStatus && !loading">
        <v-toolbar dark color="grey darken-2">
          <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>
        <v-responsive class="white elevation-6 px-3 pt-3 pb-3">
          <strong class="pa-3">Health Check Status:</strong><strong class="red--text">Server currently unavailable</strong>
        </v-responsive>
      </v-flex>
      <v-flex xs12 md6 lg6 v-if="healthStatus">
        <v-toolbar dark color="grey darken-2">
          <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>
        <v-responsive class="white elevation-6 px-3 pt-3 pb-3">
          <strong class="pa-3">Health Check Status:</strong><strong class="green--text">{{healthStatus.status}}</strong>
        </v-responsive>
      </v-flex>
    </v-layout>
</template>

<script>
import HealthCheckService from '@/services/HealthCheckService'
export default {
  data() {
    return {
      title: "Health Check",
      healthStatus: null,
      loading: true
    }
  },
  async mounted() {
    try {
      this.healthStatus = (await HealthCheckService.get()).data;
      this.loading = false
    } catch (err) {
      this.loading = false
      console.log(err)
    }
  }
}
</script>

<style>

</style>
