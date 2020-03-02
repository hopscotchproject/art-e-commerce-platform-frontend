<template>
  <!-- TODO use Vue transition -->
  <div class="h-screen bg-white">
    <div class="h-12 bg-red-500 text-white flex text-2xl">
      <i class="fas fa-chevron-left self-center pl-4" @click="close" />
    </div>
    This section is for you to post stuff
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