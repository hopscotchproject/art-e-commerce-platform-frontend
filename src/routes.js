import AppBar from './components/layout/AppBar'
import FooterBar from './components/layout/FooterBar'
import NotFound from './components/NotFound'
import BrowsePage from './components/browse/BrowsePage'
import RecentlyLiked from './components/browse/RecentlyLiked'
import DetailPage from './components/browse/DetailPage'
import SearchPage from './components/search/SearchPage'
import ActivityTab from './components/search/ActivityTab'
import StoreTab from './components/search/StoreTab'
import CollectionTab from './components/search/CollectionTab'
import StarArtistsTab from './components/search/StarArtistsTab'
import FollowPage from './components/follow/FollowPage'
import FollowingTab from './components/follow/FollowingTab'
import TrendingTab from './components/follow/TrendingTab'
import HomePage from './components/home/HomePage'

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
  components: {
    default: HomePage,
    ...appBar,
    ...footerBar
  }
},{
  path: '/recently-liked',
  components: {
    default: RecentlyLiked,
    ...appBar,
    ...footerBar
  }
},{
  path: '/detail',
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
