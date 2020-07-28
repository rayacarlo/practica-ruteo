<template>
  <div class="reviews">
    <h1 class="display-4">Check out the reviews of {{ restaurant }}</h1>
    <img alt="Vue logo" class="img-fluid my-4" src="@/assets/reviews.svg">
    <div class="card my-2">
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>Absolutely love your teas, which I recently discovered for the first time here in Florida</p>
          <footer class="blockquote-footer">Cristine Pond from <cite title="Source Title">Florida</cite></footer>
        </blockquote>
      </div>
    </div>
    <div class="card my-2">
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>Awesome great range won’t to try all of them really good when u have a cold I’ve been adding lemon honey n orange</p>
          <footer class="blockquote-footer">Megan Ford from <cite title="Source Title">San Francisco</cite></footer>
        </blockquote>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reviews',
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