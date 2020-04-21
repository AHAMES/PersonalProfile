<template>
  <div id="education">
    <h3>Education</h3>
    <div v-html="bachelor">{{bachelor}}</div>
    <hr />
    <h3>My courses</h3>

    <table class="bigTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Provider</th>
          <th>Completion</th>
        </tr>
      </thead>
      <tbody v-for="course in courses" :key="course.id">
        <tr>
          <td>{{course.name}}</td>
          <td>{{course.type}}</td>
          <td>{{course.Providers}}</td>
          <td>{{course.YearOfCompletion}}</td>
        </tr>
      </tbody>
    </table>
    <div class="smallTable" v-for="course in courses" :key="course.id">
      <p>
        <b>Course Name:</b>
        <br />
        <ul><li>{{course.name}}</li></ul>
      </p>
      <p>
        <b>Course Type:</b>
        <br />
        <ul><li>{{course.type}}</li></ul>
      </p>
      <p>
        <b>Provider:</b>
        <br />
        <ul><li>{{course.Providers}}</li></ul>
      </p>
      <p>
        <b>Completion:</b>
        <br />
        <ul><li>{{course.YearOfCompletion}}</li></ul>
      </p>

      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: "Education",
  data: function() {
    return {
      courses: this.$store.state.courses,
      bachelor: `<b>Bachelor Degree of Computer Science, the British University In Egypt with London South Bank University GPA 4.0, Honors with distinction  </b>
     
      `
    };
  }
};
</script>

<style>
#education {
  border: green;
  border-style: solid;
}
.smallTable {
  display: none;
  text-align: left;
}
hr {
    color: green;
    border: 2px solid green;
  }
@media only screen and (max-width: 600px) {
  #education {
    border-style: none;
  }
  .bigTable {
    display: none;
  }
  .smallTable {
    display: block;
  }
  
}
</style>