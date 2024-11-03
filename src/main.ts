import { createApp } from 'vue'
import App from './App.vue'
import router from "./scripts/router"
import store from "./scripts/store"
import events from './scripts/events';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(events);

app.mount('#app');
