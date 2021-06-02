import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/catalog'
  },
  { 
    path: '/catalog',
    component: () => import('../views/Catalog.vue'),
    children: [
      {
        name: 'Category', 
        path: ':category',
        component: () => import('../views/Category.vue')     
      }
   ]
  },
  {
    name: 'Good', 
    path: '/catalog/:category/:id',
    component: () => import('../views/Good.vue')
  },
  {
    path: '/cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/login',
    component: () => import('../views/Authorization.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  },
  {
    path:'/404',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
