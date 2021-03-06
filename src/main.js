import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import vcolorpicker from 'vcolorpicker' // 颜色选择器
import 'ant-design-vue/dist/antd.css'
import './assets/css/index.less'


Vue.config.productionTip = false
Vue.use(vcolorpicker)
Vue.use(Antd)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
