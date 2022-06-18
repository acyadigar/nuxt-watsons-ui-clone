export default {
  async fetchProducts({ commit }) {
    const result = await this.$api.get('products')
    commit('SET_PRODUCTS', result.data.products)
  }
}