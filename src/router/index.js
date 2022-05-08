import Vue from "vue";
import VueRouter from "vue-router"

const Home = () => import('../views/home/Home');
const Sort = () => import('../views/sort/Sort');
const Cart = () => import('../views/cart/Cart');
const My = () => import('../views/my/My');
const Detail = () => import('../views/detail/detail')

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/sort',
    component: Sort
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/my',
    component: My
  },
  {
    path: '/detail/:iid',
    component: Detail
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router;
