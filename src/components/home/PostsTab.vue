<template>
  <div class="flex flex-wrap">
    <span
      v-for="post in posts"
      v-bind:key="post.imageUrl + Math.random()"
      class="w-1/3"
    >
      <img :src="post.imageUrl"/>
    </span>
  </div>
</template>


<script>
import stubApi from '../../api/StubApi'

export default {
  name: 'PostsTab',
  data: () => ({
    posts: []
  }),
  mounted() {
    stubApi.getUserPosts(10).then(data => {
      this.posts = data
    })
  }
}
</script>