<template>
  <div class="about">
    <h1 class="display-4">{{ $route.params.name }}</h1>
    <img alt="Vue logo" class="img-fluid my-4" src="@/assets/about.svg">
    <p class="lead mt-4">Since 2018, {{ $route.params.name }} offers variety of tea and coffee drinks from different labels. <br> Please visit our places and follow us on instagram: @{{ $route.params.name }}</p>
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