<template>
  <v-slide-group>
    <v-slide-item v-for="(p, i) in products" :key="`p-${i}`">
      <v-card link color="surface" width="300" class="el ma-2 mb-5 mr-5">
        <v-img height="300" :src="p.image">
          <template #placeholder>
            <v-row class="fill-height" justify="center" align="center">
              <v-progress-circular
                width="2"
                size="100"
                color="primary"
                indeterminate
              />
            </v-row>
          </template>
        </v-img>
        <v-card-title class="text-md-body-1 font-weight-bold">{{
          p.name
        }}</v-card-title>
        <v-card-subtitle class="primary--text pb-3">{{
          p.price
        }}</v-card-subtitle>
        <v-card-text>
          <v-chip
            v-for="(t, i) in p.tags"
            :key="`p${p.id}-t${i}`"
            x-small
            label
            outlined
            class="mr-1"
            >{{ t }}</v-chip
          >
        </v-card-text>
      </v-card>
    </v-slide-item>
  </v-slide-group>
</template>
<script>
export default {
  props: {
    products: Array,
  },
};
</script>
<style lang=""></style>
