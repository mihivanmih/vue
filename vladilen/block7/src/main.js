import { createApp } from 'vue'
import App from './App.vue'
import '@/theme.css'
import translatePlugin from '@/plagins/translatePlugin'

const ru = {
  app: {
    title: 'Как работают плагины во Vue?',
    btn: 'Переключить язык'
  }
}
const en = {
  app: {
    title: 'How plugins work in Vue?',
    btn: 'Toggle Language'
  }
}

createApp(App)
  .use(translatePlugin, { ru, en })
  .mount('#app')
