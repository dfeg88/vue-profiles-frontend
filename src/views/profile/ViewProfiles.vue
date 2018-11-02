<template>
  <v-layout row wrap class="ma-3">
    <v-flex xs12 md8 align-center v-if="!profiles.length && !loading">
      <strong>It seems as though no profiles exist...</strong><br><br>
      <v-btn
        color="success"
        :to="{name: 'create'}">
      Create Profile
      </v-btn>
    </v-flex>
    <v-flex
      xs12 sm6 md4 lg3
      v-for="(profile, i) in profiles"
      :key="i">
      <v-card :class="{'ma-3': $vuetify.breakpoint.smAndDown, 'ma-3': $vuetify.breakpoint.mdAndUp}" class="elevation-8 mb-2">
        <v-img
          :src="tempImageUrl"
          gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
          height="200px">
          <v-container
            fill-height
            fluid
            pa-2>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline white--text" v-text="profile.customer.firstName + ' ' + profile.customer.lastName"></span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-actions>
          <v-spacer></v-spacer>
          <delete-profile :profile=profile :profiles=profiles></delete-profile>
          <edit-profile :profileId=profile.id :profile=profile></edit-profile>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import ProfileService from "@/services/ProfileService";
export default {
  data() {
    return {
      loading: true,
      profiles: [],
      tempImageUrl: "https://d18uhd91svii7m.cloudfront.net/wp-content/uploads/2018/10/25124000/halloween2.jpg"
    };
  },
  async mounted() {
    try {
      this.profiles = (await ProfileService.getAll()).data;
      this.loading = false;
    } catch (err) {
      console.info(err);
      this.loading = false;
    }
  }
};
</script>

<style>
</style>
