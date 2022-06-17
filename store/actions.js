export default {
  async fetchProducts({ commit }) {
    const result = await this.$axios.get('products')
    commit('SET_PRODUCTS', result.data.products)
  }
}