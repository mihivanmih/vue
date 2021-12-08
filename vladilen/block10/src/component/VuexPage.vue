<template>
  <div class="card">
    <h1>{{ appTitle }}</h1>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  name: 'VuexPage',
  setup () {
    const store = useStore()
    const appTitle = store.getters.appTitle.toUpperCase()
    return {
      appTitle
    }
  }
}
</script>

<style scoped>

</style>
