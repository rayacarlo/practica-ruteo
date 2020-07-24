import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import Restaurant from '../components/Restaurant.vue';
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
      component: Restaurant
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