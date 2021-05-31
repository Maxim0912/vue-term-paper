<template>
  <nav :style="{backgroundColor: background}">
      <router-link v-for="tab in tabs" :key="tab.path"
        :to="tab.path"
        :style="{fontSize: size}">
          {{tab.name}} 
      </router-link>
  </nav>
</template>

<script>
export default {
  name: 'ShopHeader',
  props: {
      background: String,
      tabs: Array,
      size: String
  }
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
}

nav a {
  flex: 1;
  text-decoration: none;
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-align: center;
}
.router-link-active {
    background-color: orangered;
}
</style>