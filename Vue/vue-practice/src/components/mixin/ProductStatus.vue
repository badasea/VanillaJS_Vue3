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
import moneyMixin from "../../mixins/moneyMixins";

export default {
  name: "productstatus",
  mixins: [moneyMixin],

  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
