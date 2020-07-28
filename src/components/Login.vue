<template>
  <div class="container my-4">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <h1 class="display-4">Log in to Dojo Reviews</h1>
        <img alt="Vue logo" class="img-fluid my-4" src="@/assets/login.svg">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
          </div>
          <button type="submit" class="btn btn-indigo mb-4">Log in</button>
        </form>
      </div>
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    login: String
  }
}
</script>

<style scoped>
.btn-indigo{
  background-color: #5e60ce;
  color: #fff
}
.display-4{
  font-size: 2rem;
}
.img-fluid{
  max-width: 50%;
}
</style>