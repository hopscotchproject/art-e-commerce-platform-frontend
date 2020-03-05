<template>
  <div>
    <!-- search bar -->
    <div class="m-2 p-2 border border-gray-400 rounded flex bg-gray-200 hover:bg-white">
      <i class="fas fa-search w-1/12"/>
      <input type="text" placeholder="Search" class="w-11/12 h-full outline-none bg-gray-200 focus:bg-white"/>
    </div>
    <!-- tags -->
    <div class="flex flex-no-wrap overflow-x-auto">
      <span
        class="px-2 bg-gray-200 mx-2 border-gray-400 border text-sm rounded"
        v-for="tag in tags"
        v-bind:key="tag + Math.random()"
      >{{tag}}</span>
    </div>
    <!-- Search page tabs -->
    <div class="flex">
      <router-link to='/search/activities' :class="`h-full w-1/4 text-center mx-2 pb-2 ${tabStyle('activities')}`">
        <i class="fas fa-calendar-alt"></i>
      </router-link>
      <router-link to='/search/store' :class="`h-full w-1/4 text-center mx-2 pb-2 ${tabStyle('store')}`">
        <i class="fas fa-shopping-bag"></i>
      </router-link>
      <router-link to='/search/collection' :class="`h-full w-1/4 text-center mx-2 pb-2 ${tabStyle('collection')}`">
        <i class="fas fa-images"></i>
      </router-link>
      <router-link to='/search/star-artists' :class="`h-full w-1/4 text-center mx-2 pb-2 ${tabStyle('star-artists')}`">
        <i class="fas fa-user-check"></i>
      </router-link>
    </div>
    <!-- tab view -->
    <router-view/>
  </div>
</template>

<script>
import stubApi from '../../api/StubApi'

export default {
  name: 'SearchPage',
  data: () => ({
    tags: []
  }),
  methods: {
    tabStyle(tabRoute) {
      const splitedRoute = this.$route.path.split('/');
      return splitedRoute[splitedRoute.length - 1] === tabRoute ? 'border-b-2 border-orange-400' : ''
    }
  },
  mounted() {
    stubApi.getTags().then(data => {
      this.tags = data
    })
  }
}
</script>