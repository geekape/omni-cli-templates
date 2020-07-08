import Vue from 'vue'
import VueRouter from 'vue-router'

const routes = [
  { path: '/', component: ()=> import('../pages/index/index.vue') },
  { path: '/my', component: ()=> import('../pages/my/my.vue') }
]

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
  routes,
})