<template>
  <div class="weather-wrapper">
    <ContentHeader />
    <CitySelector @selectCity="selectCity" />
    <weatherList :weatherList="weatherList" />
  </div>
</template>

<script>
import ContentHeader from "./ContentHeader.vue";
import CitySelector from "./CitySelector.vue";
import weatherList from "./WeatherList.vue";
import weatherMixin from "../../mixins/WeatherMixins";

export default {
  name: "weather content",
  components: {
    ContentHeader,
    CitySelector,
    weatherList,
  },
  mixins: [weatherMixin],
  data() {
    return {
      weatherList: [],
    };
  },
  methods: {
    async selectCity(city) {
      if (city.selected) {
        const weather = await this.getweatherInfo(city);
        this.weatherList.push(weather);
        // console.log(city);
      } else {
        const index = this.weatherList.findIndex(
          (weather) => weather.code === city.code
        );
        this.weatherList.splice(index, 1);
      }
    },
  },
};
</script>

<style></style>
