<template>
  <v-navigation-drawer>

    <v-divider></v-divider>

    <v-list dense class="pt-0">
      <v-list-tile
        v-for="item in items"
        :key="item.link"
        :to="item.url"
      >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.link }}</v-list-tile-title>
          </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: "add",
          link: "Create Profile",
          url: "create"
        },
        {
          icon: "view_module",
          link: "View Profiles",
          url: "profiles"
        }
      ]
    };
  }
};
</script>

<style scoped>
  
</style>