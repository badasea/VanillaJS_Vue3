<template>
  <div>
    <header class="header">
      <h2>Weather Application</h2>
      <p>{{ username }}님 반갑습니다.</p>
    </header>
  </div>
</template>

<script>
export default {
  name: "HeaderDisplay",
};
</script>

<style scoped>
.header {
  background: linear-gradient(5deg, #59c173, #a17fe0, #5d26c1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
}
.header h2 {
  color: #fff;
}
.header p {
  font-size: 12px;
  color: #fff;
}
</style>
