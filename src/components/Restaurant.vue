<template>
  <div class="container">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
       <router-view />
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