<template>
  <b-modal
    id="full-image"
    class="full-image"
    :title="null"
    hide-footer
    :centered="true"
  >
    <div
      class="d-flex justify-content-center align-items-center img-wrapper"
      style="padding: 22px"
    >
      <img :src="require(`@/assets/images/${imgNum}.jpg`)" class="w-100" />
    </div>
    <template #modal-header>
      <b-button @click="closeModal" variant="link" class="close"
        ><span aria-hidden="true">&times;</span></b-button
      >
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'PictureModal',
  props: {
    imgNum: {
      type: [String, Number],
    },
  },
  methods: {
    closeModal() {
      this.$bvModal.hide('full-image')
    },
  },
}
</script>

<style lang="scss" scoped>
.full-image {
  height: 954px !important;
}
.img-wrapper {
  height: 100%;
}
</style>
