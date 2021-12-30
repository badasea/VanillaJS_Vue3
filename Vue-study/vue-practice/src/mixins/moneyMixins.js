export default {
  methods: {
    addMoney(price) {
      this.totalMoney += price;
    },
  },
  data() {
    return {
      totalMoney: 0,
    };
  },
};
