<template>
    <v-layout row wrap>
        <v-flex
            xs2
            v-for="(profile, i) in profiles"
            :key="i"
            >
            <v-card :class="{'ma-2': $vuetify.breakpoint.smAndDown, 'ma-2': $vuetify.breakpoint.mdAndUp}">
                <v-img
                    src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
                    gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
                    height="200px">
                    <v-container
                    fill-height
                    fluid
                    pa-2
                    >
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
                      <v-icon>delete</v-icon>
                  </v-btn>
                  <v-dialog v-model="dialog[profile.id]" max-width="500px" transition="dialog-bottom-transition" :key="profile.id">
                    <v-btn icon slot="activator">
                      <v-icon>edit</v-icon>
                    </v-btn>
                    <v-card>
                      <v-card-title>
                        <span class="headline">Edit Profile</span>
                      </v-card-title>
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
                              <v-text-field label="Car Make" v-model="profile.car.make"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md6>
                              <v-text-field label="Car Model" v-model="profile.car.model"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md6>
                              <v-text-field label="Car Reg" v-model="profile.car.registrationNumber"></v-text-field>
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
      dialog: {},
      profiles: null
    };
  },
  async mounted() {
    this.profiles = (await ProfileService.getAll()).data;
  },
  methods: {
    async deleteProfile(profile) {
      try {
        const confirmMessage = confirm(
          `Are you sure you want to delete this profile?`
        );
        if (confirmMessage) {
          await ProfileService.delete(profile.id);
          const i = this.profiles.indexOf(profile);
          this.profiles.splice(i, 1);
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
