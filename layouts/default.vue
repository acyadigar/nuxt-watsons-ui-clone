<template>
  <div>
    <Menu :activeBurgerMenu='activeBurgerMenu' @close='toggle' />
    <TopBar />
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
      if (this.activeBurgerMenu) return document.body.style.overflowY = 'hidden'
      document.body.style.overflowY = 'auto'
    }
  }
}
</script>
