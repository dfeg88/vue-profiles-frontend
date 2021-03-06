<template>
    <v-dialog v-if="profile" v-model="dialog[profile.id]" max-width="500px" transition="dialog-bottom-transition" :key="profile.id">
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
                <v-text-field :rules="rule" label="First name" required v-model="profile.customer.firstName"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md6>
                <v-text-field :rules="rule" label="Last Name" v-model="profile.customer.lastName"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <strong>Address:</strong>
              </v-flex>
              <v-flex xs12 sm3 md3>
                <v-text-field :rules="rule" label="House No." v-model="profile.address.houseNumber"></v-text-field>
              </v-flex>
              <v-flex xs12 sm9 md9>
                <v-text-field :rules="rule" label="Street" v-model="profile.address.street"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md6>
                <v-text-field :rules="rule" label="Town" v-model="profile.address.town"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md6>
                <v-text-field :rules="rule" label="City" v-model="profile.address.city"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md6>
                <v-text-field :rules="rule" label="Postcode" v-model="profile.address.postcode"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <strong>Car Details:</strong>
              </v-flex>
              <v-flex xs12 sm6 md6>
                <v-text-field :rules="rule" label="Car Reg" v-model="profile.car.registrationNumber"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md6>
                <v-text-field :rules="rule" label="Car Make" v-model="profile.car.make"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md6>
                <v-text-field :rules="rule" label="Car Model" v-model="profile.car.model"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md6>
                <v-text-field type="number" :rules="rule" label="Engine Size" v-model="profile.car.engineSize"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" 
            flat 
            @click.stop="$set(dialog, profile.id, false)"
            @click="cancel">
              Close
          </v-btn>
          <v-btn color="green darken-1" 
            flat 
            @click.stop="$set(dialog, profile.id, false)" 
            @click="update(profile)">
              Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import ProfileService from "@/services/ProfileService";

export default {
  props: [
    'profileId',
  ],
  data() {
    return {
      profile: null,
      originalProfile: null,
      loading: true,
      dialog: {},
      rule: [v => !!v || "Field required"]
    }
  },
  async mounted() {
    try {
      this.profile = (await ProfileService.get(this.profileId)).data
      this.originalProfile = _.cloneDeep(this.profile)
    } catch (err) {
      console.log(err)
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

        this.$root.$emit('updateName', profile)
      } catch (err) {
        this.$root.$emit('initSnackBar', {
          text: 'Something went wrong',
          color: 'alert'
        })
        
        console.log(err)
      }
    },
    cancel() {
      this.profile = _.cloneDeep(this.originalProfile)
    }
  }
}
</script>

<style>

</style>
