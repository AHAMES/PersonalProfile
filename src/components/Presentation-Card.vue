<template>
  <div id="PresentationCard">
    <img :src="myPicture" class="profilePic" loading="lazy" />
    <p v-html="aboutMe">{{ aboutMe }}</p>
  </div>
</template>

<script lang="ts">
export default {
  data: function() {
    return {
      aboutMe: `My name is Ahmed ElSabbagh, I am 23 years old. </br>
         I have graduated from the British University in Egypt (BUE) as a Computer Science major. </br>
        I have built this web resume in order to  practice my skills with Javascript, especially using Vue framework.</br>
        I worked in the BUE as a teaching assitant for operating systems and internet programming, and as a .NET Backend developer for the on-campus development unit.</br>
        I have plenty of experience in C#, Javascript, Python and Java. I am very familiar with data analytics and cloud development.</br>
        <b style="color:green;">View the other tabs above for more details.</b>`,
      myPicture: "https://i.imgur.com/Q9dtEHD.jpg?1"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profilePic {
  border-radius: 50%;
  margin-right: 1em;
  width: 15em;
  height: 15em;
}

#PresentationCard {
  border: green;

  border-style: solid;
  margin-top: 1em;
  color: black;
  font-size: 1em;
  display: flex;
  justify-content: space-evenly;
  padding-top: 1em;
  padding-left: 1em;
  padding-right: 0.5em;
  padding-bottom: 1em;
}

@media only screen and (max-width: 600px) {
  #PresentationCard {
    display: flex;
    flex-direction: column;
  }
  .profilePic {
    width: 20em;
    height: 20em;
    margin-right: 0;
  }
}
</style>
