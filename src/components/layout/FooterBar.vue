<template>
  <footer class="h-12 bg-red-500 bottom-0 w-full flex justify-around text-white text-2xl">
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
    <!-- <router-link to="/browse"> -->
      <span class="self-center">
        <i class="far fa-plus-square"></i>
      </span>
    <!-- </router-link> -->
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
  name: 'FooterBar'
}
</script>