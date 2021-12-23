<template>
  <div>
    <!-- 데이터 바인딩 -->
    <!-- <h1>Hello {{ username }}!</h1>
    <h1 v-text="username"></h1>
    <h1>안녕하세요 저는 {{ user.name }} 입니다.</h1>
    <h1>저의 직업은 {{ user.job }}입니다.</h1>
    <h1>그리고 저는 올해 {{ user.age }}살 입니다.</h1>
    <h1 v-html="button"></h1> -->

    <!-- 스타일 바인딩 -->
    <!-- <h1>Hello Vue!</h1>
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
    </h2> -->

    <!-- 클래스 바인딩 -->
    <!-- <h1>Hello Vue!</h1>
    <h1 id="title">Hello Title</h1>
    <h1 v-bind:id="dynamicId">Hello Title</h1>
    <a v-bind:href="url">naver</a>
    <img v-bind:src="image.src" v-bind:alt="image.alt" />
    <input v-bind:type="inputType" />
    <h1 v-bind:style="pStyle">Hello Title</h1> -->

    <!-- 조건부 랜더링 -->
    <h1>Hello Vue!</h1>
    <h2 v-if="showName">My name is {{ user.name }}</h2>
    <h2 v-else>이름을 보여줄 수 없습니다.</h2>

    <h2 v-if="user.age > 20">당신은 성인입니다.</h2>
    <h2 v-else-if="user.age < 20 && user.age > 14">당신은 청소년입니다.</h2>
    <h2 v-else>당신은 어린이 입니다..</h2>

    <h2 v-if="!showName">{{ user.name }} IF</h2>
    <h2 v-show="!showName">{{ user.name }} Show</h2>
    <ul>
      <template v-if="question === 'frontend'">
        <li>HTML은 재미있나요?</li>
        <li>CSS은 재미있나요?</li>
        <li>JavaScript은 재미있나요?</li>
      </template>
      <template v-else>
        <li>JAVA은 재미있나요?</li>
        <li>Python은 재미있나요?</li>
        <li>C#은 재미있나요?</li>
      </template>
    </ul>
    <!-- <h1 v-once v-text="user.name"></h1>
    <h1 v-text="user.name"></h1>
    <input type="text" v-model="user.name" /> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      question: "frontend",
      showName: true,
      user: {
        name: "bada",
        age: 100,
        job: "programmer",
      },
    };
  },
  // data() {
  //   return {
  //     dynamicId: "content",
  //     url: "https://naver.com",
  //     image: {
  //       src: "https://placeimg.com/100/100/any",
  //       alt: "random image",
  //     },
  //     inputType: "color",
  //     pStyle: "color: red; font-size: 36px",
  //     isDone: false,
  //     textDecoration: "line-through",
  //     username: "bada",
  //     year: 2021,
  //     user: {
  //       name: "bada",
  //       job: "programmer",
  //       age: 100,
  //     },
  //     button: "<button>Click</button>",
  //   };
  // },
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
