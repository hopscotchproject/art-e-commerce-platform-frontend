import RestApi from './RestApi'
import faker from 'faker'

class StubApi extends RestApi {
  getRecentLiked() {
    const recentLiked = [...new Array(15)].map(() => ({
      imageUrl: `https://picsum.photos/seed/${faker.lorem.word()}/200/200`,
      title: faker.lorem.word()
    }))
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(recentLiked)
      }, 200)
    })
  }

  getNext(count = 1) {
    const data = [...new Array(count)].map(() => ({
      imageUrl: `https://picsum.photos/seed/${faker.lorem.word()}/200/200`,
      title: faker.lorem.word(),
      price: faker.random.number(),
      priceUnit: 'RMB',
      artist: `${faker.name.firstName()} ${faker.name.lastName()}`,
      roughLikes: Math.floor(Math.random() * 100) / 10,
    }))
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data)
      }, 50)
    })
  }
}

export default new StubApi()