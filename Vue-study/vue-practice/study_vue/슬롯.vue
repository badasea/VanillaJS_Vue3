<template>
  <div>
    <!-- 슬롯 -->
    <h1>Hello Vue!!</h1>
    <CardView> Hello slot!!! </CardView>
    <CardView>
      <img src="https://placeimg.com/100/200/any" alt="random" />
    </CardView>
    <CardView>
      <ul>
        <li>짬뽕</li>
        <li>짜장면</li>
      </ul></CardView
    >
    <card-view></card-view>
    <card-view>
      <template v-slot:header>
        <div>
          <h2>Random Image</h2>
        </div>
      </template>
      <template v-slot:body>
        <div>
          <img src="https://placeimg.com/100/200/any" alt="random" />
        </div>
      </template>
      <template v-slot:footer>
        <div>
          <small>thank you</small>
        </div>
      </template>
    </card-view>
  </div>
</template>

<script>
import CardView from "./components/slot/CardView.vue";

export default {
  name: "App",
  components: {
    CardView,
  },
  provide() {
    return {};
  },
  data() {
    return {
      username: "bada",
    };
  },
  methods: {},
  directives: {},
  computed: {},
  watch: {},
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
