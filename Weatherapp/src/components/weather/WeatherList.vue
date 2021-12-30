<template>
  <div>
    <ul class="weather-list">
      <weatherItem
        v-for="weather in weatherList"
        :key="weather.code"
        :weather="weather"
      />
    </ul>
  </div>
</template>

<script>
import weatherItem from "./WeatherItem.vue";

export default {
  name: "weatherList",
  components: {
    weatherItem,
  },
  props: {
    weatherList: Array,
  },
};
</script>

<style scoped>
.weather-list {
  display: grid;
  margin-top: 1em;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
}
</style>
