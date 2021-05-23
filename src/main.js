import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from '@/plugins/vuetify' 
import { mdiAccount } from '@mdi/js'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

new Vue({
  vuetify,
  mdiAccount,
  render: h => h(App),
}).$mount('#app')
