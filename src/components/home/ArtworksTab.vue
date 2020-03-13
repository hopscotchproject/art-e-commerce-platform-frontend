<template>
  <div>
    <!-- Original art works -->
    <div class="py-4">
      <div class="flex justify-between px-4 mb-2">
        <span class="font-bold">Original Artworks</span>
        <button v-show="!!originals.length" class="border border-gray-400 rounded bg-gray-200 px-2">Filters</button>
      </div>
      <div v-if="!!originals.length" class="flex overflow-x-auto">
        <div class="relative flex-shrink-0" v-for="work in originals" v-bind:key="work.imageUrl + Math.random()">
          <div class="ribbon">
            <span v-if="work.status === 'off-market'" class="off-market font-semibold">off market</span>
            <span v-else-if="work.status === 'primary-market'" class="primary-market font-semibold">primary</span>
            <span v-else-if="work.status === 'secondary-market'" class="secondary-market font-semibold">secondary</span>
          </div>
          <img :src="work.imageUrl"/>
        </div>
      </div>
      <div v-else class="px-4">N/A</div>
    </div>
    <!-- Currently in hand -->
    <div class="pb-4">
      <div class="flex justify-between px-4 mb-2">
        <span class="font-bold">Currently In Hand</span>
      </div>
      <div class="flex overflow-x-auto">
        <div class="relative flex-shrink-0 mx-2 max-w-xs" v-for="work in currentlyInHand" v-bind:key="work.imageUrl + Math.random()">
          <div class="ribbon">
            <span v-if="work.status === 'off-market'" class="off-market font-semibold">off market</span>
            <span v-else-if="work.status === 'primary-market'" class="primary-market font-semibold">primary</span>
            <span v-else-if="work.status === 'secondary-market'" class="secondary-market font-semibold">secondary</span>
          </div>
          <img :src="work.imageUrl" class="h-48"/>
        </div>
      </div>
    </div>
    <!-- Selling/Sold -->
    <div class="pb-4">
      <div class="flex justify-between px-4 mb-2">
        <span class="font-bold">Selling/Sold</span>
      </div>
      <div class="flex overflow-x-auto">
        <div class="relative flex-shrink-0 mx-2 max-w-xs" v-for="work in sellingOrSold" v-bind:key="work.imageUrl + Math.random()">
          <div class="ribbon">
            <span v-if="work.status === 'selling'" class="selling font-semibold">selling</span>
            <span v-else-if="work.status === 'sold'" class="sold font-semibold">sold</span>
          </div>
          <img :src="work.imageUrl" class="h-48"/>
        </div>
      </div>
    </div>
    <!-- Albums -->
    <div class="pb-4 mt-4">
      <div class="flex justify-between px-4 mb-2">
        <span class="font-bold">Albums</span>
        <button class="border border-gray-400 rounded bg-gray-200 px-2">Filters</button>
      </div>
      <div
        v-for="collection in collections"
        v-bind:key="collection.name"
      >
        <div class="font-bold underline mx-2">{{collection.name}}</div>
        <div class="flex overflow-x-auto">
          <span
            v-for="url in collection.previewImageUrls"
            v-bind:key="url"
            class="flex-shrink-0"
          >
            <img :src="url" class="h-48 px-2"/>
          <span/>
        </div>
        <div class="flex justify-around">
          <span>
            click: {{collection.clicks}}
          </span>
          <span>
            comments: {{collection.comments}}
          </span>
          <span>
            favorites: {{collection.favorites}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import stubApi from '../../api/StubApi'

export default {
  name: 'ArtworksTab',
  data: () => ({
    originals: [],
    currentlyInHand: [],
    sellingOrSold: [],
    collections: [],
  }),
  mounted() {
    stubApi.getUserArtworks().then(({originals, currentlyInHand, sellingOrSold, collections}) => {
      this.originals = originals
      this.currentlyInHand = currentlyInHand
      this.sellingOrSold = sellingOrSold
      this.collections = collections
    })
  }
}
</script>

<style scoped>
.ribbon {
  position: absolute;
  right: 0;
  top: 0px;
  z-index: 1;
  overflow: hidden;
  width: 100px; 
  height: 100px;
  text-align: right;
}

/* card with ribbon */
.ribbon span {
  /* text-transform: uppercase; */
  text-align: center;
  line-height: 25px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  width: 115px;
  display: block;
  position: absolute;
  top: 20px;
  right: -25px;
}

.primary-market {
  background: #fc8181;
}

.off-market {
  background: #cbd5e0;
}

.secondary-market {
  background: #63b3ed;
}

.selling {
  background: #68d391;
}

.sold {
  background: #cbd5e0;
}
</style>