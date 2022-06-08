import { createApp } from 'vue'
import App from './App.vue'
import styles from './styles/_variables.scss'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import Router from "./router";
import i18n from "./i18n";



createApp(App).use(Router)
  .use(vuetify).use(i18n)
  .mount('#app')

