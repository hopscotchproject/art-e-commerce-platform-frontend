<template>
  <div>
    <div class="mx-4 my-2 text-xl">
      <router-link to="/browse">
        <i class="fas fa-chevron-left"/>
      </router-link>
    </div>
    <div v-if="!!work">
      <div class="flex">
        <div class="w-2/12"/>
        <div class="rounded w-8/12">
          <img :src="work.imageUrl"/>
        </div>
        <div class="w-2/12 flex flex-col justify-around items-center">
          <div>
            <i class="fas fa-heart text-xl text-green-400"/>
            <div class="text-xs">1.5K</div>
          </div>
          <div>
            <i class="fas fa-comment text-xl text-gray-400"/>
            <div class="text-xs">0.6K</div>
          </div>
          <i class="fas fa-share-square text-xl text-gray-400"></i>
        </div>
      </div>
      <div class="mt-4 pr-4 flex justify-end">
        <locked>
          <button slot="locked" class="border border-gray-400 rounded px-4 py-1 font-bold bg-gray-100 text-sm">Download HD image for $1</button>
          <button slot="unlocked" class="border border-gray-400 rounded px-4 py-1 font-bold bg-gray-100 text-sm">Download</button> 
        </locked>
      </div>
      <div class="flex justify-around mt-6">
        <button>
          <i class="fas fa-times text-3xl text-red-400 border-8 border-gray-200 rounded-full h-16 w-16 flex items-center justify-center"/>
        </button>
        <button>
          <i class="fas fa-heart text-2xl text-green-400 border-8 border-gray-200 rounded-full h-16 w-16 flex items-center justify-center"/>
        </button>
      </div>
      <hr class="mx-4 mt-6"/>
      <div class="mx-4 mt-4 flex justify-around">
        <div>
          <span class="underline">{{work.artist}}</span>
          <i class="fas fa-user-plus ml-2 text-gray-400"></i>
          <br/>
          <span v-if="!!work.gallery" class="text-sm font-semibold underline">{{work.gallery}}</span>
        </div>
        <div class="text-sm">
          <div>{{work.title}}</div>
          <div>{{work.medium}}</div>
          <div>{{work.size}}</div>
        </div>
      </div>
      <hr class="mx-4 mt-6"/>
      <div class="mx-4 mt-4">
        <div class="text-center">
          <locked>
            <span slot="locked">
              <i class="fas fa-lock"></i>
              See Price for $1
            </span>
            <span slot="unlocked">{{`${work.priceUnit} ${work.price}`}}</span>
          </locked>
        </div>
        <div class="flex justify-around items-center mt-4">
          <button class="bg-red-400 rounded px-4 py-2 text-white">Buy Now</button>
          <button class="bg-red-400 rounded px-4 py-2 text-white">Make Offer</button>
        </div>
      </div>
      <hr class="mx-4 mt-6"/>
      <div class="mx-4 mt-4">
        <div class="font-bold">About the work</div>
        <p class="text-sm">
          {{work['about the work']}}
        </p>
      </div>
      <hr class="mx-4 mt-6"/>
      <div class="mx-4 mt-4">
        <div class="font-bold">About the artist</div>
        <p class="text-sm">
          {{work['about the artist']}}
        </p>
      </div>
      <div v-if="!!work.gallery">
        <hr class="mx-4 mt-6"/>
        <div class="mx-4 mt-4">
          <div class="font-bold">About the Gallery</div>
          <p class="text-sm">
            {{work['about the gallery']}}
          </p>
        </div>
      </div>
      <hr class="mx-4 mt-6"/>
      <div class="mx-4 mt-4">
        <div class="font-bold">Comments</div>
        <p class="text-sm">
          __some comments here__
        </p>
      </div>
      <hr class="mx-4 mt-6"/>
      <div v-if="!!otherFeaturedWorks.length">
        <div class="font-bold mx-4 mt-4">Other featured Works</div>
        <div class="flex flex-no-wrap overflow-x-auto">
          <span
            class="flex-shrink-0 m-4"
            v-for="featured in otherFeaturedWorks"
            v-bind:key="featured.imageUrl + featured.title"
          >
            <img :src="featured.imageUrl" class="h-30vh object-contain"/>
            <div class="text-center">{{featured.title}}</div>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import stubApi from '../../api/StubApi'
import Locked from '../shared/Locked'

export default {
  name: 'DetailPage',
  components: {
    'locked': Locked
  },
  data: () => ({
    work: null,
    otherFeaturedWorks: []
  }),
  mounted() {
    stubApi.getArtwork(this.$route.params.id).then(work => {
      this.work = work
      return work
    }).then(stubApi.getOtherFeaturedWorks).then(data => {
      this.otherFeaturedWorks = data
    })
  }
}
</script>