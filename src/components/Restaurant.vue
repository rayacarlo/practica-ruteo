<template>
  <div class="restaurant container">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <h1 class="display-4">Restaurant of {{ $route.params.name }} food</h1>
        <img alt="Vue logo" class="img-fluid my-4" src="@/assets/barbecue.svg">
        <p class="lead mt-4">Since 2018, this restaurant of {{ $route.params.name }} food offers tasty meals. <br> Enjoy our food and follow us on instagram: @restaurant{{ $route.params.name }}</p>
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