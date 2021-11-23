import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI'
import router from "@/router/router";
/*
import App from './App.vue'
import router from './router'
import store from './store'
*/

//createApp(App).use(store).use(router).mount('#app')

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app
    .use(router)
    .mount('#app')