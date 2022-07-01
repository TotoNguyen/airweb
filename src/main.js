import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

// Import translation
import { createI18n } from 'vue-i18n';
import translation from './i18n/translation.js';
console.log(translation);
// Import style
import '@/assets/styles/main.css';
import '@/assets/styles/tailwind.css';


const i18n = createI18n({
  locale: 'fr', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages: translation, // set locale messages
})

createApp(App)
  .use(store)
  .use(router)
  .use(i18n)
  .mount('#app')
