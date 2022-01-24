/* eslint-disable eol-last */
export default [
  {
    path: '/',
    component: () => import('@/templates/main/Main.vue'),
    name: 'Main',
    children: [
      {
        path: '/dashboard',
        component: () => import('@/views/Dashboard.vue'),
        name: 'dashboard',
        meta: {}
      }
    ]
  }
]