<template>
  <div>
    <div
      v-for="activity in activities"
      v-bind:key="activity.name + Math.random()"
    >
      <div class="m-2 font-bold">{{activity.name}}</div>
      <div class="flex flex-no-wrap overflow-x-auto">
        <span
          v-for="piece in activity.pieces"
          v-bind:key="piece.title + Math.random()"
          class="flex-shrink-0 mx-2 mb-2"
        >
          <img :src="piece.imageUrl"/>
          <div class="text-center text-sm">{{piece.title}}</div>
        </span>
      </div>
      <hr/>
    </div>
  </div>
</template>

<script>
import stubApi from '../../api/StubApi'

export default {
  name: 'ActivityTab',
  data: () => ({
    activities: []
  }),
  mounted() {
    stubApi.getActivities().then(data => {
      this.activities = data
    })
  }
}
</script>