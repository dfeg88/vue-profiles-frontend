<template>
    <v-dialog v-model="dialog[profile.id]" max-width="500px" transition="slide-y-transition" :key="profile.id">
      <v-btn icon slot="activator">
        <v-icon color="red darken-4">delete</v-icon>
      </v-btn>
      <v-card>
        <v-card-title class="primary white--text">
          <span class="headline">Delete Profile</span>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout>
              <p>Are you sure you want to delete <strong>{{profile.customer.firstName}} {{profile.customer.lastName}}?</strong></p>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.stop="$set(dialog, profile.id, false)">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.stop="$set(dialog, profile.id, false)" @click="deleteProfile(profile)">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import ProfileService from "@/services/ProfileService";

export default {
  props: [
    'profiles',
    'profile'
  ],
  data() {
    return {
      loading: true,
      dialog: {},
    }
  },
  methods: {
    async deleteProfile(profile) {
      try {
          await ProfileService.delete(profile.id);
          const index = this.profiles.indexOf(profile);
          this.profiles.splice(index, 1);

          this.$root.$emit('initSnackBar', {
          text: 'Profile Deleted',
          color: 'red'
        })
      } catch (err) {
        console.log(err);
        this.$root.$emit('initSnackBar', {
          text: 'Something went wrong',
          color: 'red'
        })
      }
    }
  }
}
</script>

<style>

</style>
