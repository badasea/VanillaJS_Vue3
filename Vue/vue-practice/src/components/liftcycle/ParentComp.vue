<template>
  <div>
    <h1>Parent Component</h1>
    <input type="text" v-model="nickname" ref="inputRef" />
    <button @click="consoleRef">console Ref</button>
    <hr />
    <childcomponent v-if="showChild" />
    <button @click="showChild = false">unmount child</button>
  </div>
</template>

<script>
import childcomponent from "./ChildComp.vue";
export default {
  components: { childcomponent },
  name: "parentcomponent",
  data() {
    return {
      showChild: true,
      nickname: "",
    };
  },
  methods: {
    consoleRef() {
      this.$refs.inputRef.focus();
      this.$refs.inputRef.style.border = "1px solid red";
      this.$refs.childcomponent.sayHello();
      console.log(this.$refs.inputRef);
    },
  },
  beforeCreate() {
    console.log("parent before create");
  },
  created() {
    console.log("parent created");
  },
  beforeMount() {
    console.log("parent beforeMount");
  },
  mounted() {
    console.log("parent mounted");
  },
  beforeUpdate() {
    console.log("parent before update");
  },
  updated() {
    console.log("parent updated");
  },
  beforeUnmount() {
    console.log("parent before Unmount");
  },
  unmounted() {
    console.log("parent unmounted");
  },
};
</script>

<style></style>
