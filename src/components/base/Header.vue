<template>
  <div class="header">
    <div class="h-20 container mx-auto flex justify-between items-center">
      <router-link to="/" class="header__logo">Logo</router-link>
      <nav class="space-x-4 header__nav">
        <router-link to="/" class="header__nav__items">Home</router-link>
        <router-link to="/about" class="header__nav__items">About</router-link>
        <select v-model="theme" @change="handleChange">
          <option value="dark-theme">Dark</option>
          <option value="light-theme">Light</option>
        </select>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Header",
  data: function () {},
  computed: {
    ...mapGetters(["theme"]),
  },
  methods: {
    handleChange(event) {
      this.$store.commit("setTheme", event.target.value);
      localStorage.setItem("theme", event.target.value);
    },
  },
};
</script>

<style lang="scss">
.header {
  @apply shadow-md;
  .header__logo {
    @apply text-2xl;
  }
}
.dark-theme {
  .header {
    @apply bg-gray-900;
    .header__logo {
      @apply text-white;
    }
    .header__nav {
      .header__nav__items {
        @apply text-white;
      }
    }
  }
}
.light-theme {
  .header {
    @apply bg-white;
  }
}
</style>