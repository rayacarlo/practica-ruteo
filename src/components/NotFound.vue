<template>
  <div class="container my-4">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <h1 class="display-4">Not Found</h1>
        <img alt="Vue logo" class="img-fluid my-4" src="@/assets/notfound.svg">
        <p class="lead mt-4">Oh no! It looks like this page doesn't exist. <br> Try something different</p>
      </div>
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
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