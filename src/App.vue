<template>
  <v-app>
    <!-- <Sidebar /> -->
    <v-main class="nopadding">
      <Home/>
    </v-main>
  </v-app>
</template>

<script>
import Home from "./components/sidebar/index.vue";

export default {
  name: "App",

  components: {
    Home,
  },

  data: () => ({
    page: {
      title: "Welcome to the jungle",
      subtitle:
        "Aqui é aleatório, tem nada para ver. O que importa já está feito!",
    },
  }),
};
</script>
