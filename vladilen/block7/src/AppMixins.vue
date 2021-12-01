<template>
  <div class="container">
    <app-alert v-if="hideAlert"
      :title="'Внимание!'"
      :text="'Важный текст'"
      :classAlert="'danger'"
      @close="hideAlert = false"
    ></app-alert>
    <div class="card">
      <button class="btn primary" @click="toggleAlert">{{ hideAlert ? 'Скрыть' : 'Показать' }} сообщение</button>
    </div>
    <app-block></app-block>
  </div>
</template>

<script>

import AppAlert from '@/components/AppAlert'
import AppBlock from '@/components/AppBlock'
import alertMixin from '@/mixins/alertMixin'
export default {
  name: 'App',
  mixins: [alertMixin],
  components: { AppBlock, AppAlert }
}
</script>

<style>
</style>
