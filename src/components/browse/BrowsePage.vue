<template>
  <div>
    <recent-liked/>
    <browse-section/>
    <h1>This is browsing page</h1>
    <img src="/images/avatar.svg"/>
    <img src="/images/avatar.svg"/>
    <img src="/images/avatar.svg"/>
  </div>
</template>
<script>
import RecentLiked from './RecentLiked'
import BrowseSection from './BrowseSection'

export default {
  name: 'BrowsePage',
  components: {
    'recent-liked': RecentLiked,
    'browse-section': BrowseSection
  }
}
</script>