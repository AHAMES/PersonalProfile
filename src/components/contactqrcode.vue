<template>
  <div id="contactqrcode">
    <h5>Scan this code for contacts</h5>
    <VueQrcode :value="contactsData" :scale="scale" />
  </div>
</template>

<script>
import VueQrcode from "vue-qrcode";
import store from "../store/index";
export default {
  data: function() {
    return {
      scale: 2.3,
    };
  },
  components: {
    VueQrcode,
  },
  computed: {
    contactsData() {
      return this.$store.getters.QRCodeData;
    },
  },
};
</script>

<style>
h5 {
  color: green;
}
</style>
