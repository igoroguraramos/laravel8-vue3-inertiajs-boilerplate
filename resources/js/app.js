import { createApp } from 'vue';
import Welcome from './components/Welcome.vue';
const app = createApp({});

//Registrando o componente Welcome localizado em resources/js/components/Welcome.vue
app.component('Welcome', Welcome);

// div de id = app localizada em resources/views/welcome.blade.php
app.mount('#app');

require('./bootstrap');