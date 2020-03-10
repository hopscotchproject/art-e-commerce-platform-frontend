import RestApi from './RestApi'
import faker from 'faker'
import { getRandomActivity, getTrendingRandomActivity } from '../fixtures/followingActivities'

const delayResolve = (data, delay = 50) => new Promise((resolve) => {
  setTimeout(() => { resolve(data) }, delay)
})

class StubApi extends RestApi {
  getRecentLiked() {
    const recentLiked = [...new Array(25)].map(() => ({
      imageUrl: `https://picsum.photos/seed/${faker.lorem.word()}/200/200`,
      title: faker.lorem.word()
    }))
    return delayResolve(recentLiked, 200)
  }

  getOtherFeaturedWorks() {
    return this.getRecentLiked()
  }

  getTags() {
    const tags = [...new Array(10)].map(() => faker.lorem.word())
    return delayResolve(tags)
  }

  getNext(count = 1) {
    const data = [...new Array(count)].map(() => ({
      imageUrl: `https://picsum.photos/seed/${faker.lorem.word()}/400/400`,
      title: faker.lorem.word(),
      price: faker.random.number(),
      priceUnit: 'RMB',
      artist: `${faker.name.firstName()} ${faker.name.lastName()}`,
      roughLikes: Math.floor(Math.random() * 100) / 10,
    }))
    return delayResolve(data)
  }

  getActivities(count = 10) {
    const data = [...new Array(count)].map(() => ({
      name: faker.lorem.word(),
      pieces: [...new Array(15)].map(() => ({
        imageUrl: `https://picsum.photos/seed/${faker.lorem.word()}/200/200`,
        title: faker.lorem.word()
      }))
    }))
    return delayResolve(data)
  }

  getStoreItems() {
    const data = [...new Array(35)].map(() => ({
      imageUrl: `https://picsum.photos/seed/${faker.lorem.word()}/200/200`,
      name: faker.lorem.word(),
      price: faker.random.number(),
      priceUnit: '$'
    }))
    return delayResolve(data)
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
    const getRandom = (items) => items[Math.floor(Math.random() * items.length)]
    const data = {
      originals: [...new Array(15)].map(() => ({
        imageUrl: `https://picsum.photos/seed/${faker.lorem.word()}/200/200`,
        status: getRandom(['primary-market', 'secondary-market', 'off-market'])
      })),
      currentlyInHand: [...new Array(15)].map(() => ({
        imageUrl: `https://picsum.photos/seed/${faker.lorem.word()}/200/200`,
        status: getRandom(['primary-market', 'secondary-market', 'off-market'])
      })),
      sellingOrSold: [...new Array(15)].map(() => ({
        imageUrl: `https://picsum.photos/seed/${faker.lorem.word()}/200/200`,
        status: getRandom(['selling', 'sold'])
      })),
      collections: [...new Array(15)].map(() => ({
        imageUrl: `https://picsum.photos/seed/${faker.lorem.word()}/200/200`,
      })),
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