<template>
  <div>
    <div class="flex justify-around m-4">
      <button class="border border-gray-600 p-2 rounded bg-gray-200">
        <i class="fas fa-filter"></i>
        <span>{{`Filter: None`}}</span>
      </button>
      <button class="border border-gray-600 p-2 rounded bg-gray-200">
        <i class="fas fa-sort-amount-up-alt"></i>
        <span>{{`Sort By: Relevance`}}</span>
      </button>
    </div>
    <div
      v-for="collection in collections"
      v-bind:key="collection.name + Math.random()"
    >
      <div class="m-2 flex justify-between">
        <span class="flex flex-col w-1/2">
          <span class="font-bold">{{collection.name}}</span>
          <span>{{`${collection.artist}${collection.gallery ? " with " + collection.gallery : ""}`}}</span>
        </span>
        <span class="text-sm underline">
          <span>Collection Details<span>
          <i class="fas fa-chevron-right self-center ml-2"></i>
        </span>
      </div>
      <div class="flex flex-no-wrap overflow-x-auto">
        <span
          v-for="piece in collection.pieces"
          v-bind:key="piece.title + Math.random()"
          class="flex-shrink-0 mx-2 mb-2"
        >
          <img :src="piece.imageUrl"/>
          <div class="text-center text-sm">{{piece.title}}</div>
        </span>
      </div>
      <hr/>
    </div>
  </div>
</template>

<script>
import stubApi from '../../api/StubApi'

export default {
  name: 'CollectionTab',
  data: () => ({
    collections: []
  }),
  mounted() {
    stubApi.getCollections().then(data => {
      this.collections = data
    })
  }
}
</script>