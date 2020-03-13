<template>
  <div>
    <div class="mx-4 my-2 text-xl">
      <router-link to="/search/events">
        <i class="fas fa-chevron-left"/>
      </router-link>
    </div>
    <div>
      <!-- detail images -->
      <div class="flex flex-row overflow-x-auto">
        <span
          v-for="detailImageUrl in event.detailImageUrls"
          v-bind:key="detailImageUrl"
          class="flex-shrink-0 px-2"
        >
          <img :src="detailImageUrl" class="h-48"/>
        </span>
      </div>
      <!-- event info -->
      <div class="mx-4 mt-2 text-sm">
        <div>
          Exhibition:
          <span class="font-bold">{{event.name}}</span>
        </div>
        <div>
          Gallery: 
          <span class="font-semibold underline">{{event.gallery}}</span>
        </div>
        <div>
          Related Artist(s): 
          <span
            v-for="artist in event.artists"
            v-bind:key="artist.name"
            class="font-semibold underline"
          >
            {{artist.name}}
          </span>
        </div>
        <div>
          Time: 
          <span class="font-semibold">{{event.time}}</span>
        </div>
        <div>
          Location: 
          <span class="font-semibold underline">{{event.location}}</span>
        </div>
        <hr class="my-2"/>
        <!-- about the exhibition -->
        <div>
          <div class="font-bold">About The Exhibition</div>
          <p>{{event['about the event']}}</p>
        </div>
        <hr class="my-2"/>
        <!-- works -->
        <div v-if="!!event.pieceImageUrls.length">
          <div class="font-bold">Preview</div>
          <div class="flex flex-row overflow-x-auto">
            <span
              v-for="pieceImageUrl in event.pieceImageUrls"
              v-bind:key="pieceImageUrl"
              class="flex-shrink-0 px-2"
            >
              <img :src="pieceImageUrl" class="h-48"/>
            </span>
          </div>
        </div>
        <hr class="my-2"/>
        <!-- about artists -->
        <div>
          <div class="font-bold">About The Artist(s)</div>
          <div
            v-for="artist in event.artists"
            v-bind:key="artist.name"
          >
            <div class="font-semibold">{{artist.name}}</div>
            <p>{{artist.about}}</p>
          </div>
        </div>
        <hr class="my-2"/>
        <!-- About gallery -->
        <div>
          <div class="font-bold">About The Gallery</div>
          <p>{{event['about gallery']}}</p>
        </div>
        <hr class="my-2"/>
        <!-- Comments -->
        <div>
          <div class="font-bold">Comments</div>
          <div
            v-for="comment in event.comments"
            v-bind:key="comment.comment"
          >
            <p>{{comment.comment}}</p>
            <div class="flex justify-end">
              <span class="mx-1">
                <i class="fas fa-star text-orange-400"></i>
                {{comment.rating}}
              </span>
              <span class="mx-1">{{comment.name}}</span>
              <span class="mx-1">{{comment.timestamp}}</span>
            </div>
            <hr class="mx-2 my-1"/>
          </div>
        </div>
        <hr class="my-2"/>
      </div>
    </div>
  </div>
</template>

<script>
import stubApi from '../../api/StubApi'

export default {
  name: 'EventPage',
  data: () => ({
    event: null
  }),
  mounted() {
    stubApi.getEvent(this.$route.params.id).then(data => {
      this.event = data
    })
  }
}
</script>