import Vue from 'vue'
import './style.css'
import './assets/icon.scss'
import App from './App.vue'

import SuButton from './components/button/index.vue'
import SuRadio from './components/radio/index.vue'
import SuRadioGroup from './components/radio/group.vue'
import SuCheckbox from './components/checkbox/index.vue'
import SuCheckboxGroup from './components/checkbox/group.vue'

Vue.component('SuButton', SuButton)
Vue.component('SuRadio', SuRadio)
Vue.component('SuRadioGroup', SuRadioGroup)
Vue.component('SuCheckbox', SuCheckbox)
Vue.component('SuCheckboxGroup', SuCheckboxGroup)

new Vue(App).$mount('#app')
