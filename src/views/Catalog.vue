<template>
    <shop-header :background="background" :tabs="tabs"></shop-header>
    <!-- <sub-catalog :tabs="subTabs"></sub-catalog> -->
    <div v-for="good in availableGoods" :key="good.id">
    <!-- <h2>{{ good.name }}</h2> -->
    <router-link :to="{name: 'Good', params: {id: good.id}}">{{ good.name }}</router-link>
  </div>
  <div>{{ $route.params.id }}</div>
</template>

<script>
import ShopHeader from '../components/ShopHeader.vue';
import {mapGetters} from 'vuex';
export default {
    name: "Catalog",
    components: {ShopHeader},
    computed: {
    ...mapGetters(['availableGoods', 'categoriesName']), 
  }
}
</script>


<style scoped>
div {
    display: flex;
    justify-content:space-around;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: right;
}

div a {
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