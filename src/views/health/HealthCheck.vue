<template>
  <div v-if="healthStatus">
    <v-layout ma-5 row fill-height>
      <v-flex xs12 md6 lg6>
        <v-toolbar dark color="grey darken-2">
          <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>
        <v-responsive class="white elevation-6 px-3 pt-3 pb-3">
          <strong class="pa-3">Health Check Status:</strong><strong class="green--text">{{healthStatus.status}}</strong>
        </v-responsive>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import HealthCheckService from '@/services/HealthCheckService'
export default {
  data() {
    return {
      title: "Health Check",
      healthStatus: null
    }
  },
  async mounted() {
    this.healthStatus = (await HealthCheckService.get()).data;
  }
}
</script>

<style>

</style>
