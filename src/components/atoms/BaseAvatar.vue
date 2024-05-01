<template>
  <div>
    <div v-if="avatarType == 'initials'" :class="`initials avatar ${avatarSize} ${avatarColor}`">
      <p v-if="initials">{{ initials.toUpperCase().substring(0, 3) }}</p>
    </div>
    <div v-if="avatarType == 'icon'" :class="`avatar ${avatarSize} ${avatarColor}`">
      <i v-if="iconName" :class="`fa fa-${iconName}`"></i>
    </div>
    <div v-if="avatarType == 'image'" :class="`avatar ${avatarSize}`">
      <img v-if="imageSrc" :src="imageSrc" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseAvatar',
  props: {
    imageSrc: {
      type: String,
      required: false,
    },
    iconName: {
      type: String,
      default: 'users',
    },
    initials: {
      type: String,
      default: 'ab',
    },
    avatarSize: {
      type: String,
      default: 'medium',
      validator(value) {
        return (
          ['micro', 'extra-small', 'small', 'medium', 'large', 'extra-large', 'huge'].indexOf(value) !== -1
        )
      },
    },
    avatarType: {
      type: String,
      default: 'icon',
      validator(value) {
        return ['image', 'icon', 'initials'].indexOf(value) !== -1
      },
    },
    avatarColor: {
      type: String,
      default: 'blue',
      validator(value) {
        return ['pink', 'yellow', 'grey', 'red', 'green', 'blue'].indexOf(value) !== -1
      },
    },
  },
}
</script>

<style lang="scss" scoped>
@mixin container-size($avatarSize) {
  width: $avatarSize;
  height: $avatarSize;
}
.avatar {
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &.micro {
    @include container-size(24px);
    i,
    p {
      font-size: 12px;
    }
  }
  &.extra-small {
    @include container-size(32px);
    i,
    p {
      font-size: 18px;
    }
  }
  &.small {
    @include container-size(48px);
    i,
    p {
      font-size: 18px;
    }
  }
  &.medium {
    @include container-size(56px);
    i,
    p {
      font-size: 22px;
    }
  }
  &.large {
    @include container-size(64px);
    i,
    p {
      font-size: 22px;
    }
  }
  &.extra-large {
    @include container-size(86px);
    i,
    p {
      font-size: 38px;
    }
  }
  &.huge {
    @include container-size(144px);
    i,
    p {
      font-size: 38px;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 50%;
  }
  p {
    margin: auto;
  }
}
.header {
  display: flex;
  align-items: center;
  .header-info {
    // @include make-flex(space-between, flex-start, column);
    margin-left: 8px;
    .name {
      // font: $main-font-bold;
      // color: $black-color;
      font-size: 14px;
      margin-bottom: 4px;
    }
    .stage {
      // font: $main-font-bold;
      color: #3c3c4380;
      font-size: 14px;
    }
  }
  &.vertical {
    flex-direction: column;
    .header-info {
      align-items: center !important;
      margin-left: 0;
      margin-top: 4px;
    }
  }
}
.initials {
  border: 1px solid $grey;
}
.green {
  color: green;
  // background-color: $green-500;
}
.yellow {
  color: yellow;
  // background-color: $yellow-500;
}
.pink {
  color: pink;
  // background-color: $pink-500;
}
.blue {
  color: blue;
  // background-color: $blue-500;
}
.red {
  color: red;
  // background-color: $red-500;
}
.grey {
  color: $grey;
  // background-color: $grey;
}
</style>
