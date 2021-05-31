import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/catalog',
    component: () => import('../views/Catalog.vue'),
    children: [
      {
        name: 'Good', 
        path: 'good/:id',
        component: () => import('../views/Good.vue')     
      },
      // {
      //   name: 'Category', 
      //   path: ':category',
      //   component: () => import('../components/Item.vue')     
      // }
    ]
  },
  {
    path: '/cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/login',
    component: () => import('../views/Authorization.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
