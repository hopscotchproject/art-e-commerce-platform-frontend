<template>
  <div>
    <div
      v-for="event in events"
      v-bind:key="event.name + Math.random()"
    >
      <div class="m-2">
        <span class="self-center text-sm">
          <span class="underline font-semibold">{{event.name}}</span>
          <span v-if="event.gallery">
            <span>by</span>
            <span class="underline font-semibold">{{event.gallery}}</span>
          </span>
        </span>
        <span class="text-sm underline float-right pr-2">
          <span>{{event.distance}}<span>
        </span>
      </div>
      <div class="flex flex-no-wrap overflow-x-auto">
        <router-link
          :to="`/event/${event.id}`"
          v-for="coverImageUrl in event.coverImageUrls"
          v-bind:key="coverImageUrl + Math.random()"
          class="flex-shrink-0 mx-2 mb-2 w-10/12"
        >
          <img :src="coverImageUrl"/>
        </router-link>
      </div>
      <div class="flex justify-around text-sm mb-2">
        <span>
          <i class="fas fa-star text-orange-400"></i>
          {{`${event.rating}/5`}}
        </span>
        <span>{{`${event.going} are going`}}</span>
        <span>
          <i class="far fa-comment-dots text-gray-400"></i>
          {{`${event.comments.length} comments`}}
        </span>
      </div>
      <hr/>
    </div>
  </div>
</template>

<script>
import stubApi from '../../api/StubApi'

export default {
  name: 'EventTab',
  data: () => ({
    events: []
  }),
  mounted() {
    stubApi.getEvents().then(data => {
      this.events = data
    })
  }
}
</script>