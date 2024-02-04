<template>
  <div class="shop">
    <ProductTypeTab :tabs="tabs" @ticketType="handleTabChange" initialValue="Clothing" />
    <br>
    <div v-if="showClothing">
      <b-container class="bv-example-row">
        <b-row>
          <b-col>1 of 3</b-col>
          <b-col>2 of 3</b-col>
          <b-col>3 of 3</b-col>
        </b-row>
        <b-row>
          <b-col>1 of 3</b-col>
          <b-col>2 of 3</b-col>
          <b-col>3 of 3</b-col>
        </b-row>
      </b-container>
    </div>
    <div v-else-if="showFramedPhotos">Framed Photos</div>
  </div>
</template>

<script>
import ProductTypeTab from '@/components/atoms/ProductTypeTab.vue'

export default {
  name: 'ShopView',
  components: {
    ProductTypeTab
  },
  data() {
    return {
      showClothing: false,
      showFramedPhotos: false,
      tabs: [ { text: 'Clothing', value: 'clothing' },{ text: 'Framed Photographs', value: 'photo' }]
    }
  },
  methods:{
    handleTabChange(text, value) {
      this.showClothing = value === 'clothing'
      this.showFramedPhotos = value === 'photo'
    }
  }
}
</script>
