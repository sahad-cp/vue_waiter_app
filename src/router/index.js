import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/Login/LoginPage.vue'
import TableListView from '../views/TableListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path:'/',
    component: LoginPage,
    name: 'login',
   },
   {
    path:'/tablelistview',
    component:TableListView,
    name:'tablelistview',
   }
  ]
})

export default router
