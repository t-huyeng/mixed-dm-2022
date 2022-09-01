<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container class="mb-5">
        <nuxt />
        <v-btn
          v-if="this.$route.path !== '/'"
          to="/"
          fab
          dark
          small
          color="secondary"
          fixed
          right
          bottom
        >
          <v-icon dark>mdi-home</v-icon>
        </v-btn>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-timetable",
          title: "Spielplan",
          to: "/Spielplan",
        },
        {
          icon: "mdi-heart-multiple",
          title: "Spirit",
          to: "/spirit",
        },
        {
          icon: "mdi-map",
          title: "Lageplan",
          to: "/lageplan",
        },
        {
          icon: "mdi-food",
          title: "Restaurantliste",
          to: "/restaurantliste",
        },
      ],
      title: "Mixed DM 2022 - Freiburg",
    };
  },
};
</script>
