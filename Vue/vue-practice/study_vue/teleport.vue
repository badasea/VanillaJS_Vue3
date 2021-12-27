<template>
  <div>
    <!-- teleport -->
    <h1>Hello Vue!!</h1>
    <h3>Content!!!</h3>
    <teleport to="#extra-model" :disabled="isTeleport">
      <div class="model">
        model
        <button @click="isTeleport = !isTeleport">teleport toggle</button>
      </div>
    </teleport>
    <teleport to="#extra-model">
      <div class="model2">model2</div>
    </teleport>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  provide() {
    return {};
  },
  data() {
    return {
      username: "bada",
      isTeleport: true,
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
.model {
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  widows: 100%;
  height: 100%;
  top: 0;
  left: 0;
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
