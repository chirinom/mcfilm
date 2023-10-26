<template>
  <div class="info-wrapper">
    <div class="content">
      {{ info }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageInfoModal',
  props: {
    info: {
      type: String,
      default: '',
    },
  },
  methods: {
    hideInfo() {
      this.$emit('show-info')
    },
  },
}
</script>

<style lang="scss" scoped>
.info-wrapper {
  position: absolute;
  width: 100%;
  padding: 111px 33px;
}
.content {
  background-color: white;
  opacity: 0.9;
  height: fit-content;
  border-radius: 4px;
  padding: 22px;
}
.delete-span {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
}
</style>
