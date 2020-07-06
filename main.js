import Vue from 'vue'
import App from './App'
import store from './store'
import api from './api'
import utils from './lib/utils'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.$api = api
Vue.prototype.$store = store
Vue.prototype.$utils = utils

const app = new Vue({
	store,
	...App
})
app.$mount()
