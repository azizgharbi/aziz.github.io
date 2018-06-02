import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Buefy)

//import routes
import {router} from "./routes/routes"


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')