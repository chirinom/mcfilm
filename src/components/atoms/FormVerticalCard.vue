<template>
  <div class="card m-4" :class="{ disabled: disabled }" @click="click">
    <div class="card__image">
      <!-- <img
                class="card__image"
                :src="require(`@/assets/images/${imgSrc}.jpg`)"
                alt="Picture in card"
            /> -->
    </div>
    <div class="card__title">{{ title }}</div>
    <div class="card__subtitle">{{ subtitle }}</div>
    <button class="card__button"><i class="fa-solid fa-chevron-right"></i></button>
  </div>
</template>

<script>
// import CheckboxIconButton from '@/components/atoms/buttons/CheckboxIconButton'

export default {
  name: 'FormVerticalCard',
  //   components: { CheckboxIconButton },
  props: {
    value: {
      type: String,
      default: 'corporate',
    },
    // imgSrc: {
    //   type: String,
    //   default: 'addemail',
    // },
    title: {
      type: String,
      default: 'Title H800 (16 Bold)',
    },
    subtitle: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
    },
  },

  methods: {
    click() {
      if (!this.disabled) {
        this.$emit('click', this.value)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  cursor: pointer;
  width: 226px;
  min-height: 266px;
  border-radius: 12px;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 30px;
  display: flex;

  &__subtitle {
    margin: 0 5px 0 5px;
    text-align: center;
  }
  &__image {
    margin-top: 10px;
    width: 78.81px;
    height: 78.81px;
  }
  &__subtitle {
    color: $grey;
  }
  &__button {
    border-radius: 50%;
    border: none;
    height: 44px;
    width: 44px;
  }
}
.card.disabled {
  cursor: default;
  &__image {
    filter: grayscale(100%);
  }
}
</style>
