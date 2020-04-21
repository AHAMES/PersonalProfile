<template>
  <div id="achievements-card">
    <div v-for="achievement in achievements" :key="achievement.id">
      <div>
        <h5 class="left">{{achievement.title}}</h5>
        <b class="right">{{achievement.year}}</b>
      </div>
      <div>
        <ul>
          <li v-for="detail in achievement.details" :key="detail">{{detail}}</li>
        </ul>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "achievements-card",
  props: ["achievements"]
};
</script>

<style scoped>
.left {
  text-align: left;
}
.right {
  text-align: right;
}
.left,
.right {
  display: inline-block;
  width: 50%;
}
li {
  text-align: left;
}
hr {
  color: green;
  border: 2px solid green;
}
</style>