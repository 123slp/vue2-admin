
import layout from '@/layout'
export default [
  {
    path: '/',
    component: layout,
    redirect: '/vedio',
    children: [
      {
        path: 'vedio',
        name: 'vedio',
        meta: { title: '视频' },
        component: () => import(/* webpackChunkName: "userManage" */ '@/pages/userManage')
      },
      {
        path: 'music',
        name: 'music',
        meta: { title: '音乐' },
        component: () => import(/* webpackChunkName: "userManage" */ '@/pages/userManage')
      }
    ]
  }
]
