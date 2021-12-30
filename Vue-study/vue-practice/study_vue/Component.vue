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
    <!-- <h1>Component</h1>
    <button @click="displayDetail = true">show detail</button>
    <DetailVue v-if="displayDetail" @closeDetail="close" @sendData="showData" /> -->
    <h1>Hello Vue!!</h1>
    <!-- <CompLevel1 /> -->
    <button @click="actionTab = 'menu1'">menu1</button>
    <button @click="actionTab = 'menu2'">menu2</button>
    <button @click="actionTab = 'menu3'">menu3</button>
    <!-- <menu1 v-if="activeTab === 'menu1'" />
    <menu2 v-if="activeTab === 'menu2'" />
    <menu3 v-if="activeTab === 'menu3'" /> -->
    <keep-alive>
      <component :is="actionTab"></component>
    </keep-alive>
  </div>
</template>

<script>
// import GreetingUser from "./components/GreetingUser.vue";
// import ProductList from "./components/ProductList.vue";
// import DetailVue from "./components/DetailVue.vue";
// import CompLevel1 from "./components/provied-inject/CompLevel1.vue";
import menu1 from "./components/tabItems/menu1.vue";
import menu2 from "./components/tabItems/menu2.vue";
import menu3 from "./components/tabItems/menu3.vue";

export default {
  name: "App",
  components: {
    // GreetingUser,
    // ProductList,
    // DetailVue,
    // CompLevel1,
    menu1,
    menu2,
    menu3,
  },
  provide() {
    return {
      name: this.username,
    };
  },
  data() {
    return {
      username: "bada",
      actionTab: "menu1",
      // displayDetail: false,
      // products: [
      //   {
      //     id: 0,
      //     name: "TV",
      //     price: 500000,
      //     company: "LG",
      //   },
      //   {
      //     id: 1,
      //     name: "Moniter",
      //     price: 40000,
      //     company: "Samsung",
      //   },
      //   {
      //     id: 2,
      //     name: "Iphone",
      //     price: 70000,
      //     company: "Apple",
      //   },
      // ],
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
