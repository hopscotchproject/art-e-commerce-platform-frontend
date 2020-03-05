<template>
  <div>
    <div class="flex justify-around m-4">
      <button class="border border-gray-600 p-2 rounded bg-gray-200">
        <i class="fas fa-th-large"></i>
        <span>{{`Catogory: Cloth`}}</span>
      </button>
      <button class="border border-gray-600 p-2 rounded bg-gray-200">
        <i class="fas fa-sort-amount-up-alt"></i>
        <span>{{`Sort By: Relevance`}}</span>
      </button>
    </div>
    <div class="flex flex-wrap">
      <span
        v-for="item in storeItems"
        v-bind:key="item.name + Math.random()"
        class="w-1/3 px-1"
      >
        <img :src="item.imageUrl"/>
        <div class="text-center text-sm">{{item.name}}</div>
        <div class="text-center text-sm">{{`${item.priceUnit} ${item.price}`}}</div>
      </span>
    </div>
  </div>
</template>

<script>
import stubApi from '../../api/StubApi'

export default {
  name: 'StoreTab',
  data: () => ({
    storeItems: []
  }),
  mounted() {
    stubApi.getStoreItems().then(data => {
      this.storeItems = data
    })
  }
}
</script>