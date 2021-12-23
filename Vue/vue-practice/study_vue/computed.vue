<template>
  <div>
    <!-- computed -->
    <h1>Computed</h1>
    <h2>{{ address1 }}{{ address2 }}{{ address3 }}</h2>
    <h2>{{ address }}</h2>
    <h2>
      내가 받은 점수의 합은 {{ grade.math + grade.kor + grade.eng + grade.sci }}
    </h2>
    <h2>내가 받은 점수의 합은(computed) {{ totalScore }}</h2>
    <h2>내가 받은 점수의 합은(methods) {{ getTotalScore() }}</h2>
    <input type="text" v-model="studentName" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      username: "bada",
      address1: "성남시",
      address2: "분당구",
      address3: "정자로",
      grade: {
        math: 70,
        kor: 90,
        eng: 50,
        sci: 55,
      },
    };
  },
  methods: {
    getTotalScore() {
      const { math, kor, eng, sci } = this.grade;
      return math + kor + eng + sci;
    },
  },
  directives: {},
  computed: {
    address() {
      return "${this.address1} - ${this.address2} - ${this.address3}";
    },
    totalScore() {
      const { math, kor, eng, sci } = this.grade;
      return math + kor + eng + sci;
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
</style>
