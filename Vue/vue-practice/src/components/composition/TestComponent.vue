<template>
  <div>
    <!-- <h2>{{ username }}</h2>
    <h2>{{ age }}</h2> -->
    <!-- <h2>{{ isHandsom }}</h2> -->
    <h2>{{ name }}</h2>
    <button @click="changeName">ChangeUserName</button>
    <h2>제품명: {{ itemName }}, 가격 {{ itemPrice }}</h2>
    <button @click="changeProduct">제품 바꾸기</button>
    <div>
      <input type="text" v-model="name" />
    </div>
  </div>
</template>

<script>
// import { reactive, toRefs } from "vue";
import { ref, reactive, toRefs } from "vue";

export default {
  name: "TestComponent",
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
