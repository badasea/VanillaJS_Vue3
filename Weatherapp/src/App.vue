<template>
  <div>
    <HeaderDisplay />
    <WeatherContent />
  </div>
</template>

<script>
import HeaderDisplay from "./components/layouts/HeaderDisplay.vue";
import WeatherContent from "./components/weather/WeatherContent.vue";

export default {
  components: { HeaderDisplay, WeatherContent },
};
</script>

<style></style>
