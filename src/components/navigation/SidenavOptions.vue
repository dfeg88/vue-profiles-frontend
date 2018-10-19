<template>
  <v-navigation-drawer
    stateless
    value="true"
  >
    <v-list>
      <v-list-tile :to="home.url">
        <v-list-tile-action>
          <v-icon>{{home.icon}}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{home.title}}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-group
        prepend-icon="account_circle"
        value="true"
      >
        <v-list-tile slot="activator">
          <v-list-tile-title>Profiles</v-list-tile-title>
        </v-list-tile>
          <v-list-tile
            v-for="item in items"
            :key="item.title"
            :to="item.url"
          >
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
          </v-list-tile>
      </v-list-group>

      <v-list-group
        prepend-icon="network_check"
        value="true">
        <v-list-tile slot="activator">
          <v-list-tile-title>Health Check</v-list-tile-title>
        </v-list-tile>
        <v-list class="pt-0">
          <v-list-tile :to="{name: 'health-check'}">
            <v-list-tile-action>
              <v-icon>check</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Call Health Endpoint</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-list-group>

      <v-list-group
        prepend-icon="access_time"
        value="true">
        <v-list-tile slot="activator">
          <v-list-tile-title>Times</v-list-tile-title>
        </v-list-tile>
        <v-list class="pt-0">
          <v-list-tile :to="{name: 'times'}">
            <v-list-tile-action>
              <v-icon>watch</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Check Times</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-list-group>
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
          title: "Create Profile",
          url: "create"
        },
        {
          icon: "view_module",
          title: "View Profiles",
          url: "profiles"
        }
      ],
      home: {
        icon: 'home',
        title: 'Home',
        url: '/'
      }
    };
  }
};
</script>

<style scoped>
  
</style>