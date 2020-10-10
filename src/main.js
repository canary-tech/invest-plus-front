import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faAngleDoubleLeft,
  faCommentDollar,
  faEnvelope,
  faThLarge,
  faTimes,
  faCogs,
  faBars
} from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(faFontAwesome, faAngleDoubleLeft, faCommentDollar, faEnvelope, faThLarge, faTimes, faCogs, faBars)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
