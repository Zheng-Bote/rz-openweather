import { defineCustomElement } from 'vue'

import './assets/main.css'

import App from './components/Weather.ce.vue'

const weatherComponent = defineCustomElement(App)

customElements.define('rz-weather', weatherComponent)
