<template>
  <ul class="nav navbar-nav pull-xs-right">
    <li v-if="!authenticated" class="nav-item">
      <a class="nav-link" href="#" @click.prevent="login">Login</a>
    </li>
    <li v-if="authenticated" class="nav-item">
      <a class="nav-link" href="#" @click.prevent="logout">Logout</a>
    </li>
  </ul>
</template>
<script>
  import {authenticated} from './../../vuex/user/getters'
  import {logout, login} from './../../vuex/user/actions'
  export default{
    vuex: {
      getters: {
        authenticated
      },
      actions: {
        logout,
        login
      }
    }
  }
</script>
