<template>
  <div>
    <!-- <h2>{{ username }}</h2>
    <h2>{{ age }}</h2> -->
    <!-- <h2>{{ isHandsom }}</h2> -->
    <!-- <h2>{{ name }}</h2>
    <button @click="chcdangeName">ChangeUserName</button>
    <h2>제품명: {{ itemName }}, 가격 {{ itemPrice }}</h2>
    <button @click="changeProduct">제품 바꾸기</button>
    <div>
      <input type="text" v-model="name" />
    </div> -->
    <h1>Hello LifeCycle</h1>
    <!-- <input type="text" v-model="name" ref="inputRef" />
    <Childcomp :firstname="Code" :lastname="bada" /> -->
    <ProductStatus />
    <FeeStatus />
    <SavingStatus />
  </div>
</template>

<script>
// import { reactive, toRefs } from "vue";
import { ref, reactive, toRefs } from "vue";
// import { onMounted } from "vue";
import FeeStatus from "../mixin/FeeStatus.vue";
import ProductStatus from "../mixin/ProductStatus.vue";
import SavingStatus from "../mixin/SavingStatus.vue";

export default {
  name: "TestComponent",
  components: { FeeStatus, ProductStatus, SavingStatus },
  methods: {},
  //   data() {
  //     return {
  //       username: "bada",
  //     };
  //   },
  //   setup() {
  //     const isHandsom = false;
  //     // const username = "bada";
  //     const state = reactive({
  //       username: "bada",
  //       age: 50,
  //     });
  //     return toRefs(state);
  //   },
  setup() {
    // let isHandsom = ref(false);
    // const state = reactive({
    //   name: "bada",
    //   age: 50,
    //   job: "programmer",
    // });

    // onMounted(() => {
    //   inputRef.value.focus();
    //   console.log("child mounted");
    // });

    const name = ref("bada");
    function changeName() {
      name.value = "code,";
    }
    const state = reactive({
      itemName: "TV",
      itemPrice: 100,
    });
    function changeProduct() {
      state.itemName = "세탁기";
      state.itemPrice = 5000;
    }
    return {
      ...toRefs(state),
      //   isHandsom,
      //   ...toRefs(state),
      name,
      changeName,
      changeProduct,
    };
  },
};
</script>

<style></style>
