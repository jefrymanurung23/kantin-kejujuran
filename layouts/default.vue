<template>
  <v-app
    dark
    :style="{ backgroundColor: $vuetify.theme.dark ? '#0a0514' : '#fff' }"
  >
    <v-main>
      <Nav />
      <Nuxt />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Nav from "../components/Nav.vue";
import Footer from "~/components/Footer.vue";
</script>
