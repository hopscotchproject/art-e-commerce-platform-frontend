<template>
  <locked>
    <div slot="locked" class="flex justify-around my-24">
      <div class="p-8 shadow rounded">
        <i class="fas fa-lock"></i>
        See User's Favorites For $10
      </div>
    </div>
    <div slot="unlocked">
      <div class="m-2 relative w-1/3">
        <select 
          class="block w-full appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          v-model="selected"
        >
          <option>all</option>
          <option>albums</option>
          <option>artworks</option>
          <option>events</option>
          <option>posts</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
      <div class="flex flex-wrap">
        <span
          v-for="fav in showingFavs"
          v-bind:key="fav.imageUrl + Math.random()"
          class="w-1/3"
        >
          <img :src="fav.imageUrl"/>
        </span>
      </div>
    </div>
  </locked>
</template>

<script>
import stubApi from '../../api/StubApi'
import Locked from '../shared/Locked'

export default {
  name: 'FavoritesTab',
  components: {
    locked: Locked
  },
  data: () => ({
    selected: 'all',
    posts: [],
    events: [],
    albums: [],
    artworks: []
  }),
  computed: {
    showingFavs() {
      if (this.selected === 'all') {
        return [...this.posts, ...this.events, ...this.albums, ...this.artworks]
      } else {
        return this.$data[this.selected]
      }
    }
  },
  mounted() {
    stubApi.getUserFavorites().then(({posts, events, albums, artworks}) => {
      this.posts = posts
      this.events = events
      this.albums = albums
      this.artworks = artworks
    })
  }
}
</script>