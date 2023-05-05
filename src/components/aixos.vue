<template>
  <div>
    <p v-for="manu in manufacturer" :key="manu.id">
      {{ manu.id }}- {{ manu.Title }}
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      text: "test",
      manafacturer: [{ id: 1, Title: "test1" }],
    };
  },
  created() {},
  methods: {
    get() {
      axios.get("");
    },
  },
};
</script>