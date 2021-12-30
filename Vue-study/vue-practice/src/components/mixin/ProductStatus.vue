<template>
  <div>
    <h2>전체 금액 : {{ totalMoney }}</h2>
    <button @click="addMoney(100)">100</button>
    <button @click="addMoney(200)">200</button>
    <button @click="addMoney(300)">300</button>
    <button @click="addMoney(400)">400</button>
  </div>
</template>

<script>
// import moneyMixin from "../../mixins/moneyMixins";
import useMoney from "../../composables/useMoney";

export default {
  name: "productstatus",
  srtup() {
    const { addMoney, totalMoney } = useMoney();
    return {
      addMoney,
      totalMoney,
    };
  },
  // mixins: [moneyMixin],

  // components: {},
  // data() {
  //   return {};
  // },
  // methods: {},
};
</script>

<style></style>
