<template>
  <div class="profiler">
    <div class="flex relative">
      <div
        class="w-8 h-8 bg-blue-400 absolute flex items-center justify-center"
      >
        <a href="https://github.com/crashunix" target="_blank">
          <img
            class="w-5 h-5"
            src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png"
            alt="github"
          />
        </a>
      </div>
      <div class="left">
        <div class="picture p-1 bg-blue-400">
          <img
            class="w-24 h-24 object-cover"
            v-bind:src="profile.avatar || 'https://vignette.wikia.nocookie.net/watchdogs/images/6/69/Dedsec_Introduction.jpg/revision/latest/top-crop/width/300/height/300?cb=20160808122833&path-prefix=pt-br'"
            alt="Juan Macário"
          />
        </div>
        <div class="flex flex-col">
          <div class="w-4/5 h-3 bg-blue-400 mt-1 flex items-center pl-1">
            <span class="text-xs">••*•</span>
          </div>
          <div class="w-2/5 h-3 bg-blue-400"></div>
        </div>
      </div>
      <div class="flex flex-col">
        <span class="bg-white pl-1 pr-3 mb-1 ml-1 text-sm font-medium w-3/5"
          >{{profile.name || 'Unknown'}}</span
        >
        <span class="bg-white pl-2 pr-3 font-medium"
          >{{profile.desc || 'Lorem ipsum'}}</span
        >
        <span class="bg-black text-white text-xs ml-1 pl-1 w-16">Age: {{profile.age || 0}}</span>
        <span class="bg-black text-white text-xs ml-1 pl-1"
          >Occupation: {{profile.occupation || '-'}}</span
        >
        <span class="bg-black text-white text-xs ml-1 pl-1 w-2/5"
          >Income: ${{profile.income || 0}}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profiler",
  props: ['data'],
  data: function () {
    return {
      profile: this.data || {},
    }
  },
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