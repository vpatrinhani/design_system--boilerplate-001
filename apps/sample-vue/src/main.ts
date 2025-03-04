import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { defineCustomElements } from '@my-lib-org/mylib/loader';
defineCustomElements(window);

import '@my-lib-org/mylib-core-styles/css/mylib-icons--js-import.css';

createApp(App).mount('#app')
