<template>
  <div id="Contactme">
    <div class="details">
      <h3>Detailed Contact</h3>
      <div v-for="detail in contactData" :key="detail.id">
        <a v-if="detail.title == 'LinkedIn'" :href="detail.value">
          <i class="fa fa-linkedin-square icons"></i>
          {{ detail.value }}
        </a>
        <a v-else-if="detail.title == 'GitHub'" :href="detail.value">
          <i class="fa fa-github-square icons"></i>
          {{ detail.value }}
        </a>

        <a v-else-if="detail.title == 'Email'" :href="detail.value">
          <i class="fa fa-envelope-square icons"></i>
          {{ detail.value }}
        </a>

        <div v-else-if="detail.title == 'Wuzzuf'">
          <b>{{ detail.title }} :</b>
          <a :href="detail.value"> {{ detail.value }} </a>
        </div>
        <div v-else-if="detail.title == 'Phone'" href="#">
          <i class="fa fa-phone-square icons"></i>
          {{ detail.value }}
        </div>
        <div v-else>
          <b>{{ detail.title }} :</b> {{ detail.value }}
        </div>
        <hr />
      </div>
    </div>
    <ContactsQRCODEVue />
  </div>
</template>

<script>
import ContactsQRCODEVue from "../components/contactqrcode";
import store from "../store/index";

export default {
  data: function() {
    return {
      contactData: this.$store.state.contactsData,
    };
  },
  components: {
    ContactsQRCODEVue,
  },
};
</script>

<style>
.icons {
  font-size: 24px;
  color: green;
}
.details {
  border: green;
  border-style: solid;
  text-align: left;
  padding: 1em;
}
h3 {
  text-align: center;
}
h5 {
  color: green;
}
</style>
