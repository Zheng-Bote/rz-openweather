<template>
  <div class="weather">
    <header v-if="with_title === 'yes'">
      <h4>{{ title }}</h4>
    </header>
    <span v-if="ERROR">
      <div class="error">{{ ERROR_MSG }}</div>
    </span>
    <span v-if="!ERROR">
      <form @submit.prevent="getWeather">
        <div>
          <label>city: </label>
          <input v-model.trim="city" />
        </div>
        <button type="submit">get weather</button>
      </form>

      <div class="card">
        <div class="grid-container">
          <div class="col1">Name:</div>
          <div class="col2">{{ geo.name }}</div>
          <div class="col1">Region:</div>
          <div class="col2">{{ geo.region }}</div>
          <div class="col1">country:</div>
          <div class="col2">{{ geo.country }}</div>
          <div class="col1">Geo:</div>
          <div class="col2">{{ geo.lat }},{{ geo.lon }}</div>
          <div class="col1">Timezone:</div>
          <div class="col2">{{ geo.tz_id }}</div>
          <div class="col1">Local time:</div>
          <div class="col2">{{ geo.localtime }}</div>
          <div class="col1">last updated:</div>
          <div class="col2">{{ geo.last_updated }}</div>
          <div class="col1">Conditions:</div>
          <div class="col2">{{ geo.condition.text }}</div>
          <div class="col1">temperature:</div>
          <div class="col2">{{ geo.temp_c }}°C</div>
          <div class="col1">feels like:</div>
          <div class="col2">{{ geo.feelslike_c }}°C</div>
          <div class="col1">Wind:</div>
          <div class="col2">{{ geo.wind_kph }}km/h, {{ geo.wind_dir }}</div>
          <div class="col1">humidity:</div>
          <div class="col2">{{ geo.humidity }}%</div>
          <div class="col1">pressure:</div>
          <div class="col2">{{ geo.pressure_mb }}pa</div>
          <div class="col1">UV index:</div>
          <div class="col2">{{ geo.uv }}</div>
          <div class="col1">Ozon:</div>
          <div class="col2">{{ geo.air_quality.o3 }}µg/m<sup>3</sup></div>
          <div class="col1">Carbon monoxide (CO):</div>
          <div class="col2">{{ geo.air_quality.co }}mg/m<sup>3</sup></div>
          <div class="col1">Nitrogen dioxide (NO<sub>2</sub>):</div>
          <div class="col2">{{ geo.air_quality.no2 }}µg/m<sup>3</sup></div>
          <div class="col1">Sulfur dioxide (SO<sub>2</sub>):</div>
          <div class="col2">{{ geo.air_quality.so2 }}µg/m<sup>3</sup></div>
          <div class="col1">PM10:</div>
          <div class="col2">{{ geo.air_quality.pm10 }}µg/m<sup>3</sup></div>
          <div class="col1">PM2.5:</div>
          <div class="col2">{{ geo.air_quality.pm2_5 }}µg/m<sup>3</sup></div>
        </div>
      </div>
    </span>
  </div>
</template>

<script lang="ts">
//const OPENWEATHER_API = import.meta.env.VITE_OPENWEATHER_API
//const WEATHER_API = import.meta.env.VITE_WEATHER_API

export default {
  name: 'rz-weather',
  props: {
    location: { type: String, default: '', required: false },
    title: { type: String, default: 'WEATHER & ENVIRONMENTAL DATA', required: false },
    with_title: { type: String, default: 'yes', required: false }
  },

  setup() {},

  data() {
    return {
      city: this.location || null,
      WEATHER_API: '',
      ERROR: false,
      ERROR_MSG: '',
      geo: {
        name: '',
        region: '',
        country: '',
        lat: '',
        lon: '',
        tz_id: '',
        localtime: '',
        last_updated: '',
        condition: { text: '' },
        temp_c: '',
        feelslike_c: '',
        wind_kph: '',
        wind_dir: '',
        humidity: '',
        pressure_mb: '',
        uv: '',
        air_quality: { o3: '', no2: '', co: '', so2: '', pm10: '', pm2_5: '' }
      }
    }
  },

  mounted() {
    // window.localStorage.getItem('rz-openweather');

    if (window.localStorage.getItem('rz-weather') !== null) {
      this.WEATHER_API = window.localStorage.getItem('rz-weather') || ''
    } else {
      this.ERROR_MSG = 'No rz-weather API key found'
      this.ERROR = true
      console.error(this.ERROR_MSG)
      return
    }

    if (this.WEATHER_API.length === 0) {
      this.ERROR_MSG = 'No rz-weather API key found'
      this.ERROR = true
      console.error(this.ERROR_MSG)
      return
    }

    if (this.location.length !== 0) {
      //this.cookies.set('rz-openweather', WEATHER_API)

      this.getWeather()
      //this.getGeo()
    }
  },

  methods: {
    async getWeather() {
      if (!this.city) {
        return
      }

      const uri = `https://api.weatherapi.com/v1/current.json?key=${this.WEATHER_API}&aqi=yes&q=${this.city}`
      //const uri = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${OPENWEATHER_API}&units=metric`
      const res = await fetch(uri)
      let data = await res.json()
      this.geo = Object.assign(data.location, data.current)
    }
  }
}
</script>

<style scoped>
@import url('../assets/custom.css');
</style>
