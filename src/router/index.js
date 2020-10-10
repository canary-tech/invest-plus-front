import Vue from 'vue'
import VueRouter from 'vue-router'
import Menu from '../components/Menu.vue'
import SignUp from '../views/SignUp.vue'
import SignIn from '../views/SignIn.vue'
import Dashboard from '../views/Dashboard'
import ProductList from '../views/ProductList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/sign-up',
    name: 'SignUp',
    components: {
      logged: null,
      default: SignUp
    }
  },  
  {
    path: '/login',
    name: 'SignIn',
    components: {
      logged: null,
      default: SignIn, //require('../views/SignIn.vue').default,
    }
  },
  {
    path: '/',
    name: 'Dashboard',
    components: {
      logged: Menu,
      default: Dashboard
    }
  },
  {
    path: '/products',
    name: 'Products',
    components: {
      logged: Menu,
      default: ProductList
    }
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
    if(to.name !== 'SignIn' && to.name !== 'SignUp') {
      if (token || to.name === 'SignIn') {
        // Continue to page.
        next()
      } else {
        // Not logged in, redirect to login. 
        next({name: 'SignIn'})
      } 
    } else {
      next()
    }
  }
);

export default router
