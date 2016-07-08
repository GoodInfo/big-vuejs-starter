import Vue from 'vue'
import Vuex from 'vuex'
import liveVideo from './../components/Module/LiveVideo/vuex/store'
import user from './user/store'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
Vue.config.debug = debug

export default new Vuex.Store({
  modules: {
    user,
    liveVideo
  },
  strict: debug
})
