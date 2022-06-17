<template>
  <div>
    <TopBar />
    <Menu :activeBurgerMenu='activeBurgerMenu' @close='toggle' />
    <Header @toggle='toggle'/>
      <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeBurgerMenu: false
    }
  },
  methods: {
    toggle() {
      this.activeBurgerMenu = !this.activeBurgerMenu
    }
  }
}
</script>
