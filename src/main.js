import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/routes.js";
import './index.css'
import VueMask from '@devindex/vue-mask';
createApp(App).use(router).use(VueMask).mount("#app");