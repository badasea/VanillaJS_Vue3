<template>
  <div>
    <!-- 매서드 -->
    <h1>Hello Vue</h1>
    <h2>5년 뒤 : {{ add(5) }}</h2>
    <h2>10년 뒤 : {{ add(10) }}</h2>
    <h2>15년 뒤 : {{ add(15) }}</h2>
    <h2>20년 뒤 : {{ add(20) }}</h2>
    <h2>25년 뒤 : {{ add(25) }}</h2>
    <h2>동갑의 10명이 있다면 나이 총 합은 {{ multiply(age) }}</h2>
    <h2>{{ getTotalSocre(100) }}</h2>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return { age: 30 };
  },
  methods: {
    add(num) {
      console.log(num);
      return this.age + num;
    },
    multiply(num1, num2 = 10) {
      return num1 * num2;
    },
    getTotalSocre(num) {
      return this.multiply(num, num);
    },
  },
};
</script>

<style>
#content {
  color: blue;
  background: pink;
}
#title {
  color: red;
  background: yellow;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.line-through {
  text-decoration: line-through;
}
.text-red {
  color: red;
}
.text-green {
  color: green;
}
.highlight {
  font-weight: bold;
  background: pink;
}
</style>
