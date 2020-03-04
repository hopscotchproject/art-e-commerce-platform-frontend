<template>
  <div>
    <div class="mx-4 my-2 text-xl">
      <router-link to="/browse">
        <i class="fas fa-chevron-left"/>
      </router-link>
    </div>
    <div class="flex">
      <div class="w-2/12"/>
      <img src="https://picsum.photos/seed/detail-page-seed/200/200" class="rounded w-8/12"/>
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
    <hr class="mx-4 mt-6"/>
    <div class="mx-4 mt-4 flex justify-around">
      <div class="underline">Tairan Shi</div>
      <div class="text-sm">
        <div>Untitled, 2020</div>
        <div>Oil on canvas</div>
        <div>48 x 48</div>
      </div>
    </div>
    <hr class="mx-4 mt-6"/>
    <div class="mx-4 mt-4">
      <div class="text-center">
        $ 18,000
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
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
    <hr class="mx-4 mt-6"/>
    <div class="mx-4 mt-4">
      <div class="font-bold">About the artist</div>
      <p class="text-sm">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
      </p>
    </div>
    <hr class="mx-4 mt-6"/>
    <div class="mx-4 mt-4">
      <div class="font-bold">Comments</div>
      <p class="text-sm">
        __some comments here__
      </p>
    </div>
    <hr class="mx-4 mt-6"/>
    <div>
      <div class="font-bold mx-4 mt-4">Other featured Works</div>
      <div class="flex flex-no-wrap overflow-x-auto">
        <span
          class="flex-shrink-0 m-4"
          v-for="featured in otherFeaturedWorks"
          v-bind:key="featured.imageUrl + featured.title"
        >
          <img :src="featured.imageUrl"/>
          <div class="text-center">{{featured.title}}</div>
        </span>
    </div>
    </div>
  </div>
</template>

<script>
import stubApi from '../../api/StubApi'

export default {
  name: 'DetailPage',
  data: () => ({
    otherFeaturedWorks: []
  }),
  mounted() {
    stubApi.getOtherFeaturedWorks().then(data => {
      this.otherFeaturedWorks = data
    })
  }
}
</script>