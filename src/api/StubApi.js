import RestApi from './RestApi'
import faker from 'faker'

const delayResolve = (data, delay = 50) => new Promise((resolve) => {
  setTimeout(() => { resolve(data) }, delay)
})

class StubApi extends RestApi {
  getRecentLiked() {
    const recentLiked = [...new Array(15)].map(() => ({
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
}

export default new StubApi()