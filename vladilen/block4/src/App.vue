<template>
  <div class="container pt-1">
    <div class="card">
      <async-component></async-component>
      <h2>Динамические и асинхронные компоненты</h2>

      <app-button
        :color="oneColor"
        @action="active = 'one'"
      >
        One</app-button>

      <app-button
        ref="myBtn"
        :color="twoColor"
        @action="active = 'two'"
      >Two</app-button>

    </div>

    <keep-alive>
      <component :is="componentName"></component>
    </keep-alive>

  </div>
</template>

<script>
import AppButton from '@/conponent/AppButton'
import AppTextOne from '@/conponent/tabs/AppTextOne'
import AppTextTwo from '@/conponent/tabs/AppTextTwo'
export default {
  data () {
    return {
      active: 'one'
    }
  },
  computed: {
    // componentName () {
    //   return 'app-text-' + this.active
    // },
    componentName: {
      get () {
        return 'app-text-' + this.active
      },
      set (value) {
        console.log('componentName')
      }
    },
    oneColor () {
      return this.active === 'one' ? 'primary' : ''
    },
    twoColor () {
      return this.active === 'two' ? 'primary' : ''
    }
  },
  mounted () {
    console.log(this.$refs.myBtn)
  },
  components: { AppTextTwo, AppTextOne, AppButton }
}
</script>

<style scoped>
</style>
