import axios from "axios";

const WeatherMixin = {
  data() {
    return {};
  },
  methods: {
    async getweatherInfo(city) {
      const API_KEY = process.env.VUE_APP_API_KEY;
      const url =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city.code +
        "&appid=" +
        API_KEY;
      const res = await axios.get(url);
      const { main, wind, weather } = res.data;
      const weatherResult = {
        label: city.label,
        code: city.code,
        temperature: this.displayTemperature(main.temp),
        humidity: main.humidity,
        wind: wind.speed,
        icon: "https://openweathermap.org/img/wn/" + weather[0].icon + ".png",
      };
      //   console.log(res);
      return weatherResult;
    },
    displayTemperature(temperature) {
      return (temperature - 273.15).toFixed(1);
    },
  },
};

export default WeatherMixin;
