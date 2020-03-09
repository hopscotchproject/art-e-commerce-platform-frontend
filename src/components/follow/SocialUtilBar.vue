<template>
  <div class="mt-2 flex justify-end items-center">
    <span class="mx-2">
      <i class="fas fa-heart text-green-400"></i>
      <span>{{data.likes}}</span>
    </span>
    <span class="mx-2">
      <i class="fas fa-comment text-gray-400"></i>
      <span>{{data.comments}}</span>
    </span>
    <i class="fas fa-share-square text-gray-400 mx-2"></i>
    <i class="fas fa-bookmark text-red-400 mx-2"></i>
  </div>
</template>

<script>
export default {
  name: 'SocialUtilBar',
  props: ['data']
}
</script>