<template>
  <div id="skill-card">
    <table>
      <thead>
        <tr>
          <th>Skill</th>
          <th>Experience</th>
          <th>Proficiency</th>
        </tr>
      </thead>
      <tbody v-for="skill in skillSet.skillList" :key="skill.id">
        <tr>
          <td>{{skill.name}}</td>
          <td>{{skill.yearsOfExperience}} Years</td>
          <td>{{skill.Proficiency}}/10</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  name: "skill-card",
  props: ["skillSet"]
};
</script>