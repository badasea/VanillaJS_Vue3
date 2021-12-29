<template>
  <div>
    <!-- Composition API -->
    <h1>Hello Vue!!</h1>
    <Test />
  </div>
</template>

<script>
import Test from "./components/composition/TestComponent.vue";

export default {
  name: "App",
  components: { Test },
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
