<template>
  <div v-bind:class="theme" class="content">
    <Header />
    <div class="container mx-auto py-8">
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

<style lang="scss">
  .content {
    @apply bg-gray-200;
    &.dark-theme {
      @apply bg-gray-800;
    }
  }
</style>