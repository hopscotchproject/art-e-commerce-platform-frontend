<template>
  <div class="flex flex-wrap">
    <img
      v-for="post in posts"
      v-bind:key="post.imageUrl + Math.random()"
      :src="post.imageUrl"
      class='w-1/3'
    />
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
    stubApi.getUserPosts(35).then(data => {
      this.posts = data
    })
  }
}
</script>