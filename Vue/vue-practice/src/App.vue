<template>
  <div>
    <!-- component -->
    <!-- <GreetingUser
      :username="username"
      :numberOfvisit="numberOfvisit"
      :siteInfo="siteInfo"
    /> -->
    <!-- <GreetingUser /> -->
    <!-- <button @click="changeName()">change</button> -->
    <!-- <ul>
      <li v-for="product in products" :key="product.id">{{ product }}</li>
    </ul> -->

    <!-- <ProductList :products="products" /> -->
    <!-- <GreetingUser id="greeting" /> -->
    <h1>Component</h1>
    <button @click="displayDetail = true">show detail</button>
    <DetailVue v-if="displayDetail" @closeDetail="close" @sendData="showData" />
  </div>
</template>

<script>
// import GreetingUser from "./components/GreetingUser.vue";
// import ProductList from "./components/ProductList.vue";
import DetailVue from "./components/DetailVue.vue";

export default {
  name: "App",
  components: {
    // GreetingUser,
    // ProductList,
    DetailVue,
  },
  data() {
    return {
      displayDetail: false,

      products: [
        {
          id: 0,
          name: "TV",
          price: 500000,
          company: "LG",
        },
        {
          id: 1,
          name: "Moniter",
          price: 40000,
          company: "Samsung",
        },
        {
          id: 2,
          name: "Iphone",
          price: 70000,
          company: "Apple",
        },
      ],
      // username: "bada",
      // numberOfvisit: undefined,
      // siteInfo: undefined,
    };
  },
  methods: {
    // changeName() {
    //   this.username = "DDochi";
    // },
    close() {
      this.displayDetail = false;
    },
    showData(data) {
      console.log(data);
    },
  },
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
