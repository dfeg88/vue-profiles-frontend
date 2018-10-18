<template>
  <v-layout justify-center>
    <v-flex v-if="healthStatus">
      <pre>{{healthStatus}}</pre>
    </v-flex>
  </v-layout>
</template>

<script>
import HealthCheckService from '@/services/HealthCheckService'
export default {
  data() {
    return {
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
