<template>
  <div>
    <div>
      <router-view name="app-bar" class="fixed"/>
      <router-view class="py-12"/>
      <router-view name="footer-bar" class="fixed"/>
    </div>
    <!-- TODO: Use Vue transition! -->
    <div :class="`app-overlay ${showPostOverlay ? 'app-overlay-show' : ''}`">
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
