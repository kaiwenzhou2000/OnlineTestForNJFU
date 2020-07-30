import Vue from 'vue'
import VueRouter from 'vue-router'
import SingleSelectForMY from "../components/SingleSelectForMY";
import SingleSelectForCpp from "../components/SingleSelectForCpp";
import SingleSelectForMG from "../components/SingleSelectForMG";
import SingleSelectForJDS from "../components/SingleSelectForJDS";
import SingleSelectForSX from "../components/SingleSelectForSX";
Vue.use(VueRouter)

const routes = [
  {
  path: '/',
  redirect: '/SingleSelectForMY'
  },
  {
    path: '/SingleSelectForMY',
    name: 'SingleSelectForMY',
    component: SingleSelectForMY
  },
  {
    path: '/SingleSelectForCpp',
    name: 'SingleSelectForCpp',
    component: SingleSelectForCpp
  },
  {
    path: '/SingleSelectForMG',
    name: 'SingleSelectForMG',
    component: SingleSelectForMG
  },
  {
    path: '/SingleSelectForJDS',
    name: 'SingleSelectForJDS',
    component: SingleSelectForJDS
  },
  {
    path: '/SingleSelectForSX',
    name: 'SingleSelectForSX',
    component: SingleSelectForSX
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
