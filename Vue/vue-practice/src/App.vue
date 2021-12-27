<template>
  <div>
    <!-- HTTP Request -->
    <h1>Hello Vue!!</h1>
    <TodoList />
  </div>
</template>

<script>
import TodoList from "./components/http/TodoList.vue";

export default {
  name: "App",
  components: {
    TodoList,
  },
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
