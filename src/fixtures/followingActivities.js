import faker from 'faker'

/**
 * Utils
 */

const getUser = () => ({
  name: faker.internet.userName()
})

const getGallery = () => ({
  name: `${faker.company.companyName()} Gallery`
})

const getLikesAndComments = (likes = null, comments = null) => ({
  likes: likes || faker.random.number(),
  comments: comments || faker.random.number(),
})

/**
 * User favoriting items activity
 */
const getUserFavoratingItems = (user = null, items = null) => ({
  type: 'user-favoriting-items',
  user: user || getUser(),
  items: items || [...new Array(4)].map(() => ({
    imageUrl: `https://picsum.photos/seed/${faker.lorem.word()}/100/100`
  }))
})

/**
 * User posting activity
 */
const getUserPosting = (user = null, post = null) => ({
  type: 'user-posting',
  user: user || getUser(),
  post: post || {
    imageUrl: `https://picsum.photos/seed/${faker.lorem.word()}/100/100`,
    text: faker.lorem.paragraph()
  }
})

/**
 * User following user activity
 */
const getUserFollowingUser = (user = null, followed = null) => ({
  type: 'user-following-user',
  user: user || getUser(),
  followed: followed || getUser()
})

/**
 * Gallery creating event activity
 */
const getGalleryCreatingEvent = (gallery = null, event = null) => ({
  type: 'gallery-creating-event',
  gallery: gallery || getGallery(),
  event: event || {
    name: faker.lorem.word(),
    imageUrl: `https://picsum.photos/seed/${faker.lorem.word()}/100/100`
  }
})

/**
 * User putting item for sale activity
 */
const getUserPuttingItemForSale = (user = null, item = null) => ({
  type: 'user-putting-item-for-sale',
  user: user || getUser(),
  item: item || {
    name: faker.commerce.productName(),
    imageUrl: `https://picsum.photos/seed/${faker.lorem.word()}/100/100`
  }
})

/**
 * User purchasing activity
 */
const getUserPurchasing = (user = null, item = null) => ({
  type: 'user-purchasing',
  user: user || getUser(),
  item: item || {
    name: faker.commerce.productName(),
    imageUrl: `https://picsum.photos/seed/${faker.lorem.word()}/100/100`
  }
})

/**
 * User creating collection activity
 */
const getUserCreatingCollection = (user = null, collection = null) => ({
  type: 'user-creating-collection',
  user: user || getUser(),
  collection: collection || {
    name: faker.lorem.word(),
    imageUrls: [
      `https://picsum.photos/seed/${faker.lorem.word()}/100/100`,
      `https://picsum.photos/seed/${faker.lorem.word()}/100/100`,
      `https://picsum.photos/seed/${faker.lorem.word()}/100/100`,
      `https://picsum.photos/seed/${faker.lorem.word()}/100/100`,
      `https://picsum.photos/seed/${faker.lorem.word()}/100/100`,
      `https://picsum.photos/seed/${faker.lorem.word()}/100/100`,
    ]
  }
})

const getRandomActivity = () => {
  const all = [
    getUserFavoratingItems,
    getUserCreatingCollection,
    getUserFollowingUser,
    getUserPosting,
    getUserPurchasing,
    getUserPuttingItemForSale,
    getGalleryCreatingEvent
  ]
  return {
    ...all[Math.floor(Math.random() * all.length)](),
    likes: faker.random.number(),
    comments: faker.random.number(),
  }
}

const getTrendingRandomActivity = () => {
  const all = [
    // getUserFavoratingItems,
    getUserCreatingCollection,
    // getUserFollowingUser,
    getUserPosting,
    getUserPurchasing,
    getUserPuttingItemForSale,
    getGalleryCreatingEvent
  ]
  return {
    ...all[Math.floor(Math.random() * all.length)](),
    likes: faker.random.number(),
    comments: faker.random.number(),
  }
}

export {
  getLikesAndComments,
  getUserFavoratingItems,
  getUserCreatingCollection,
  getUserFollowingUser,
  getUserPosting,
  getUserPurchasing,
  getUserPuttingItemForSale,
  getGalleryCreatingEvent,
  getRandomActivity,
  getTrendingRandomActivity,
}

