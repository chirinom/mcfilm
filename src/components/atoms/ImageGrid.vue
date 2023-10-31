<template>
  <div class="gallery-grid">
    <div
      v-for="(image, index) in images"
      :key="index"
      class="gallery-grid-item"
    >
      <img :src="require(`@/assets/images/${image}`)" alt="" />
      <!-- TODO: REMOVE THIS -->
    </div>
  </div>
</template>

<script>
export default {
  name: "GalleryGrid",
  data() {
    return {
      images: [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg",
        "7.jpg",
        "8.jpg",
        "9.jpg",
        "10.jpg",
        "11.jpg",
      ],
    };
  },
};
</script>

<style>
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25%, 1fr));
  grid-gap: 1px;
}

.gallery-grid-item {
  overflow: hidden;
  height: 555px;
}

.gallery-grid-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
