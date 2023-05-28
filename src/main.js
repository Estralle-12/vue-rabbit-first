// import './assets/main.css'

import { createApp } from "vue";
import { createPinia } from "pinia";
import { lazyPlugin } from "./directives";
import { componentPlugin } from "./components";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import App from "./App.vue";
import router from "./router";

// 引入初始化样式文件
import "@/styles/common.scss";

const app = createApp(App);
const pinia = createPinia();

// 注册持久化插件
pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(createPinia());
app.use(router);
app.use(lazyPlugin);
app.use(componentPlugin);
app.mount("#app");
