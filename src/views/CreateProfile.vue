<template>
    <v-layout justify-center>
        <v-flex lg6>
            <div>
                <v-form v-model="valid">
                    <v-text-field
                        v-model="profile.customer.firstName"
                        :rules="rules.firstNameRules"
                        label="First Name"
                        required>
                    </v-text-field>
                    <v-text-field
                        v-model="profile.customer.lastName"
                        :rules="rules.lastNameRules"
                        label="Last Name"
                        required>
                    </v-text-field>
                    <v-text-field
                        v-model="profile.address.houseNumber"
                        label="House Number">
                    </v-text-field>
                    <v-text-field
                        v-model="profile.address.street"
                        label="Street">
                    </v-text-field>
                    <v-text-field
                        v-model="profile.address.town"
                        label="Town">
                    </v-text-field>
                    <v-text-field
                        v-model="profile.address.city"
                        label="City">
                    </v-text-field>
                    <v-text-field
                        v-model="profile.address.postcode"
                        label="Postcode">
                    </v-text-field>
                    <v-text-field
                        v-model="profile.car.registrationNumber"
                        label="Car Reg">
                    </v-text-field>
                    <v-text-field
                        v-model="profile.car.make"
                        label="Car Make">
                    </v-text-field>
                    <v-text-field
                        v-model="profile.car.model"
                        label="Car Model">
                    </v-text-field>
                    <v-text-field
                        type="number"
                        v-model="profile.car.engineSize"
                        label="Engine Size">
                    </v-text-field>
                </v-form>
            </div>
            <v-btn
                :disabled="!isComplete"
                dark
                @click="create">
                Create Profile
            </v-btn>
        </v-flex>
    </v-layout>    
</template>

<script>
import ProfileService from '@/services/ProfileService'
export default {
  data: () => ({
    valid: false,
    profile: {
      customer: {
        firstName: null,
        lastName: null
      },
      address: {
        houseNumber: null,
        street: null,
        town: null,
        city: null,
        postcode: null
      },
      car: {
        registrationNumber: null,
        make: null,
        model: null,
        engineSize: null
      }
    },
    rules: {
      firstNameRules: [v => !!v || "First name is required"],
      lastNameRules: [v => !!v || "Last name is required"]
    }
  }),
  computed: {
      isComplete() {
          return this.profile.customer.firstName && this.profile.customer.lastName
      }
  },
  methods: {
      async create() {
          try {
              await ProfileService.post(this.profile)
              this.$router.push({
                  name: 'profiles'
              })
          } catch (err) {
              console.log(err)
          }
      }
  }
};
</script>

<style>
</style>
