<template>
  <div>
    <!-- 클래스 바인딩 -->
    <h1>Hello Vue!</h1>
    <h1 id="title">Hello Title</h1>
    <h1 v-bind:id="dynamicId">Hello Title</h1>
    <a v-bind:href="url">naver</a>
    <img v-bind:src="image.src" v-bind:alt="image.alt" />
    <input v-bind:type="inputType" />
    <h1 v-bind:style="pStyle">Hello Title</h1>
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
