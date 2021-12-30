<template>
  <div>
    <h3>{{ fullname }}</h3>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "childcomp",
  props: ["firstname", "lastname"],
  setup(props) {
    const fullname = computed(() => {
      return "${props.firstname} ${props.lastname}";
    });
    return {
      fullname,
    };
  },
};
</script>

<style></style>
