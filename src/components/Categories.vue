<template>
  <div class="categories container">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <h1 class="display-4">List of {{ $route.params.name }} shops</h1>
        <img alt="Vue logo" class="img-fluid my-4" src="@/assets/teashops.svg">
        <p class="lead mt-4">Here is a list of {{ $route.params.name }} shops currently open in your zone</p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Big Boba</li>
          <li class="list-group-item">Teahouse</li>
          <li class="list-group-item">Coquinaria</li>
          <li class="list-group-item">Zomato</li>
        </ul>
      </div>
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Categories'
}
</script>

<style scoped>
.display-4{
  font-size: 2rem;
}
.img-fluid{
  max-width: 50%;
}
.list-group-item{
  color: #5e60ce;
}
</style>