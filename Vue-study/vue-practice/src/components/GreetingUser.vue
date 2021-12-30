<template>
  <div>
    <h2 v-bind="$attrs">Hello {{ username }}!!</h2>
    <h2>오늘이 {{ numberOfvisit }} 번째 방문입니다.</h2>
    <h2>사이트 이름은 {{ siteInfo.name }} 입니다.</h2>
  </div>
</template>

<script>
export default {
  name: "Greeting User!!",
  inheritAttrs: false,
  props: {
    // username: String,
    username: {
      type: String,
      default: "user!!",
    },
    numberOfvisit: {
      type: Number,
      default: 0,
    },
    siteInfo: {
      type: Object,
      default: () => {
        return { name: "-", teacher: "-" };
      },
    },
  },
};
</script>

<style scoped></style>
