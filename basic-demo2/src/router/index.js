import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "@/views/layout/index.vue"
import Login from "@/views/login/login.vue"
import Home from "@/views/home/Home.vue"
const Product=()=>import('@/views/product/index.vue')
const List=()=>import('@/views/product/list/index.vue')
const Category=()=>import('@/views/product/category/index.vue')

const Order=()=>import('@/views/order/index.vue')
const OrderList=()=>import('@/views/order/list/index.vue')
const OrderCollect=()=>import('@/views/order/collect/index.vue')

const Advent=()=>import('@/views/advent/index.vue')
const AdventList=()=>import('@/views/advent/list/index.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    children: [{
      path: '/',
      name: 'home',
      component: Home,
    },{
      path: '/product',
      name: 'home',
      component: Product,
      children:[{
        path: 'list',
        name: 'list',
        component: List,
      },{
        path: 'category',
        name: 'category',
        component: Category,
      }]
    },{
      path: '/order',
      name: 'order',
      component: Order,
      children:[{
        path: 'orderlist',
        name: 'orderlist',
        component: OrderList,
      },{
        path: 'collect',
        name: 'collect',
        component: OrderCollect,
      }]
    },{
      path: '/advent',
      name: 'advent',
      component: Advent,
      children:[{
        path: 'adventlist',
        name: 'adventlist',
        component: AdventList,
      }]
    }]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
