import Vue from 'vue'
import './style.css'
import './assets/icon.scss'
import App from './App.vue'

import SuButton from './components/button/index.vue'

Vue.component('DjbButton', SuButton)

new Vue(App).$mount('#app')
