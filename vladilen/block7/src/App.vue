<template>
  <div class="container">
      <div class="card">
        <h2>{{ $i18n('app.title') }}</h2>
        <button class="btn" @click="changeLang">{{ $i18n('app.btn') }}</button>
        <button class="btn primary" @click="modal = true">Открыть модалку</button>
        <teleport to="body" disabled>
          <app-model v-if="modal" @close="modal = false"></app-model>
        </teleport>
      </div>
  </div>
</template>

<script>
import AppModel from '@/components/AppModel'
export default {
  name: 'App',
  data () {
    return {
      modal: false
    }
  },
  components: { AppModel },
  inject: ['changeI18N'],
  methods: {
    changeLang () {
      this.changeI18N('en')
      this.$forceUpdate()
    }
  }
}
</script>

<style>
</style>
