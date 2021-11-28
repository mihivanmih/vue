import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import TheHeader from '@/TheHeader'
import '@/theme.css'

const app = createApp(App)

// global
app.component('the-header', TheHeader)
app.component('async-component', defineAsyncComponent(() => {
  return import('@/conponent/AppAsyncComponent')
}))
app.mount('#app')
