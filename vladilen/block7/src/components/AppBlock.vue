<template>
  <div class="container">
    <app-alert v-if="hideAlert"
               :title="'Внимание!'"
               :text="'Важный текст'"
               :classAlert="'primary'"
               :closable=false
               @close="hideAlert = false"
    ></app-alert>
    <div class="card">
      <button class="btn primary" @click="toggleAlert">{{ hideAlert ? 'Скрыть' : 'Показать' }} сообщение</button>
    </div>
  </div>
</template>

<script>

import AppAlert from '@/components/AppAlert'
import alertMixin from '@/mixins/alertMixin'
export default {
  name: 'AppBlock',
  mixins: [alertMixin],
  components: { AppAlert }
}
</script>

<style>
</style>
