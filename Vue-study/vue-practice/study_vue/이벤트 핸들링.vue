<template>
  <div>
    <!-- 이벤트 핸들링 -->
    <h1>Hello {{ name }}</h1>
    <button v-on:click="changeName">Change name</button>
    <button v-on:mouseover="name = 'Code bada'" v-on:mouseleave="name = 'bada'">
      Change name
    </button>
    <a v-on:click="movePage" href="https://naver.com">네이버로 이동</a>
    <h2>{{ number }}</h2>
    <button v-on:click="increment(1)">숫자 1증가</button>
    <button v-on:click="decrement(1)">숫자 1감소</button>
    <button v-on:click="increment(5)">숫자 5증가</button>
    <button v-on:click="decrement(5)">숫자 5감소</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return { name: "bada", number: 0 };
  },
  methods: {
    changeName() {
      this.name = "Code Bada";
    },
    movePage(e) {
      e.preventDefault();
      const check = confirm("페이지롤 이동하시겠습니까?");
      if (check) {
        console.log("page 이동");
      } else {
        console.log("페이지 이동 x");
      }
    },
    increment(num) {
      this.number += num;
    },
    decrement(num) {
      this.number -= num;
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
