import Vue from 'vue'
import VueRouter from 'vue-router'
import SingIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import Dashboard from '../views/Dashboard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },  
  {
    path: '/login',
    name: 'SingIn',
    component: SingIn
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('user-token');
    // If logged in, or going to the Login page.
    console.log(to.name)
    if(to.name !== 'SingIn' && to.name !== 'SignUp') {
      if (token || to.name === 'SingIn') {
        // Continue to page.
        next()
      } else {
        // Not logged in, redirect to login. 
        next({name: 'SingIn'})
      } 
    } else {
      next()
    }
  }
);

export default router
