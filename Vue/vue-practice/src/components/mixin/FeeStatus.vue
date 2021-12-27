<template>
  <div>
    <h2>합산된 요금 : {{ totalMoney }}</h2>
    <button @click="addMoney(50)">50</button>
    <button @click="addMoney(100)">100</button>
    <button @click="addMoney(150)">150</button>
    <button @click="addMoney(200)">200</button>
  </div>
</template>

<script>
import moneyMixin from "../../mixins/moneyMixins";
export default {
  name: "feestatus",
  mixins: [moneyMixin],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
