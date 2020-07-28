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
      component: Home,
      name: 'home',
      props: true
    },
    {
      path: '/login',
      component: Login,
      name: 'login',
      props: true
    },
    {
      path: '/:restaurant',
      component: Restaurant,
      name: 'restaurant',
      props: true,
      children: [
        {
          path: '',
          component: About,
          name: 'about',
          props: true
        },
        {
          path: 'reviews',
          component: Reviews,
          name: 'reviews',
          props: true
        },
        {
          path: 'images',
          component: Images,
          name: 'images',
          props: true
        },
      ]
    },
    {
      path: '/category/:name',
      component: Categories,
      name: 'categories',
      props: true
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})