<template>
  <div>
    <div class="flex my-2">
      <img src="/images/avatar.svg" class="w-1/3 mx-2"/>
      <div class="w-2/3 mx-2 self-center">
        <div>
          <span class="font-bold underline">Tairan Shi</span>
          <i class="fas fa-user-check text-blue-400"></i>
        </div>
        <div>
          <span>with </span>
          <span class="font-bold underline">Some Cool Name Gallery</span>
        </div>
        <div>
          <i class="fas fa-map-pin text-red-400"></i>
          <span class="underline">New York City, NY</span>
        </div>
      </div>
    </div>
    <div class="flex justify-around items-stretch">
      <button class="border border-gray-400 rounded px-4 py-1 font-bold bg-gray-100 text-sm">Followers</button>
      <button class="border border-gray-400 rounded px-4 py-1 font-bold bg-gray-100 text-sm">Followings</button>
      <button class="border border-gray-400 rounded px-4 py-1 font-bold bg-gray-100 text-sm">Message</button>
    </div>
    <div class="mx-4 my-2">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div class="flex shadow">
      <router-link
        to="/home/posts"
        :class="`w-1/2 text-center p-4 font-bold ${tabStyle('posts')}`"
      >
        Posts
      </router-link>
      <router-link
        to="/home/artworks"
        :class="`w-1/2 text-center p-4 font-bold ${tabStyle('artworks')}`"
      >
        Works
      </router-link>
      <router-link
        to="/home/favorites"
        :class="`w-1/2 text-center p-4 font-bold ${tabStyle('favorites')}`"
      >
        Favorites
      </router-link>
      <router-link
        to="/home/analytics"
        :class="`w-1/2 text-center p-4 font-bold ${tabStyle('analytics')}`"
      >
        Analytics
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    tabStyle(tab) {
      return this.$route.path.split('/')[2] === tab ? 'border-b-2 border-orange-400' : ''
    } 
  }
}
</script>