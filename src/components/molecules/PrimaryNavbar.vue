<template>
  <div id="primary-navbar">
    <h1 class="logo">Miguel Chirino</h1>
    <div class="route-menu">
      <router-link to="/">Gallery</router-link>
      <router-link to="/shop">Shop</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrimaryNavbar',
}
</script>

<style lang="scss">
#primary-navbar {
  display: flex;
  padding: 60px 22px;

  & .logo {
    font-family: 'Permanent Marker', cursive;
    font-weight: 400;
    font-style: normal;
    font-size: 33px;
  }

  & .route-menu {
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      text-decoration: none;
      color: inherit;
    }
  }
}
</style>
