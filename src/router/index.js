import { createRouter, createWebHistory } from 'vue-router'
import Admin from '@/components/Admin.vue'
import home from '@/components/home.vue'
import login from '@/components/login.vue'
import productDetail from '@/components/productDetail.vue'
import products from '@/components/products.vue'
import profile from '@/components/profile.vue'
import SellerView from '@/components/SellerView.vue'
import signUp from '@/components/signUp.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component:home
    },
    {
      path:'/admin',
      component:Admin
    },
    {
      path:'/login',
      component:login
    },
   {path:'/productDetail',
    component:productDetail
   },
   {
    path:'/profile',
    component:profile
   },
   {
    path:'/sellerView',
    component:SellerView
   },
   {
    path:'/signUp',
    component:signUp
   },
   {
    path:'/products',
    component:products
   }
  ],
})

export default router
