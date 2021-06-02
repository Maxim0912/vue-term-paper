<template>
  <div class="wrapper-single-good">
    <div class="picture col-5">
      <img v-bind:src="require('../assets/images/' + good.img[0])">
    </div>
    <div class="description col-5">
      <h2>{{ good.name }}</h2>
      <p>{{ good.description }}</p>
      <p>Цена: {{ good.price }}р.</p>
      <button>В корзину</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "Good",
  computed: {
    good() {
      return this.$store.getters.goodById(this.$route.params.id);
    }
  }
}
</script>

<style>
.wrapper-single-good {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.picture {
  display: flex;
  flex-direction: column;
  
}

.col-5 {
    -ms-flex: 0 0 58.333333%;
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
}

.col-5 {
    -ms-flex: 0 0 41.666667%;
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
}

.col-3 {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
}

</style>