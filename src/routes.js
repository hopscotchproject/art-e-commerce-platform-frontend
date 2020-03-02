import AppBar from './components/layout/AppBar'
import FooterBar from './components/layout/FooterBar'
import NotFound from './components/NotFound'
import BrowsePage from './components/browse/BrowsePage'
import SearchPage from './components/search/SearchPage'
import FollowPage from './components/follow/FollowPage'
import HomePage from './components/home/HomePage'

const appBar = {
  'app-bar': AppBar
}

const footerBar = {
  'footer-bar': FooterBar
}

export default [{
  path: '/browse',
  alias: '/',
  components: {
    default: BrowsePage,
    ...appBar,
    ...footerBar
  }
},{
  path: '/search',
  components: {
    default: SearchPage,
    ...appBar,
    ...footerBar
  }
},{
  path: '/follow',
  components: {
    default: FollowPage,
    ...appBar,
    ...footerBar
  }
},{
  path: '/home',
  components: {
    default: HomePage,
    ...appBar,
    ...footerBar
  }
}, {
  path: '*',
  components: {
    ...appBar,
    ...footerBar,
    default: NotFound
  }
}]
