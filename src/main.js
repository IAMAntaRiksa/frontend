import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// swiper
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


const app = createApp(App)

app.use(router)

app.mount('#app')
