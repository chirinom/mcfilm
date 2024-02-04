<template>
  <div id="app">
    <nav>
      <router-link to="/">Gallery</router-link>
      <router-link to="/shop">Shop</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  padding: 22px;

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
