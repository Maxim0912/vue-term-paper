<template>
  <div>{{ $route.params.id }}</div>
  <h2>{{ good.name.toUpperCase() }}</h2>

  <p>{{ good.description }}</p>
  <h1>!!!!!</h1>
</template>

<script>

export default {
  name: "Good",
  computed:{// this - Book
    book() {// $route - 
      return this.$store.getters.bookById(this.$route.params.id);
    }
  }
}
</script>

<style>

</style>