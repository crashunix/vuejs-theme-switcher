<template>
  <div class="card">text</div>
</template>

<script>
export default {
  name: "Card",
  data: function () {},
};
</script>

<style lang="scss">
.card {
    @apply shadow-md inline-block p-5 rounded-md;
}
.dark-theme .card {
    @apply bg-gray-900 text-white;
}
.light-theme .card {
    @apply bg-white text-blue-500;
}
</style>