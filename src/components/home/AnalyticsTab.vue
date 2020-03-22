<template>
  <div class="flex justify-around my-24">
    <locked>
      <div slot="locked" class="p-8 shadow rounded">
        <i class="fas fa-lock"></i>
        Unlock Analytics For $20
      </div>
      <i slot="unlocked" class="fas fa-database text-6xl text-gray-400 self-center"></i>
    </locked>
  </div>
</template>

<script>
import Locked from '../shared/Locked'
export default {
  name: 'AnalyticsTab',
  components: {
    locked: Locked
  }
}
</script>