<template>
  <div>
    <router-view name="app-bar" class="fixed"/>
    <router-view class="py-12"/>
    <router-view name="footer-bar" class="fixed"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>