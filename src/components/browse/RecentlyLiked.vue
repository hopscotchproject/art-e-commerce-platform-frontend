<template>
  <div class="py-4">
    <div class="m-4 flex">
      <router-link to="/browse" class="w-1/6">
        <i class="fas fa-chevron-left self-center"/>
      </router-link>
      <span class="w-5/6">Recently Liked</span>
    </div>
    <div class="flex flex-wrap">
      <span
        class="w-1/3"
        v-for="liked in recentlyLiked"
        v-bind:key="liked.imageUrl + Math.random()"
      >
        <img :src="liked.imageUrl"/>
      </span>
    </div>
    <div class="border-b border-gray-400 mx-4"/>
  </div>
</template>

<script>
import stubApi from '../../api/StubApi'

export default {
  name: 'RecentlyLiked',
  data: () => ({
    recentlyLiked: []
  }),
  methods: {
    loadRecentlyLiked() {
      return stubApi.getRecentLiked().then(data => {
        this.recentlyLiked = [...this.recentlyLiked, ...data]
      })
    },
    scrollBottom() {
      if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
        this.loadRecentlyLiked()
      }
    }
  },
  mounted() {
    this.loadRecentlyLiked()
    window.addEventListener('scroll', this.scrollBottom)
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollBottom)
  }
}
</script>