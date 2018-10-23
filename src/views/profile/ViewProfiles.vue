<template>
  <v-layout row wrap>
    <v-container justify-center>
      <v-flex xs12 md8 align-center v-if="!profiles.length">
        <strong>It seems as though no profiles exist...</strong><br><br>
        <v-btn
          color="success"
          :to="{name: 'create'}">
        Create Profile
        </v-btn>
      </v-flex>
      <v-flex
        xs12 sm6 md4 lg3
        pa-2
        v-for="(profile, i) in profiles"
        :key="i">
        <v-card :class="{'ma-3': $vuetify.breakpoint.smAndDown, 'ma-3': $vuetify.breakpoint.mdAndUp}" class="elevation-8">
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
            <edit-profile :profile=profile></edit-profile>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-container>
  </v-layout>
</template>

<script>
import ProfileService from "@/services/ProfileService";
export default {
  data() {
    return {
      loading: true,
      profiles: [],
      tempImageUrl: "https://iphonewalls.net/wp-content/uploads/2015/01/Cute%20Santa%20Claus%20Minimal%20Illustration%20iPhone%206%20Plus%20HD%20Wallpaper-320x480.jpg"
    };
  },
  async mounted() {
    this.profiles = (await ProfileService.getAll()).data;
    this.loading = false;
  }
};
</script>

<style>
</style>
