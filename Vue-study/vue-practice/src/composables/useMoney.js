import { ref } from "vue";

function useMoney() {
  const totalMoney = ref(0);
  function addMoney(price) {
    totalMoney.value += price;
  }

  return {
    totalMoney,
    addMoney,
  };
}

export default useMoney;
