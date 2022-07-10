<template>
  <v-container>
    <v-row dense>
      <v-col md="3">
        <div>
          <v-text-field
            v-model="search"
            prepend-inner-icon="mdi-magnify"
            outlined
            clearable
            placeholder="Search"
          />
          <v-list
            v-if="$vuetify.breakpoint.mdAndUp"
            subheader
            color="transparent"
          >
            <v-subheader>Category</v-subheader>
            <v-list-item v-for="(c, i) in categories" :key="`c-${i}`" link>
              <v-list-item-avatar>
                <v-img :src="c.image" />
              </v-list-item-avatar>
              <v-list-item-content>
                {{ c.name }}
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
      </v-col>

      <v-col md="9">
        <v-row>
          <v-col
            v-for="(p, i) in filterProducts"
            :key="`p-${i}`"
            cols="12"
            md="6"
          >
            <v-card
              nuxt
              :to="`/products/${p.id}`"
              color="surface"
              class="el ma-2 mb-5 mr-5"
            >
              <v-img :src="p.image" height="300">
                <template #placeholder>
                  <v-row class="fill-height" justify="content" align="center">
                    <v-progress-circular
                      width="2"
                      size="2"
                      color="primary"
                      indeterminate
                    />
                  </v-row>
                </template>
              </v-img>

              <v-card-title class="text-md-body-1 font-weight-bold">
                {{ p.name }}</v-card-title
              >
              <v-card-subtitle class="primary--text pb-3">
                {{ $formatMoney(p.price) }}
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  async created() {
    this.categories = await this.$content("category").fetch();
    this.products = await this.$content("product").fetch();
  },
  data() {
    return {
      search: null,
      categories: null,
      products: null,
    };
  },
  computed: {
    filterProducts() {
      if (!this.search || !this.products) return this.products || [];
      return this.products.filter((p) => {
        const s = this.search.toLowerCase();
        const n = p.name.toLowerCase();
        const price = p.price.toString();
        const sale_price = p.salePrice?.toString() || "";
        const r = p.ratings.toString();

        return (
          n.includes(s) ||
          price.includes(s) ||
          sale_price.includes(s) ||
          r.includes(s)
        );
      });
    },
  },
};
</script>
<style></style>
