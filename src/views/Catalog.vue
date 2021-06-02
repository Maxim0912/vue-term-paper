<template>
<div class="wrapper">
  <div class="categories col-3">
    <div v-for="i in categoriesName" :key="i.cat">
      <router-link :to="{name: 'Category', params: {category: i.cat}}">
        {{ i.cat }}
      </router-link>
    </div>
  </div>
    <div class="goods col-9">
      <router-view/>
    </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    name: "Catalog",
    computed: {
    ...mapGetters(['availableGoods', 'categoriesName']), 
    }
}
</script>


<style scoped>
/* div {
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
} */
.wrapper {
    display: flex;
    justify-content:space-around;
    flex-direction: row;
    flex-wrap: wrap;
    
    /* align-items: right; */
}

.categories {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: rgba(248, 240, 240, 0.644);
  justify-content: space-evenly;
  align-items: center;
}

.goods {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content:space-around;
  
}
.col-3 {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
}

.col-9 {
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%;
}
</style>