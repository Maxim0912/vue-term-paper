<template>
    <shop-header :background="background" :tabs="tabs"></shop-header>
    <h1>Cart</h1>
</template>

<script>
import ShopHeader from '../components/ShopHeader.vue'
export default {
    name: 'Cart',
    components: { ShopHeader },
}
</script>

<style>

</style>