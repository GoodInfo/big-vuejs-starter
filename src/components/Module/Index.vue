<template>
  <div class="module-list">
    <div class="container">
      <div class="card-deck-wrapper">
        <div class="card-columns">
          <component-schedule v-link="{path: '/comment-schedule'}"></component-schedule>
          <live-video v-link="{path: '/live-video'}"></live-video>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import ComponentSchedule from './CommentSchedule/Card.vue'
  import LiveVideo from './LiveVideo/Card.vue'
  export default{
    components: {
      ComponentSchedule,
      LiveVideo
    }
  }
</script>
<style lang="scss" scoped>
  .module-list{
    .card{
      cursor: pointer;
    }
  }
</style>
