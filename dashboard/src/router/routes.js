export default [
  {
    path: '/',
    component: () => import('@/templates/Main.vue'),
    name: 'Dashboard',
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/Dashboard.vue')
      }
    ]
  }
]
