<template>
    <h1>Cart</h1>
    <div v-for="item in goodInCart" :key="item.id">
        <p>{{ item.shortName }}</p>
        <p>Количество: {{ item.qtyInCart }}</p>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    name: 'Cart',
    computed: {
    ...mapGetters(['goodInCart']), 
    },
}
</script>

<style>

</style>