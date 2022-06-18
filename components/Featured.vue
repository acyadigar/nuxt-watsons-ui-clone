<template>
  <div class="featured">
    <div class="title">
      <div class="divider"></div>
      <strong>Featured products</strong>
      <div class="divider"></div>
    </div>
    <div class="product-list">
      <ProductCard v-for="product in products" :product="product" :key="product.id"/>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    randomizer() {
      const random = Math.floor(Math.random() * 26)
      return [random, random + 4]
    },
    products() {
      return this.$store.getters.products.slice(...this.randomizer)
    }
  },
  created() {
    this.$store.dispatch('fetchProducts')
  }
}
</script>
