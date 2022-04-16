import Vue from 'vue'
import '@fontsource/roboto'
import 'purecss/build/pure-min.css';
import './assets/main.scss'
import App from './App.vue'
import router from './router'
import VueMeta from 'vue-meta'
import Paginate from 'vuejs-paginate'
import BackToTop from 'vue-backtotop'


Vue.config.productionTip = false
Vue.use(VueMeta)
Vue.component('paginate', Paginate)
Vue.use(BackToTop)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
