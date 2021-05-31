<template>
  <div>
      <router-link v-for="tab in tabs" :key="tab.path"
        :to="tab.path"
        class="sub">
          {{tab.name}} 
      </router-link>
  </div>
  <div v-for="good in availableGoods" :key="good.id">
    <!-- <h2>{{ good.name }}</h2> -->
    <router-link :to="{name: 'Good', params: {id: good.id}}">{{ good.name }}</router-link>
  </div>
  <!-- <router-link :to="{name: 'Good', params: {id: 25}}">Книга 25</router-link> -->
  <!-- <div v-for="i in categoriesName" :key="i.cat">
    <h2>{{ i.cat }}</h2>
    <router-link :to="{name: 'Category', params: {category: i.cat}}">{{ i.cat }}</router-link>
  </div> -->
  <div>{{ $route.params.id }}</div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    name: 'SubCatalog',
    // props: {
    //     tabs: Array,
    // },
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