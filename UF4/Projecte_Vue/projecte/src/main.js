import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'

createApp(App).use(router,Vuelidate).mount('#app')
