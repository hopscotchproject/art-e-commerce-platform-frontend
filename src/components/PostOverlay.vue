<template>
  <!-- TODO use Vue transition -->
  <div class="h-screen bg-white">
    <div class="h-12 bg-red-500 text-white flex text-2xl">
      <i class="fas fa-chevron-left self-center pl-4" @click="close" />
    </div>
    <div class="text-gray-400 text-6xl flex justify-center py-16 mx-6 border-b border-gray-400">
      <i class="fas fa-camera"/>
    </div>
    <div class="mx-6 pt-6">
      <textarea placeholder="What's so special about this art?" class="bg-gray-200 w-full h-32 p-2"/>
    </div>
    <div class="mx-6 pt-6">
      <button class="h-12 w-24 bg-red-400 text-white rounded float-right" @click="close">Post</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostOverlay',
  methods: {
    close() {
      this.$store.commit('flipShowPostOverlay')
    }
  }
}
</script>