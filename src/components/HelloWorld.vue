<template>
  <div class="hello">{{ hello }}</div>
</template>

<script lang="ts">
export default {
  data: function() {
    return {
      hello: "Hello every body"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  color: black;
}
</style>
