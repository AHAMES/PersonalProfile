<template>
  <div class="about">
    <h1>
      Ahmed
      <span>ElSabbagh</span>
    </h1>
    <card />
  </div>
</template>

<script>
import store from "../store/index";
import presentationCard from "../components/Presentation-Card";
export default {
  name: "about",
  data: function() {
    return {};
  },
  methods: {},
  components: { card: presentationCard }
};
</script>

<style scoped>
h1 > span {
  color: green;
}
</style>