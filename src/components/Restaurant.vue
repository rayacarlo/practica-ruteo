<template>
  <div class="container my-4">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <router-view />
        <router-link :to="{name: 'about', params: {restaurant: restaurant}}">About</router-link>
        <router-link :to="{name: 'reviews', params: {restaurant: restaurant}}">Reviews</router-link>
        <router-link :to="{name: 'images', params: {restaurant: restaurant}}">Images</router-link>
      </div>
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Restaurant',
  props: {
    restaurant: String,
  }
}
</script>

<style scoped>
.display-4{
  font-size: 2rem;
}
.img-fluid{
  max-width: 50%;
}
</style>