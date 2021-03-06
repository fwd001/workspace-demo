import Vue from 'vue'
import VueRouter from 'vue-router'
import WorkSpaceLayout from '../layouts/WorkSpaceLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: WorkSpaceLayout,
    redirect: '/WorkSpace',
    children: [
      {
        path: 'WorkSpace',
        name: 'WorkSpace',
        component: () => import(/* webpackChunkName: "WorkSpace" */ '../views/WorkSpace.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
