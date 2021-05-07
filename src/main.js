import Vue from 'vue'
import App from './App.vue'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  router,store,
  render: h => h(App),
}).$mount('#app')
