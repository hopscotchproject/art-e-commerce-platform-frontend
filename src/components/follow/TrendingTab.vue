<template>
  <div>
    <div
      v-for="activity in activities"
      v-bind:key="activity.type + Math.random()"
      class="mx-2"
    >
      <activity-row :data="activity"/>
      <hr class="mt-2"/>
    </div>
  </div>
</template>

<script>
import stubApi from '../../api/StubApi'
import ActivityRow from './ActivityRow'

export default {
  name: 'TrendingTab',
  components: {
    'activity-row': ActivityRow
  },
  data: () => ({
    activities: []
  }),
  mounted() {
    stubApi.getTrendingActivities(50).then(data => {
      this.activities = data
    })
  }
}
</script>