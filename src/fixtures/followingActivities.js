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

/**
 * User favoriting items activity
 */
const getUserFavoratingItems = () => ({
  type: 'user-favoriting-items',
  user: getUser(),
  items: [...new Array(4)].map(() => ({
    imageUrl: `https://picsum.photos/seed/${faker.lorem.word()}/100/100`
  }))
})

/**
 * User posting activity
 */
const getUserPosting = () => ({
  type: 'user-posting',
  user: getUser(),
  post: {
    imageUrl: `https://picsum.photos/seed/${faker.lorem.word()}/100/100`,
    text: faker.lorem.paragraph()
  }
})

/**
 * User following user activity
 */
const getUserFollowingUser = () => ({
  type: 'user-following-user',
  user: getUser(),
  followed: getUser()
})

/**
 * Gallery creating event activity
 */
const getGalleryCreatingEvent = () => ({
  type: 'gallery-creating-event',
  gallery: getGallery(),
  event: {
    name: faker.lorem.word(),
    imageUrl: `https://picsum.photos/seed/${faker.lorem.word()}/100/100`
  }
})

/**
 * User putting item for sale activity
 */
const getUserPuttingItemForSale = () => ({
  type: 'user-putting-item-for-sale',
  user: getUser(),
  item: {
    name: faker.commerce.productName(),
    imageUrl: `https://picsum.photos/seed/${faker.lorem.word()}/100/100`
  }
})

/**
 * User purchasing activity
 */
const getUserPurchasing = () => ({
  type: 'user-purchasing',
  user: getUser(),
  item: {
    name: faker.commerce.productName(),
    imageUrl: `https://picsum.photos/seed/${faker.lorem.word()}/100/100`
  }
})

/**
 * User creating collection activity
 */
const getUserCreatingCollection = () => ({
  type: 'user-creating-collection',
  user: getUser(),
  collection: {
    name: faker.lorem.word(),
    imageUrl: `https://picsum.photos/seed/${faker.lorem.word()}/100/100`
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
  // getUserFavoratingItems,
  // getUserCreatingCollection,
  // getUserFollowingUser,
  // getUserPosting,
  // getUserPurchasing,
  // getUserPuttingItemForSale,
  // getGalleryCreatingEvent,
  getRandomActivity,
  getTrendingRandomActivity,
}

