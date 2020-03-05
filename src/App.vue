<template>
  <div>
    <div v-show="!showPostOverlay">
      <!-- <router-view name="app-bar" class="fixed"/> -->
      <div id="main-view-container" class="mb-8vh">
        <router-view/>
      </div>
      <router-view name="footer-bar" class="fixed h-8p bottom-0 w-full"/>
    </div>
    <!-- TODO: Use Vue transition! -->
    <div v-if="showPostOverlay">
      <post-overlay/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PostOverlay from './components/PostOverlay'

export default {
  name: 'App',
  components: {
    'post-overlay': PostOverlay
  },
  computed: mapState(['showPostOverlay'])
}
</script>

<style scoped>
.app-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: .5s ease;
}

.app-overlay-show {
  height: 100%;
}
</style>
