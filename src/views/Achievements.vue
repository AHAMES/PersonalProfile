<template>
  <div id="achievements">
    <h3>My Achievements</h3>
    <card :achievements="achievements" />
  </div>
</template>

<script>
import achievements from "../components/achievements-Card";
export default {
  name: "achievment",
  components: { card: achievements },
  data: function() {
    return {
      achievements: this.$store.state.achievements
    };
  }
};
</script>

<style>
#achievements {
  border: green;
  border-style: solid;
}
</style>