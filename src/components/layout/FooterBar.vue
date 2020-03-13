<template>
  <footer class="bg-red-500 flex justify-around text-white text-2xl z-10">
    <router-link to="/browse" class="self-center">
      <span>
        <i class="fas fa-home"></i>
      </span>
    </router-link>
    <router-link to="/search" class="self-center">
      <span>
        <i class="fas fa-search"></i>
      </span>
    </router-link>
    <span class="self-center" @click="postOnClick">
      <i class="far fa-plus-square"></i>
    </span>
    <router-link to="/follow" class="self-center">
      <span>
        <i class="fas fa-user-friends"></i>
      </span>
    </router-link>
    <router-link to="/home" class="w-8 self-center">
      <span>
        <img src="/images/avatar.svg"/>
      </span>
    </router-link>
  </footer>
</template>

<script>
export default {
  name: 'FooterBar',
  methods: {
    postOnClick() {
      this.$store.commit('flipShowPostOverlay')
    }
  }
}
</script>