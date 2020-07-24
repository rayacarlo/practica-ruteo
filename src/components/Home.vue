<template>
  <div class="home container">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <h1 class="display-4">Welcome to Dojo Reviews</h1>
        <img alt="Vue logo" class="img-fluid my-4" src="@/assets/food.svg">
        <p class="lead mt-2">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      </div>
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.display-4{
  font-size: 2rem;
}
.img-fluid{
  max-width: 75%;
}
</style>
