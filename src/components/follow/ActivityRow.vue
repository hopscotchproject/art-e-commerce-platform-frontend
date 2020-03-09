<template>
  <!-- user posting type -->
  <div v-if="data.type === 'user-posting'">
    <div class="mt-2">
      <span class="font-bold underline">{{data.user.name}}</span>
      <span> recently posted</span>
    </div>
    <div class="clearfix mt-2">
      <img :src="data.post.imageUrl" class="mr-2 mt-2 float-left"/>
      <p class="text-sm">{{data.post.text}}</p>
    </div>
    <social-util-bar :data="data"/>
  </div>
  <!-- user following user -->
  <div v-else-if="data.type === 'user-following-user'">
    <div class="mt-2">
      <span class="font-bold underline">{{data.user.name}}</span>
      <span> started following </span>
      <span class="font-bold underline">{{data.followed.name}}</span>
    </div>
  </div>
  <!-- gallery creating event -->
  <div v-else-if="data.type === 'gallery-creating-event'">
    <div class="mt-2">
      <span class="font-bold underline">{{data.gallery.name}}</span>
      <span> created event </span>
      <span class="font-bold underline">{{data.event.name}}</span>
    </div>
    <div class="clearfix mt-2">
      <img :src="data.event.imageUrl" class="mr-2 mt-2 float-left"/>
    </div>
    <social-util-bar :data="data"/>
  </div>
  <!-- user putting item on sale -->
  <div v-else-if="data.type === 'user-putting-item-for-sale'">
    <div class="mt-2">
      <span class="font-bold underline">{{data.user.name}}</span>
      <span> put </span>
      <span class="font-bold underline">{{data.item.name}}</span>
      <span> on sale </span>
    </div>
    <div class="clearfix mt-2">
      <img :src="data.item.imageUrl" class="mr-2 mt-2 float-left"/>
    </div>
    <social-util-bar :data="data"/>
  </div>
  <!-- user purchasing -->
  <div v-else-if="data.type === 'user-purchasing'">
    <div class="mt-2">
      <span class="font-bold underline">{{data.user.name}}</span>
      <span> purchased </span>
      <span class="font-bold underline">{{data.item.name}}</span>
    </div>
    <div class="clearfix mt-2">
      <img :src="data.item.imageUrl" class="mr-2 mt-2 float-left"/>
    </div>
    <social-util-bar :data="data"/>
  </div>
  <!-- user creating collection -->
  <div v-else-if="data.type === 'user-creating-collection'">
    <div class="mt-2">
      <span class="font-bold underline">{{data.user.name}}</span>
      <span> created collection </span>
      <span class="font-bold underline">{{data.collection.name}}</span>
    </div>
    <div class="clearfix mt-2">
      <img :src="data.collection.imageUrl" class="mr-2 mt-2 float-left"/>
    </div>
    <social-util-bar :data="data"/>
  </div>
  <!-- user favoriting items -->
  <div v-else-if="data.type === 'user-favoriting-items'">
    <div class="mt-2">
      <span class="font-bold underline">{{data.user.name}}</span>
      <span> favorited items </span>
    </div>
    <div class="flex mt-2 overflow-x-auto">
      <img
        v-for="item in data.items"
        v-bind:key="item.imageUrl + Math.random()"
        :src="item.imageUrl"
        class="mr-2 mt-2"
      />
    </div>
    <social-util-bar :data="data"/>
  </div>
  <div v-else>
    <div>{{JSON.stringify(data)}}</div>
  </div>
</template>


<script>
import SocialUtilBar from './SocialUtilBar'

export default {
  name: 'ActivityRow',
  props: ['data'],
  components: {
    'social-util-bar': SocialUtilBar
  }
}
</script>