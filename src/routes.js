import AppBar from './components/layout/AppBar'
import FooterBar from './components/layout/FooterBar'
import NotFound from './components/NotFound'

import BrowsePage from './components/browse/BrowsePage'
import RecentlyLiked from './components/browse/RecentlyLiked'
import DetailPage from './components/browse/DetailPage'

// search page and sub tabs
import SearchPage from './components/search/SearchPage'
import ActivityTab from './components/search/ActivityTab'
import StoreTab from './components/search/StoreTab'
import CollectionTab from './components/search/CollectionTab'
import StarArtistsTab from './components/search/StarArtistsTab'

// follow page and tabs
import FollowPage from './components/follow/FollowPage'
import FollowingTab from './components/follow/FollowingTab'
import TrendingTab from './components/follow/TrendingTab'

// home page and tabs
import HomePage from './components/home/HomePage'
import AnalyticsTab from './components/home/AnalyticsTab'
import ArtworksTab from './components/home/ArtworksTab'
import FavoritesTab from './components/home/FavoritesTab'
import PostsTab from './components/home/PostsTab'

// TODO: remove app bar from all routes
const appBar = {
  'app-bar': AppBar
}

const footerBar = {
  'footer-bar': FooterBar
}

export default [{
  path: '/',
  redirect: '/browse'
}, {
  path: '/browse',
  components: {
    default: BrowsePage,
    ...appBar,
    ...footerBar
  }
},{
  path: '/search',
  redirect: '/search/activities',
  components: {
    default: SearchPage,
    ...appBar,
    ...footerBar
  },
  children: [{
    path: 'activities',
    component: ActivityTab
  },{
    path: 'store',
    component: StoreTab
  },{
    path: 'collection',
    component: CollectionTab
  },{
    path: 'star-artists',
    component: StarArtistsTab
  }]
},{
  path: '/follow',
  redirect: '/follow/following',
  components: {
    default: FollowPage,
    ...appBar,
    ...footerBar
  },
  children: [{
    path: 'following',
    component: FollowingTab
  }, {
    path: 'trending',
    component: TrendingTab
  }]
},{
  path: '/home',
  redirect: '/home/posts',
  components: {
    default: HomePage,
    ...appBar,
    ...footerBar
  },
  children: [{
    path: 'analytics',
    component: AnalyticsTab
  }, {
    path: 'artworks',
    component: ArtworksTab
  }, {
    path: 'favorites',
    component: FavoritesTab
  }, {
    path: 'posts',
    component: PostsTab
  }]
},{
  path: '/recently-liked',
  components: {
    default: RecentlyLiked,
    ...appBar,
    ...footerBar
  }
},{
  path: '/detail/:id',
  components: {
    default: DetailPage,
    ...appBar,
    ...footerBar
  }
},{
  path: '*',
  components: {
    ...appBar,
    ...footerBar,
    default: NotFound
  }
}]
