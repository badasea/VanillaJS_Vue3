<template>
  <div>
    <h2>Todo List</h2>
    <button @click="getTodoList">Request Todo</button>
    <ul>
      <li v-for="todo in todoList" :key="todo.id">{{ todo.title }}</li>
    </ul>
    <div>
      <label for="todo">할일</label>
      <input type="text" v-model="todoItem.title" />
      <button @click="createtodo">전송</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "todo",
  data() {
    return {
      todoList: [],
      todoItem: {
        title: "",
        completed: false,
      },
    };
  },
  methods: {
    createtodo() {
      const url = "https://jsonplaceholder.typicode.com/todos";
      axios.post(url, this.todoItem).then(function (res) {
        //console.log("성공");
        console.log(res);
        //self.todoList = res.data;
      });
    },
    getTodoList() {
      let self = this;
      const url = "https://jsonplaceholder.typicode.com/todos";
      axios.get(url).then(function (res) {
        //console.log("성공");
        //console.log(res);
        self.todoList = res.data;
      });
    },
  },
};
</script>

<style></style>
