import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

// Import style
import '@/assets/styles/main.css';
import '@/assets/styles/tailwind.css';

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
