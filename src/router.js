import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
=======
import Home from './views/Home.vue'

>>>>>>> cd5d0ee1dcee0f0ee0414384d660203b62e3c722
Vue.use(Router)

export default new Router({
  routes: [
<<<<<<< HEAD
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
=======
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
>>>>>>> cd5d0ee1dcee0f0ee0414384d660203b62e3c722
  ]
})
