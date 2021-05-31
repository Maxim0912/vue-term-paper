<template>
    <shop-header :background="background" :tabs="tabs"></shop-header>
    <div>
      <router-view/>
    </div>
</template>

<script>
import ShopHeader from './components/ShopHeader.vue';

export default {
    components: {ShopHeader},
    data() {
      return {
        tabs: [
          {name: "Каталог", path: '/catalog'},
          {name: "Корзина", path: '/cart'},
          {name: "Войти", path: '/login'},
        ],
        background: "yellow"
      }
    }

}
</script>

<style>

</style>