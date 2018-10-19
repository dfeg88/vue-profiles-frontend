<template>
  <v-layout row wrap>
    <v-container v-if="profiles.length === 0 && !loading" justify-center>
      <v-flex xs12 md8 align-center>
        <strong>It seems as though no profiles exist...</strong><br><br>
        <v-btn
          color="success"
          :to="{name: 'create'}">
        Create Profile
        </v-btn>
      </v-flex>
    </v-container>
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
          <v-btn icon @click="deleteProfile(profile)">
            <v-icon color="red darken-3">delete</v-icon>
          </v-btn>
          <edit-profile :profile=profile></edit-profile>
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
      dialog: {},
      profiles: [],
      tempImageUrl: "https://iphonewalls.net/wp-content/uploads/2015/01/Cute%20Santa%20Claus%20Minimal%20Illustration%20iPhone%206%20Plus%20HD%20Wallpaper-320x480.jpg"
    };
  },
  async mounted() {
    this.profiles = (await ProfileService.getAll()).data;
    this.loading = false;
  },
  methods: {
    async deleteProfile(profile) {
      try {
        const confirmMessage = confirm(
          `Are you sure you want to delete the profile: ${profile.customer.firstName} ${profile.customer.lastName}?`
        );
        if (confirmMessage) {
          await ProfileService.delete(profile.id);
          const index = this.profiles.indexOf(profile);
          this.profiles.splice(index, 1);
        }
      } catch (err) {
        console.log(err);
      }
    },
    async update(profile) {
      try {
        await ProfileService.update(profile)
      } catch (err) {
        console.log(err)
      }
    }
  }
};
</script>

<style>
</style>
