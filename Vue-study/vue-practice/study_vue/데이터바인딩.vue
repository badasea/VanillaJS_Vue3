<template>
  <div>
    <!-- 데이터 바인딩 -->
    <h1>Hello {{ username }}!</h1>
    <h1 v-text="username"></h1>
    <h1>안녕하세요 저는 {{ user.name }} 입니다.</h1>
    <h1>저의 직업은 {{ user.job }}입니다.</h1>
    <h1>그리고 저는 올해 {{ user.age }}살 입니다.</h1>
    <h1 v-html="button"></h1>
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
