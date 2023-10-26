<template>
  <div class="shop">
    <h1>This is an shop page</h1>
    <ProductsCarousel />
  </div>
</template>

<script>
import ProductsCarousel from '@/components/atoms/ProductsCarousel.vue'

export default {
  name: 'ShopView',
  components: {
    ProductsCarousel,
  },
}
</script>
