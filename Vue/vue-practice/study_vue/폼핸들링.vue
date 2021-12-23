<template>
  <div>
    <!-- 폼 핸들링 -->
    <form>
      {{ user }}
      <div>
        <label for="name">이름</label>
        <input type="text" id="name" v-model="user.name" @input="setValue" />
      </div>
      <div>
        <label for="age">나이</label>
        <input type="number" id="age" v-model="user.age" />
      </div>
      <div>
        <label for="city">사는 곳</label>
        <select id="city" v-model="user.city">
          <option value="seoul">서울</option>
          <option value="daejeon">대전</option>
          <option value="daegu">대구</option>
          <option value="busan">부산</option>
        </select>
      </div>
      <div>
        <label for="favorite-food">좋아하는 음식</label>
        <select id="favorite-food" multiple v-model="user.favorite">
          <option
            v-for="option in foodOptions"
            :value="option.code"
            :key="option.code"
          >
            {{ option.label }}
          </option>
        </select>
      </div>
      <div>
        <label for="job">직업</label>
        프로그래머<input
          type="checkbox"
          value="programmer"
          v-model="user.job"
        />
        가수<input type="checkbox" value="singer" v-model="user.job" />
        교사<input type="checkbox" value="teacher" v-model="user.job" />
      </div>
      <div>
        <label for="job">성별</label>
        남<input type="radio" value="male" v-model="user.gender" /> 여<input
          type="radio"
          value="female"
          v-model="user.gender"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      foodOptions: [
        { label: "짜장면", code: "JJ" },
        { label: "짬뽕", code: "JB" },
        { label: "탕수육", code: "TS" },
      ],
      user: {
        name: "",
        age: 0,
        city: "",
        favorite: [],
        job: [],
      },
      gender: "",
    };
  },
  methods: {
    setValue(e) {
      this.user.name = e.target.value;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
label {
  font-size: 20px;
  font-weight: bold;
  margin-right: 1rem;
}
div {
  margin-bottom: 1rem;
}
</style>
