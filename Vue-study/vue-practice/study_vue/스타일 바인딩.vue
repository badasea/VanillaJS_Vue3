<template>
  <div>
    <!-- 스타일 바인딩 -->
    <h1>Hello Vue!</h1>
    <h2 class="line-through">line-through</h2>
    <h2 v-bind:class="textDecoration" class="text-red">line-through</h2>
    <h2 :class="isDone === true ? 'line-through' : 'highlight'">
      line-through
    </h2>
    <h2
      :class="{ highlight: isDone === false, 'text-red': username === 'bada' }"
    >
      Object형태의 동적 클래스
    </h2>
    <h2
      :class="[
        isDone === true ? 'line-through' : 'highlight',
        username === 'bada' ? 'text-red' : 'text-green',
      ]"
    >
      Array 형태의 동적 클래스 부여
    </h2>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      dynamicId: "content",
      url: "https://naver.com",
      image: {
        src: "https://placeimg.com/100/100/any",
        alt: "random image",
      },
      inputType: "color",
      pStyle: "color: red; font-size: 36px",
      isDone: false,
      textDecoration: "line-through",
      username: "bada",
      year: 2021,
      user: {
        name: "bada",
        job: "programmer",
        age: 100,
      },
      button: "<button>Click</button>",
    };
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
