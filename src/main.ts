import { defineCustomElement } from 'vue'

import './assets/main.css'

import App from './components/Openweather.ce.vue'

const weatherComponent = defineCustomElement(App)

customElements.define('rz-openweather', weatherComponent)
