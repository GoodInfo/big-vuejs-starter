<template>
  <div class="home">
    <div class="container text-xs-center">
      <h1>{{ msg }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello!'
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  color: #42b983;
}
</style>
