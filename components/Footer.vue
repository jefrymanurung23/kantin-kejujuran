<template>
  <v-card tile flat class="pa-md-10 pa-5 text-center" color="surface">
    <h2 class="text-md-h6 font-weight-bold">KantinKejujuran</h2>

    <div class="text-center">
      <v-btn
        v-for="(sm, i) in sosial_media"
        :key="`sm-${i}`"
        color="surface"
        class="mr-2"
        fab
        depressed
        nuxt
        :to="sm.link"
      >
        <v-icon>{{ sm.icon }}</v-icon>
      </v-btn>
    </div>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      sosial_media: [
        {
          icon: "mdi-facebook",
          link: "#",
        },
        {
          icon: "mdi-twitter",
          link: "#",
        },
        {
          icon: "mdi-instagram",
          link: "#",
        },
        {
          icon: "mdi-youtube",
          link: "#",
        },
      ],
    };
  },
};
</script>
<style></style>
