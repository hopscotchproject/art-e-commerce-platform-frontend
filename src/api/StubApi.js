import RestApi from './RestApi'
import faker from 'faker'
import { getRandomActivity, getTrendingRandomActivity } from '../fixtures/followingActivities'
import { allWorks } from '../fixtures/artworks'
import { allItems } from '../fixtures/store'
import { allEvents } from '../fixtures/events'

const delayResolve = (data, delay = 50) => new Promise((resolve) => {
  setTimeout(() => { resolve(data) }, delay)
})

const getRandom = (items) => items[Math.floor(Math.random() * items.length)]

const prefixImageUrl = (url) => window.location.hostname === 'hopscotchproject.github.io' ? 
  `/art-e-commerce-platform-frontend-live-demo/${url}` : url

class StubApi extends RestApi {
  getRecentLiked() {
    const recentLiked = [...new Array(25)].map(() => ({
      imageUrl: `https://picsum.photos/seed/${faker.lorem.word()}/200/200`,
      title: faker.lorem.word()
    }))
    return delayResolve(recentLiked, 200)
  }

  getOtherFeaturedWorks(current) {
    const found = allWorks.filter(work => work.artist === current.artist && work.id !== current.id)
    return delayResolve(found)
  }

  getTags() {
    const tags = [...new Array(10)].map(() => faker.lorem.word())
    return delayResolve(tags)
  }

  getNext(count = 1) {
    const artwork = getRandom(allWorks)
    const data = [...new Array(count)].map(() => ({
      roughLikes: Math.floor(Math.random() * 100) / 10,
      ...artwork
    }))
    return delayResolve(data)
  }

  getArtwork(id) {
    return delayResolve(allWorks.find(work => work.id === id))
  }

  getEvents() {
    return delayResolve(allEvents)
  }

  getEvent(id) {
    const found = allEvents.find(event => event.id === id)
    return delayResolve(found)
  }

  getStoreItems() {
    return delayResolve(allItems)
  }

  getCollections() {
    const data = [...new Array(20)].map(() => ({
      artist: `${faker.name.firstName()} ${faker.name.lastName()}`,
      gallery: Math.random() > 0.5 ? `${faker.company.companyName()} gallery` : null,
      name: faker.lorem.word(),
      pieces: [...new Array(15)].map(() => ({
        imageUrl: `https://picsum.photos/seed/${faker.lorem.word()}/200/200`,
        title: faker.lorem.word()
      }))
    }))
    return delayResolve(data)
  }

  getArtists() {
    const data = [...new Array(20)].map(() => ({
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      imageUrl: `https://picsum.photos/seed/${faker.lorem.word()}/200/200`
    }))
    return delayResolve(data)
  }

  getFeaturedArtist() {
    const data = {
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      imageUrl: `https://picsum.photos/seed/${faker.lorem.word()}/200/200`,
      introduction: faker.lorem.paragraph()
    }
    return delayResolve(data)
  }

  getFollowingActivities(count = 15) {
    const data = [...new Array(count)].map(getRandomActivity)
    return delayResolve(data)
  }

  getTrendingActivities(count = 15) {
    const data = [...new Array(count)].map(getTrendingRandomActivity)
    return delayResolve(data)
  }

  getUserPosts(count = 15) {
    const data = [...new Array(count)].map(() => ({
      imageUrl: `https://picsum.photos/seed/${faker.lorem.word()}/200/200`,
    }))
    return delayResolve(data)
  }

  getUserArtworks() {
    const data = {
      originals: [],
      // currentlyInHand: [...new Array(15)].map(() => ({
      //   imageUrl: `https://picsum.photos/seed/${faker.lorem.word()}/200/200`,
      //   status: getRandom(['primary-market', 'secondary-market', 'off-market'])
      // })),
      currentlyInHand: [{
        imageUrl: prefixImageUrl('/artworks/painting-1.jpg'),
        status: 'off-market'
      },{
        imageUrl:  prefixImageUrl('/artworks/photograph-1.jpg'),
        status: 'secondary-market'
      }],
      sellingOrSold: [{
        imageUrl:  prefixImageUrl('/artworks/photograph-1.jpg'),
        status: 'selling'
      }],
      // sellingOrSold: [...new Array(15)].map(() => ({
      //   imageUrl: `https://picsum.photos/seed/${faker.lorem.word()}/200/200`,
      //   status: getRandom(['selling', 'sold'])
      // })),
      collections: [{
        name: 'Graffiti Influenced',
        clicks: '15k',
        comments: '5k',
        favorites: '350',
        previewImageUrls: [
          prefixImageUrl('/artworks/object-3.png'),
          prefixImageUrl('/artworks/sculpture-1.png'),
          prefixImageUrl('/artworks/painting-1.jpg')
        ]
      }]
      // collections: [...new Array(15)].map(() => ({
      //   imageUrl: `https://picsum.photos/seed/${faker.lorem.word()}/200/200`,
      // })),
    }
    return delayResolve(data)
  }

  getUserFavorites() {
    const data = {
      posts: [...new Array(15)].map(() => ({
        imageUrl: `https://picsum.photos/seed/${faker.lorem.word()}/200/200`,
      })),
      artworks: [...new Array(15)].map(() => ({
        imageUrl: `https://picsum.photos/seed/${faker.lorem.word()}/200/200`,
      })),
      events: [...new Array(15)].map(() => ({
        imageUrl: `https://picsum.photos/seed/${faker.lorem.word()}/200/200`,
      })),
      albums: [...new Array(15)].map(() => ({
        imageUrl: `https://picsum.photos/seed/${faker.lorem.word()}/200/200`,
      })),
    }
    return delayResolve(data)
  }
}

export default new StubApi()