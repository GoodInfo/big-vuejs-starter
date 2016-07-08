<template>
  <div class="header">
    <nav class="navbar navbar-light bg-faded">
      <a class="navbar-brand" href="#">Facebook Toolbox</a>
      <ul class="nav navbar-nav">
        <li class="nav-item">
          <a class="nav-link" v-link="{ path: '/home' }">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-link="{ path: '/modules' }">Modules</a>
        </li>
      </ul>
      <user-menu></user-menu>
    </nav>
  </div>
</template>
<script>
  import UserMenu from './UserMenu.vue'
  export default{
    components: {
      UserMenu
    }
  }
</script>
<style lang="scss" scoped>
</style>
