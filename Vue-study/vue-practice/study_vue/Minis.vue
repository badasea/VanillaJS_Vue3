<template>
  <div>
    <!-- Mixins -->
    <h1>Hello Vue!!</h1>
    <Productstatus />
    <FeeStatus />
    <SavingStatus />
  </div>
</template>

<script>
import Productstatus from "./components/mixin/ProductStatus.vue";
import FeeStatus from "./components/mixin/FeeStatus.vue";
import SavingStatus from "./components/mixin/SavingStatus.vue";
export default {
  name: "App",
  components: { Productstatus, FeeStatus, SavingStatus },
  provide() {
    return {};
  },
  data() {
    return {
      username: "bada",
    };
  },
  methods: {},
  directives: {},
  computed: {},
  watch: {},
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
