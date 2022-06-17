<template>
  <div class="carousel-wrapper">
    <client-only>
      <carousel v-bind="options">
        <slide v-for="i in 5" :key="i" class="img-wrapper">
          <div class="carousel-content">
            <div class="info">
              <p>Naturals By Watsons</p>
              <h1>The new 2021 collection</h1>
              <p>Known as "the miracle plant", Aloe Vera helps to nourish, moisturize and keep the hair looking smooth. Let your hair be flexible and fresh.</p>
              <button>SHOP NOW</button>
            </div>
            <div class="image-container">
              <img src="@/assets/images/slider-image.png" alt="product">
            </div>
          </div>
        </slide>
      </carousel>
    </client-only>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    Carousel, Slide
  },
  data() {
    return {
      options: {
        loop: true,
        perPage: 1,
        navigationEnabled: true,
        navigationNextLabel: '>',
        navigationPrevLabel: '<',
        paginationEnabled: true,
        paginationColor: 'rgba(132, 147, 168, 0.4)',
        paginationActiveColor: '#505357',
        paginationPadding: 8,
      }
    }
  },
  computed: {
    width() {
      return window.innerWidth > 1300 ? 'slider-image' : 'slider-image-2'
    }
  }
}
</script>
