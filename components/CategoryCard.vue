<template>
  <div class="category-card" :style="` background-image:url(${category.image});`">
    <div class="category-popup">
      <p><strong>{{category.title}}</strong></p>
      <p>{{category.text}}</p>
      <button>BROWSE</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['category']
}
</script>
