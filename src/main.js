import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './vuex/store'
import { sync } from 'vuex-router-sync'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.root = 'http://fbapp.dev/api'

var router = new VueRouter()
sync(store, router)

import Home from './components/Home.vue'
import Modules from './components/Module/Index.vue'
import CommentSchedule from './components/Module/CommentSchedule/Index.vue'
import LiveVideo from './components/Module/LiveVideo/Index.vue'

router.map({
  '/home': {
    name: 'home',
    component: Home,
    auth: true
  },
  '/modules': {
    name: 'modules',
    component: Modules,
    auth: true
  },
  '/comment-schedule': {
    name: 'comment-schedule',
    component: CommentSchedule,
    auth: true
  },
  '/live-video': {
    name: 'live-video',
    component: LiveVideo,
    auth: true
  }
})

router.beforeEach(function (transition) {
  if (transition.to.auth && !router.app.authenticated) {
    transition.redirect('/')
  } else {
    transition.next()
  }
})

router.start(App, 'body')
