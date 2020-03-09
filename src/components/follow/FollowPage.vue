<template>
  <div>
    <div class="flex mb-2 shadow">
      <router-link
        to="/follow/following"
        :class="`w-1/2 text-center mx-4 py-4 font-bold ${tabStyle('following')}`"
      >
        Following
      </router-link>
      <router-link
        to="/follow/trending"
        :class="`w-1/2 text-center mx-4 py-4 font-bold ${tabStyle('trending')}`"
      >
        Trending
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'FollowPage',
  methods: {
    tabStyle(tab) {
      return this.$route.path.split('/')[2] === tab ? 'border-b-2 border-orange-400' : ''
    } 
  }
}
</script>