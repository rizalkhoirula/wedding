import './assets/css/animate.css';
import './assets/css/icomoon.css';
import './assets/css/bootstrap.css';
import './assets/css/magnific-popup.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/owl.theme.default.min.css';
import './assets/css/style.css';

import './assets/js/jquery.min.js';
import './assets/js/jquery.easing.1.3.js';
import './assets/js/owl.carousel.min.js';
import './assets/js/simplyCountdown';
import router from './Routes/Router';
import { createApp } from 'vue';
import App from './App.vue';

createApp(App)
  .use(router)  
  .mount('#app');

 