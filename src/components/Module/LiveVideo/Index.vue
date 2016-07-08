<template>
  <div class="live-stream-video">
    <div class="container">
      <component :is="stepComponentName"></component>
      <button @click.prevent="nextStep">Next step</button>
    </div>
  </div>
</template>
<script>
  import Step1 from './Step/Step1.vue'
  import Step2 from './Step/Step2.vue'
  import { nextStep } from './vuex/actions'
  import { step } from './vuex/getters'
  export default{
    components: {
      Step1,
      Step2
    },
    vuex: {
      getters: {
        step
      },
      actions: {
        nextStep
      }
    },
    data () {
      return {
        currentStep: 1,
        maxStep: 2
      }
    },
    created () {},
    computed: {
      stepComponentName () {
        return 'step' + this.step
      }
    }
  }
</script>
