<template>
  <v-carousel height="100vh" hide-delimiter-background>
    <template #prev="{ attrs, on }">
      <v-btn fab color="transparent" depressed v-bind="attrs" v-on="on">
        <v-icon size="20">mdi-arrow-left</v-icon>
      </v-btn>
    </template>
    <template #next="{ attrs, on }">
      <v-btn fab color="transparent" depressed v-bind="attrs" v-on="on">
        <v-icon size="20">mdi-arrow-right</v-icon>
      </v-btn>
    </template>
    <v-carousel-item v-for="(si, i) in sale_items" :key="`si-${i}`">
      <v-img height="100vh" :src="si.image">
        <v-container class="fill-height">
          <v-row dense align="center">
            <v-col md="7">
              <div
                style="background-color: rgba(225, 225, 225, 0.8)"
                class="pa-md-10 pa-5 rounded-lg black--text text-center text-md-left"
              >
                <h2 class="text-md-h3 text-h5">{{ si.name }}</h2>
                <p class="text-md-h5 text-subtitle-1 primary--text mt-5">
                  {{ $formatMoney(si.price) }}
                </p>
                <p class="text-md-body-2 mb-7">{{ si.description }}</p>
                <v-btn
                  nuxt
                  :to="`/products/${si.id}`"
                  depressed
                  color="primary"
                  class="text-capitalize"
                  min-height="40"
                  >Yuk, Lihat!</v-btn
                >
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  props: {
    sale_items: Array,
  },
};
</script>
<style></style>
