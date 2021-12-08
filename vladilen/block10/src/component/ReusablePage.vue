<template>
  <app-alert
    v-if="simpleAlert"
    title="Работаем с Composition"
    type="primary"
    @click="close"
  ></app-alert>
  <div class="card">
    <h1>Переиспользование</h1>
    {{ alert }}
    <button class="btn primary" @click="toogle">{{ simpleAlert ? 'Закрыть' : 'Показать' }} сообщение</button>
    <button class="btn" @click="navigate">Перейти на главную</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import AppAlert from '@/component/AppAlert'
import { useAlert } from '@/hooks/alert'

export default {
  name: 'ReusablePage',
  components: { AppAlert },
  setup () {
    const alert = 42
    const { alert: simpleAlert, close, toogle } = useAlert(true)
    // const [closeAlert, toogle, simpleClose] = useAlert()
    const router = useRouter()
    const navigate = () => router.push('/')

    return {
      alert,
      simpleAlert,
      toogle,
      close,
      navigate
    }
  }
}
</script>

<style scoped>

</style>
