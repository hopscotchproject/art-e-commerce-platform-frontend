<template>
  <div class="h-92vh overflow-hidden flex flex-col justify-around">
    <div class="flex justify-around text-2xl">
      <button>
        <i class="fas fa-filter text-orange-400 border-2 border-gray-200 rounded-full h-12 w-12 flex items-center justify-center"/>
      </button>
      <span/>
      <span/>
      <router-link to="/recently-liked">
        <button>
          <i class="far fa-bookmark text-blue-400 border-2 border-gray-200 rounded-full h-12 w-12 flex items-center justify-center"/>
        </button>
      </router-link>
    </div>
    <!-- Swipe section -->
    <div v-if="pieces.length" class="flex flex-col justify-around">
      <div class="flex justify-center">
        <router-link :to="`/detail/${currentPiece.id}`" class="object-contain">
          <img :src="currentPiece.imageUrl" class="object-contain w-full h-50vh"/>
        </router-link>
      </div>
      <div class="text-center">
        <div>
          <i class="fas fa-heart text-green-400"/>
          <span>{{currentPiece.roughLikes}}k</span>
        </div>
        <div>{{`Title: ${currentPiece.title}`}}</div>
        <div>{{`Artist: ${currentPiece.artist}`}}</div>
        <!-- <div>{{`Price: ${currentPiece.priceUnit} ${currentPiece.price}`}}</div> -->
      </div>
      <div class="flex justify-around">
        <button @click="next">
          <i class="fas fa-times text-3xl text-red-400 border-8 border-gray-200 rounded-full h-16 w-16 flex items-center justify-center"/>
        </button>
        <button @click="previous">
          <i class="fas fa-undo text-2xl text-yellow-400 border-8 border-gray-200 rounded-full h-16 w-16 flex items-center justify-center"/>
        </button>
        <button @click="next">
          <i class="fas fa-heart text-2xl text-green-400 border-8 border-gray-200 rounded-full h-16 w-16 flex items-center justify-center"/>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import stubApi from '../../api/StubApi'

export default {
  name: 'BrowsePage',
  data: () => ({
    currentIndex: 0, // index
    pieces: []
  }),
  computed: {
    currentPiece: function() {
      return this.pieces[this.currentIndex]
    }
  },
  methods: {
    next() {
      const conditionalLoadPromise = this.currentIndex === this.pieces.length - 1 ?
        this.loadNext() : Promise.resolve()
      conditionalLoadPromise.then(() => {
        this.currentIndex += 1
      })
    },
    previous() {
      if (this.currentIndex > 0) {
        this.currentIndex -= 1;
      }
    },
    loadNext() {
      return stubApi.getNext().then(data => {
        this.pieces = [...this.pieces, ...data]
        return Promise.resolve()
      })
    }
  },
  mounted() {
    this.loadNext()
  }
}
</script>