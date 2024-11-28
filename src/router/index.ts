import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/invoices'
    },
    {
      path: '/invoices',
      component: () => import('../views/InvoicesView.vue')
    },
    {
      path: '/tools',
      component: () => import('../views/ToolsView.vue')
    },
    {
      path: '/invoice/:id',
      component: () => import('../components/InvoiceDetail.vue')
    }
    // {
    //   path: '/welfare',
    //   component: () => import('../views/WelfareView.vue')
    // },
    // {
    //   path: '/profile',
    //   component: () => import('../views/ProfileView.vue')
    // }
  ]
})

export default router