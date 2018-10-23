<template>
    <v-dialog v-model="dialog[profile.id]" max-width="500px" transition="dialog-bottom-transition" :key="profile.id">
      <v-btn icon slot="activator">
        <v-icon color="primary">edit</v-icon>
      </v-btn>
      <v-card>
        <v-card-title class="primary white--text">
          <span class="headline">Edit Profile</span>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <strong>Name:</strong>
              </v-flex>
              <v-flex xs12 sm6 md6>
                <v-text-field label="First name" required v-model="profile.customer.firstName"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md6>
                <v-text-field label="Last Name" v-model="profile.customer.lastName"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <strong>Address:</strong>
              </v-flex>
              <v-flex xs12 sm3 md3>
                <v-text-field label="House No." v-model="profile.address.houseNumber"></v-text-field>
              </v-flex>
              <v-flex xs12 sm9 md9>
                <v-text-field label="Street" v-model="profile.address.street"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md6>
                <v-text-field label="Town" v-model="profile.address.town"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md6>
                <v-text-field label="City" v-model="profile.address.city"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md6>
                <v-text-field label="Postcode" v-model="profile.address.postcode"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <strong>Car Details:</strong>
              </v-flex>
              <v-flex xs12 sm6 md6>
                <v-text-field label="Car Reg" v-model="profile.car.registrationNumber"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md6>
                <v-text-field label="Car Make" v-model="profile.car.make"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md6>
                <v-text-field label="Car Model" v-model="profile.car.model"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md6>
                <v-text-field label="Engine Size" v-model="profile.car.engineSize"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.stop="$set(dialog, profile.id, false)">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.stop="$set(dialog, profile.id, false)" @click="update(profile)">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import ProfileService from "@/services/ProfileService";

export default {
  props: [
    'profile'
  ],
  data() {
    return {
      loading: true,
      dialog: {},
    }
  },
  methods: {
    async update(profile) {
      try {
        await ProfileService.update(profile)

        this.$root.$emit('initSnackBar', {
          text: 'Profile Updated',
          color: 'info'
        })
      } catch (err) {
        this.$root.$emit('initSnackBar', {
          text: 'Something went wrong',
          color: 'alert'
        })
        
        console.log(err)
      }
    }
  }
}
</script>

<style>

</style>
