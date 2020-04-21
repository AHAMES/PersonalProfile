<template>
  <div class="skills">
    <h3>My Skills</h3>
    <div v-for="s in skills" :key="s.id">
      <h5>{{s.title}}</h5>
      <card :skillSet="s" />
    </div>
  </div>
</template>

<script>
import store from "../store/index";
import Skill from "../components/Skill-Card";
export default {
  name: "skills",
  components: { card: Skill },

  data: function() {
    return {
      skills: this.$store.state.skills
    };
  },
  methods: {}
};
</script>

<style scoped>
.skills {
  border: green;
  border-style: solid;
}

h5 {
  border-bottom: 5px solid green;
}
</style>