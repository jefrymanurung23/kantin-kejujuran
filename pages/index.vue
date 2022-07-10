<template>
  <div>
    <Nav />
    <LandingCarousel :sale_items="sale_items" />
    <br /><br />
    <v-container>
      <h1 class="text-md-h4 text-h6">Produk</h1>
      <br />
      <ProductCarousel :products="products" />
    </v-container>
    <Footer />
    <ScrollTop />
  </div>
</template>
<script>
import ProductCarousel from "~/components/ProductCarousel.vue";
import ScrollTop from "~/components/ScrollTop.vue";
export default {
  async created() {
    this.sale_items = await this.$content("product")
      .where({ onSale: true })
      .fetch();
    this.products = await this.$content("product").fetch();
  },
  data() {
    return {
      products: null,
      sale_items: null,
    };
  },
  components: { ProductCarousel, ScrollTop },
};
</script>
<style lang=""></style>
