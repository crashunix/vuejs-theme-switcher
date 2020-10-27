<template>
  <div v-bind:class="theme">
    <Header />
    <div class="container mx-auto">
      <router-view />
    </div>
  </div>
</template>

<script>

import { mapGetters } from "vuex";

import Header from "@/components/base/Header.vue";

export default {
  name: "App",
  data: function () {},
  computed: {
    ...mapGetters(["theme"])
  },
  components: {
    Header,
  },
};
</script>