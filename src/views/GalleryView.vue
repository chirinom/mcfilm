<template>
  <div class="gallery">
    <ImageGrid />
  </div>
</template>

<script>
import ImageGrid from "@/components/atoms/ImageGrid.vue";

export default {
  name: "GalleryView",
  components: { ImageGrid },
};
</script>

<style lang="scss" scoped>
.gallery {
  padding: 22px;
}
</style>
