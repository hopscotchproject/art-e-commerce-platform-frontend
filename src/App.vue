<template>
  <div>
    <router-view name="app-bar" class="fixed w-full"/>
    <router-view class="pt-12"/>
    <router-view name="footer"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>