<template>
  <b-modal id="order-modal" centered hide-footer hide-header size="xl">
    <div class="order-layout">
      <OrderTypeForm />
    </div>
  </b-modal>
</template>
<script>
import OrderTypeForm from '@/components/molecules/OrderTypeForm.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'OrderModal',
  components: {
    OrderTypeForm
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