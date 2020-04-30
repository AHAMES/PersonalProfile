<template>
  <div class="about">
    <h1>
      Ahmed
      <span>ElSabbagh</span>
    </h1>
    <card />
    <ContactsQRCODEVue />
    <h5>
      <router-link to="/contacts">Or Click here</router-link>
    </h5>
  </div>
</template>

<script>
import store from "../store/index";
import presentationCard from "../components/Presentation-Card";
import ContactsQRCODEVue from "../components/contactqrcode";
export default {
  name: "about",
  data: function() {
    return {};
  },
  methods: {},
  components: { card: presentationCard, ContactsQRCODEVue },
};
</script>

<style scoped>
h1 > span {
  color: green;
}
h5 > a {
  text-decoration: none;
  color: green;
}
</style>
