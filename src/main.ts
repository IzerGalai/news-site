import Vue from 'vue'
import '@fontsource/roboto'
import 'purecss/build/pure-min.css';
import './assets/main.scss'
import App from './App.vue'
import router from './router'
import VueMeta from 'vue-meta'

Vue.config.productionTip = false
Vue.use(VueMeta)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
