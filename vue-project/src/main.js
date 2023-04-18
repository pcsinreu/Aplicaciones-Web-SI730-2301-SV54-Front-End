import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

//PrimeVue
import PrimeVue from 'primevue/config';

import "primevue/resources/themes/lara-light-indigo/theme.css";//theme
//import "primevue/resources/themes/arya-orange/theme.css"
//import "primevue/resources/themes/vela-green/theme.css"
import "primevue/resources/primevue.min.css"; //core
import "primeicons/primeicons.css"; //icons
import Button from "primevue/button"
import InputText from 'primevue/inputtext';
import 'primeflex/primeflex.css'
import i18n from'../src/locales/i18n'
import router from './router'


const app = createApp(App);

app.use(i18n);
app.use(PrimeVue);
app.use(router);

app.component('pv-button', Button);
app.component('pv-inputText',InputText)
app.mount('#app')
