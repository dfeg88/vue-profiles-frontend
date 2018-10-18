<template>
    <v-layout justify-center>
        <v-flex xs12>              
          <v-form v-model="valid" class="pa-5" id="create-form">
          <v-stepper v-model="e1">
            <v-toolbar dark class="primary">
              <v-toolbar-title>{{title}}</v-toolbar-title>
            </v-toolbar>
            <v-stepper-header>
              <v-stepper-step :complete="e1 > 1" step="1">Name</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step :complete="e1 > 2" step="2">Address</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="3">Car Details</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content step="1">
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
                <v-btn
                  class="mt-3"
                  :disabled='!isComplete'
                  color="primary"
                  @click="e1 = 2"
                >
                  Next
                </v-btn>
              </v-stepper-content>
              <v-stepper-content step="2">
                <v-text-field
                  v-model="profile.address.houseNumber"
                  label="House Number"
                  required
                  :rules="rules.rule">
                </v-text-field>
                <v-text-field
                    v-model="profile.address.street"
                    label="Street"
                    required
                    :rules="rules.rule">
                </v-text-field>
                <v-text-field
                    v-model="profile.address.town"
                    label="Town"
                    required
                    :rules="rules.rule">
                </v-text-field>
                <v-text-field
                    v-model="profile.address.city"
                    label="City"
                    required
                    :rules="rules.rule">
                </v-text-field>
                <v-text-field
                    v-model="profile.address.postcode"
                    label="Postcode"
                    required
                    :rules="rules.rule">
                </v-text-field>
                <v-btn
                  class="mt-3"
                  :disabled="!isAddressComplete"
                  color="primary"
                  @click="e1 = 3"
                >
                  Next
                </v-btn>
                <v-btn flat @click="back" class="mt-3">Back</v-btn>
              </v-stepper-content>
              <v-stepper-content step="3">
                <v-text-field
                  v-model="profile.car.registrationNumber"
                  label="Car Reg"
                  required
                  :rules="rules.rule">
                </v-text-field>
                <v-text-field
                    v-model="profile.car.make"
                    label="Car Make"
                    required
                    :rules="rules.rule">
                </v-text-field>
                <v-text-field
                    v-model="profile.car.model"
                    label="Car Model"
                    required
                    :rules="rules.rule">
                </v-text-field>
                <v-text-field
                    type="number"
                    v-model="profile.car.engineSize"
                    label="Engine Size"
                    required
                    :rules="rules.rule">
                </v-text-field>
                <v-btn
                  :disabled="!isCarDetailsComplete"
                  class="mt-3"
                  color="primary"
                  @click="create"
                >
                  Create Profile
                </v-btn>
                <v-btn flat @click="back" class="mt-3">Back</v-btn>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper> 
        </v-form>
        </v-flex>
    </v-layout>    
</template>

<script>
import ProfileService from '@/services/ProfileService'
export default {
  data: () => ({
    e1: 0,
    title: 'Create Profile',
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
      lastNameRules: [v => !!v || "Last name is required"],
      rule: [v => !!v || "Field required"]
    }
  }),
  computed: {
      isComplete() {
        return this.profile.customer.firstName && this.profile.customer.lastName
      },
      isAddressComplete() {
        return this.profile.address.houseNumber
          && this.profile.address.street
          && this.profile.address.town
          && this.profile.address.city
          && this.profile.address.postcode
      },
      isCarDetailsComplete() {
        return this.profile.car.registrationNumber
          && this.profile.car.make
          && this.profile.car.model
          && this.profile.car.engineSize
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
      },
      back () {
        this.e1--
      }
  }
};
</script>

<style>
</style>
