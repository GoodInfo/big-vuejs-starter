<template>
  <div id="app">
    <site-header></site-header>
    <div class="site-main">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import 'nprogress/nprogress.css'
  import 'bootstrap/scss/bootstrap-flex.scss'
  import Vue from 'vue'
  import SiteHeader from './components/Header/index.vue'
  import store from './vuex/store'
  import {authenticated} from './vuex/user/getters'
  import {authenticate, logout, login, checkAuth} from './vuex/user/actions'
  import {jwtTokenInterceptor} from './vuex/http/actions'
  export default {
    replace: false,
    store,
    components: {
      SiteHeader
    },
    vuex: {
      getters: {
        authenticated
      },
      actions: {
        authenticate,
        logout,
        login,
        checkAuth,
        jwtTokenInterceptor
      }
    },
    ready () {
      this.checkAuth()
      Vue.http.interceptors.push(this.jwtTokenInterceptor)
    }
  }
</script>
<style lang="scss" scoped>
  #app{
    .site-main{
      margin-top: 50px;
    }
  }
</style>
