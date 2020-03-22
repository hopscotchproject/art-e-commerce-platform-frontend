<template>
  <div @click="locked = false">
    <slot name="locked" v-if="locked">
      <i class="fas fa-lock"></i>
      Unlock
    </slot>
    <slot name="unlocked" v-else />
  <div>
</template>

<script>
export default {
  name: 'Locked',
  data: () => ({
    locked: true
  })
}
</script>