<template>
  <div class="container my-4">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <router-view />
        <router-link v-bind:to="{ path: '/' + $route.params.name }">About</router-link>
        <router-link v-bind:to="{ path: '/' + $route.params.name + '/reviews' }">Reviews</router-link>
        <router-link v-bind:to="{ path: '/' + $route.params.name + '/images' }">Photos</router-link>
      </div>
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Restaurant'
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