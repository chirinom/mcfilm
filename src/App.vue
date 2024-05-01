<template>
  <div id="app">
    <PrimaryNavbar />
    <router-view />
  </div>
</template>

<script>
import PrimaryNavbar from './components/molecules/PrimaryNavbar.vue'

export default {
  name: 'App',
  components: {
    PrimaryNavbar,
  },
}
</script>

<style lang="scss">
#app {
  font-family: Roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  padding: 22px;
  display: flex;

  a {
    font-size: 16px;
    font-weight: 500;
    color: $light-grey;
    padding: 33px;

    &.router-link-exact-active {
      color: $grey;
    }
    &:hover {
      text-decoration: none;
      color: $grey;
    }
  }
}
</style>
