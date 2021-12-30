<template>
  <div>
    <h1>Child Component</h1>
    <input type="text" v-model="username" />
  </div>
</template>

<script>
export default {
  name: "childcomponent",
  data() {
    return {
      username: "",
    };
  },
  methods: {
    sayHello() {
      console.log("say hello");
    },
  },
  beforeCreate() {
    console.log("child before create");
  },
  created() {
    console.log("child created");
  },
  beforeMount() {
    console.log("child beforeMount");
  },
  mounted() {
    console.log("child mounted");
  },
  beforeUpdate() {
    console.log("child before update");
  },
  updated() {
    console.log("child updated");
  },
  beforeUnmount() {
    console.log("child before Unmount");
  },
  unmounted() {
    console.log("child unmounted");
  },
};
</script>

<style></style>
