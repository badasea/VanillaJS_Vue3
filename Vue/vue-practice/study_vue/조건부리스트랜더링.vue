<template>
  <div>
    <!-- 조건부리스트랜더링 -->
    <h1>Hello Vue</h1>
    <ul>
      <li
        v-for="(city, index) in cities.filter((c) => c.province === '경상도')"
        :key="index"
      >
        {{ city.name }}
      </li>
    </ul>
    <ul>
      <template v-for="(city, index) in cities" :key="index">
        <li v-if="city.province === '경상도'">{{ city.name }}</li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      cities: [
        { name: "서울", province: "서울" },
        { name: "대전", province: "충청도" },
        { name: "대구", province: "경상도" },
        { name: "부산", province: "경상도" },
        { name: "인천", province: "인천" },
        { name: "광주", province: "전라도" },
      ],
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
