import Vue from 'vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-carbon.css'
Vue.use(MuseUI)

import App from './App'

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})