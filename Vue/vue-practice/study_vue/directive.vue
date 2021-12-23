<template>
  <div>
    <!-- directive -->
    <h1>Diractive</h1>
    <h2 v-once>유저의 이름은 {{ userName }}</h2>
    <button @click="changeName">change name</button>
    <h2 v-pre>{{ userName }}</h2>
    <input v-focus type="text" />
    highlight => <input type="text" v-highlight />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return { userName: "bada" };
  },
  methods: {
    changeName() {
      this.userName = "code!!";
    },
  },
  directives: {
    focus: {
      mounted(el) {
        el.focus();
      },
    },
    highlight: {
      mounted(el) {
        console.log(el);
        el.oninput = () => {
          (el.style.background = "salmon"), (el.style.color = "#fff");
        };
      },
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
label {
  font-size: 20px;
  font-weight: bold;
  margin-right: 1rem;
}
div {
  margin-bottom: 1rem;
}
</style>
