<template>
  <div class="gallery-grid">
    <div
      v-for="(image, index) in images"
      :key="index"
      class="gallery-grid-item"
    >
      <ImageInfoModal
        v-if="showInfo === index"
        :image="image"
        :info="filterImgInfoByKey(image)"
        @close-info="closeInfoModal"
      />
      <FullImageModal :imgNum="imgId" />
      <img :src="require(`@/assets/images/${image}.jpg`)" />
      <router-link to="/shop">
        <i class="fa-solid fa-shirt shop"></i>
      </router-link>
      <i class="fa-solid fa-eye eye" @click="showFullImage(image)"></i>
      <i
        class="fa-solid fa-circle-info info"
        @click="toggleInfoModal(index)"
      ></i>
    </div>
  </div>
</template>

<script>
import ImageInfoModal from './ImageInfoModal.vue'
import FullImageModal from './FullImageModal.vue'
import { IMG_INFO } from '@/utils/image_info.js'

export default {
  name: 'GalleryGrid',
  components: {
    ImageInfoModal,
    FullImageModal,
  },
  data() {
    return {
      showInfo: null,
      images: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
      imgId: '1',
    }
  },
  computed: {},
  methods: {
    filterImgInfoByKey(key) {
      let filteredImgInfo = null
      for (const imgKey in IMG_INFO) {
        if (imgKey === key) {
          filteredImgInfo = IMG_INFO[imgKey]
          break
        }
      }
      return filteredImgInfo
    },
    toggleInfoModal(index) {
      this.showInfo = this.showInfo === index ? null : index
    },
    closeInfoModal() {
      this.showInfo = null
    },
    showFullImage(image) {
      this.imgId = image
      this.$bvModal.show('full-image')
    },
  },
}
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

.shop {
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
