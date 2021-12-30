<template>
  <div>
    <h1>component3</h1>
    <h3>passed Data from App {{ name }}</h3>
  </div>
</template>

<script>
export default {
  name: "bada",
  inject: ["name"],
};
</script>

<style></style>
