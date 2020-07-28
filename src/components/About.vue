<template>
  <div class="about">
    <h1 class="display-4">{{ restaurant }}</h1>
    <img alt="Vue logo" class="img-fluid my-4" src="@/assets/about.svg">
    <p class="lead mt-4">Since 2018, {{ restaurant }} offers variety of tea and coffee drinks from different labels. <br> Please visit our places and follow us on instagram: @{{ restaurant }}</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    restaurant: String
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