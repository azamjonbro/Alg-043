import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import i18n from "./utils/i18n";
// createApp(App)

// .mount('#app')
const app = createApp(App)

app.use(router)
app.config.globalProperties.$t = (key) => i18n.t(key);
app.mount("#app")


const obj = {
 name:"Laylo",
 weight:45
}
console.log(Object.keys(obj));
