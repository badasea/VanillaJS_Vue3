<template>
  <div>
    <!-- 리스트 랜더링 -->
    <h1>Hello Vue!</h1>
    <div>
      {{ fruits }}
    </div>
    <ul>
      <li v-for="(fruit, index) in fruits" :key="fruit">
        {{ index + 1 }}. {{ fruit }}
      </li>
    </ul>
    <h2 v-for="(value, key, index) in user" :key="key">
      {{ index }}. {{ key }} ==> {{ value }}
    </h2>
    <div v-for="(animal, index) in animals" :key="index">
      <h2>Animal ==> {{ animal.name }}</h2>
      <h3>food</h3>
      <ul>
        <li v-for="(food, index) in animal.food" :key="index">{{ food }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      fruits: ["banana", "strawberry", "apple", "melon"],
      user: {
        name: "bada",
        age: 100,
        job: "programmer",
      },
      animals: [
        { name: "monkey", size: "medium", food: ["banana", "apple"] },
        { name: "lion", size: "big", food: ["deer", "cow"] },
        { name: "rat", size: "small", food: ["cheese", "cookie"] },
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
