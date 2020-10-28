<template>
  <div class="home">
    <Profiler />
    <Profiler />
    <Profiler v-bind:data="profile" />
  </div>
</template>

<script>

import Profiler from '@/components/Profiler'

export default {
  name: 'Home',
  data: function() {
    return {
      profile: {
        avatar: 'https://avatars0.githubusercontent.com/u/26781089?s=460&u=300e1007b05ddb76e3daa38b22ef1d92dbbd9b68&v=4',
        name: 'Macário, Juan',
        desc: 'github.com/crashunix',
        age: 20,
        occupation: 'Front-end Developer',
        income: 5
      },
    }
  },
  components: {
    Profiler
  }
}
</script>
