<template>
  <div>
    <!-- Filter and Sort buttons -->
    <div class="flex justify-around m-4">
      <button class="border border-gray-600 p-2 rounded bg-gray-200">
        <i class="fas fa-filter"></i>
        <span>{{`Filter: None`}}</span>
      </button>
      <button class="border border-gray-600 p-2 rounded bg-gray-200">
        <i class="fas fa-sort-amount-up-alt"></i>
        <span>{{`Sort By: Popularity`}}</span>
      </button>
    </div>
    <!-- Featured artist -->
    <div v-if="featuredArtist" class="mx-1 mb-2 clearfix">
      <div class="m-2">
        <span class="text-lg font-bold">Featured Artist</span>
        <span class="float-right underline self-center mr-4">Read More</span>
      </div>
      <div>
        <span class="mr-2 float-left">
          <img :src="featuredArtist.imageUrl"/>
          <div class="text-center font-bold">{{featuredArtist.name}}</div>
        </span>
        <p class="text-sm">{{featuredArtist.introduction}}</p>
      </div>
    </div>
    <hr/>
    <!-- Artists -->
    <div class="mt-4 flex flex-wrap">
      <span
        v-for="artist in artists"
        v-bind:key="artist.name + Math.random()"
        class="w-1/3 px-1 my-2"
      >
        <img :src="artist.imageUrl"/>
        <div class="text-center text-sm">{{artist.name}}</div>
      </span>
    </div>
  </div>
</template>

<script>
import stubApi from '../../api/StubApi'
export default {
  name: 'StarArtistTab',
  data: () => ({
    artists: [],
    featuredArtist: null
  }),
  mounted() {
    stubApi.getArtists().then(data => {
      this.artists = data
    })
    stubApi.getFeaturedArtist().then(data => {
      this.featuredArtist = data
    })
  }
}
</script>