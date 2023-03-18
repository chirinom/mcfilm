<template>
  <div class="gallery-grid">
    <div
      v-for="(image, index) in images"
      :key="index"
      class="gallery-grid-item"
    >
      <img :src="require(`@/assets/images/${image}`)" alt="" />
      <i class="fa-solid fa-shirt shirt"></i>
      <i class="fa-solid fa-eye eye"></i>
      <i class="fa-solid fa-circle-info info"></i>
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

<style lang="scss" scoped>
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25%, 1fr));
  grid-gap: 1px;
}

.gallery-grid-item {
  overflow: hidden;
  height: 555px;
  transition: opacity 0.2s ease;
  position: relative;

  &:hover {
    opacity: 0.6;

    i {
      display: block;
    }
  }
}
i {
  display: none;
  position: absolute;
  font-size: 28px;
  cursor: pointer;

  &:hover {
    color: lightgrey;
  }
}

.shirt {
  bottom: 33px;
  left: 22px;
}

.eye {
  bottom: 33px;
  left: 66px;
}

.info {
  bottom: 33px;
  left: 111px;
}

.gallery-grid-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media screen and (max-width: 850px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
