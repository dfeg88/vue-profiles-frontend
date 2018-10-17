<template>
    <v-layout row wrap>
    <v-flex
        v-for="profile in profiles"
        :key="profile.firstName"
    >
        <v-card :class="{'ma-2': $vuetify.breakpoint.smAndDown, 'ma-2': $vuetify.breakpoint.mdAndUp}" width="300px">
        <v-img
            src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
            gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
            height="200px"
        >
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
            <v-btn icon>
            <v-icon>delete</v-icon>
            </v-btn>
            <v-btn icon>
            <v-icon>edit</v-icon>
            </v-btn>
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
      profiles: null,
    };
  },
  async mounted() {
    this.profiles = (await ProfileService.getAll()).data;
    console.log(this.profiles)
  }
};
</script>

<style>
</style>
