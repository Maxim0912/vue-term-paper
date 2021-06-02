<template>
    <div v-for="i in myGoods" :key="i.id"
    class="goods-small-card col-3">
        <router-link :to="{name: 'Good', params: {id: i.id}}">
            <img v-bind:src="require('../assets/images/' + i.img[0])">
            <p>{{ i.shortName }}</p>                   
        </router-link>
        <h5>Цена: {{ i.price }} р.</h5>
        <button v-on:click="chooseCard(i)">В корзину</button>
    </div>
</template>

<script>
import {mapMutations} from 'vuex';
export default {
    name: 'Category',
    computed:{
        myGoods() {
            return this.$store.getters.goodByCategory(this.$route.params.category);
        }
    },
    methods: {
        ...mapMutations(['addToCart']),
        chooseCard(values) {
            this.addToCart(values)
            // console.log(values.amount);
        }
    }
}
</script>

<style>
.goods-small-card {
display: flex;
  flex-direction: column;
  text-decoration: none;
  padding-top: 1rem; 
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  text-align: center;
  /* background-color: red; */
  align-content: center;
  justify-content:space-around;

}

.goods-small-card a {
    color: black;
}

.goods-small-card button {
    cursor: pointer;
}

img {
    max-width: 80%;
    /* width: 100%; */
}

.col-3 {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
}

.col-2 {
    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
}



</style>