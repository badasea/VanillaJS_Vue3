<template>
  <div>
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
