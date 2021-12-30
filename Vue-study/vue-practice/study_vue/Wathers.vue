<template>
  <div>
    <!-- Watchers -->
    <h1>Watchers</h1>
    <h2>current moneny :: {{ money }}</h2>
    <div>
      <button @click="money += 100">earn money</button>
      <button @click="money -= 100">spend money</button>
    </div>
    <h2>{{ receit }}</h2>
    <button @click="receit.food += 500">buy food</button>
    <input type="text" v-model="username" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      username: "bada",
      money: 0,
      receit: { food: 3000, fee: 2000, fare: 10000 },
    };
  },
  methods: {},
  directives: {},
  computed: {},
  watch: {
    username: {
      handler(newValue) {
        console.log(newValue);
      },
      immediate: true,
    },
    receit: {
      handler(newValue) {
        console.log(newValue);
      },
      deep: true,
    },
    money(newvalue, oldvalue) {
      console.log(newvalue, oldvalue);
      if (newvalue > 2000 && newvalue > oldvalue) {
        console.log("mission complete");
      }
      if (oldvalue < 1500 && newvalue < oldvalue) {
        console.log("save money!!");
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
