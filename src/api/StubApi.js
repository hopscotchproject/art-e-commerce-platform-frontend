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
}

export default new StubApi()