<template>
  <div>
    <!-- LifeCycle -->
    <h1>Hello Vue!!</h1>
    <parentcomponent />
  </div>
</template>

<script>
import parentcomponent from "./components/liftcycle/ParentComp.vue";
export default {
  name: "App",
  components: { parentcomponent },
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
