import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import Restaurant from '../components/Restaurant.vue';
import About from '../components/About.vue';
import Reviews from '../components/Reviews.vue';
import Images from '../components/Images.vue';
import Categories from '../components/Categories.vue';
import NotFound from '../components/NotFound.vue'

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/', 
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/:name',
      component: Restaurant,
      children: [
        {
          path: '',
          component: About
        },
        {
          path: 'reviews',
          component: Reviews
        },
        {
          path: 'images',
          component: Images
        },
      ]
    },
    {
      path: '/category/:name',
      component: Categories
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})