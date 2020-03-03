<template>
  <div class="py-4">
    <div class="px-4">Recent Liked</div>
    <div class="flex flex-no-wrap overflow-x-auto">
      <span
        class="flex-shrink-0 m-4"
        v-for="liked in recentLiked"
        v-bind:key="liked.imageUrl + liked.title"
      >
        <img :src="liked.imageUrl" class="inline"/>
        <div class="text-center">{{liked.title}}</div>
      </span>
    </div>
    <div class="border-b border-gray-400 mx-4"/>
  </div>
</template>

<script>
import stubApi from '../../api/StubApi'

export default {
  name: 'RecentLiked',
  data: () => ({
    recentLiked: []
  }),
  mounted() {
    stubApi.getRecentLiked().then(data => {
      this.recentLiked = [...this.recentLiked, ...data]
    })
  }
}
</script>