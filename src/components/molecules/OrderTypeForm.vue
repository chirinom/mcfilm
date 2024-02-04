<template>
    <div>
        <h4 class="header">Select product type</h4>
        <div class="product-type-form">
            <FormVerticalCard
            v-for="(option, index) in options"
            :key="index" :value="option.value"
            :title="option.value"
            :subtitle="option.title"
            @click="valueSelected"
            />
        </div>
    </div>
</template>
<script>
import FormVerticalCard from '@/components/atoms/FormVerticalCard.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'OrderModal',
  components: {
    FormVerticalCard
  },
  data() {
    return {
      options: [
        {
          value: 'Clothing',
          title: 'Get your t-shirts and Hoodies',
          disabled: false,
        },
        {
          value: 'Framed Photographs',
          title: 'Fill your favorite spaces with art',
          disabled: false
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['orderType', 'orderActiveStep']),
  },
  methods: {
    ...mapActions(['saveOrderType', 'orderNextStep']),
    valueSelected(val) {
      this.saveOrderType(val)
      this.orderNextStep()
      // this.$emit('next')
    }
  }
}
</script>

<style scoped lang="scss">
.header {
    text-align: center;
}
.product-type-form {
  display: flex;
  justify-content: center;
  padding: 33px 0;
}
</style>

<style lang="scss">
.modal-body {
  padding: 80px;
}
</style>