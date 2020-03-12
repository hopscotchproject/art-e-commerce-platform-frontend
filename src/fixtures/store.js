const allItems = [{
  id: 'cup',
  title: 'Keith Haring Travel Mug',
  imageUrl: '/store/cup-1.png',
  price: '55',
  priceUnit: '$'
},{
  id: 'avacado',
  title: 'Amuseable Plush Pals',
  imageUrl: '/store/avacado-1.png',
  price: '45/65',
  priceUnit: '$'
},{
  id: 'snowboard',
  title: 'Skateboard Colored Campbell\'s Soup Cans, 2015',
  imageUrl: '/store/snowboard-1.png',
  price: '225',
  priceUnit: '$'
},{
  id: 'holiday-cards',
  title: 'KAWS Holiday Cards (Box of 12)',
  imageUrl: '/store/holiday-cards-2.png',
  price: '15',
  priceUnit: '$'
},{
  id: 'tshirt',
  title: 'Space Cleaner T-shirt',
  imageUrl: '/store/tshirt-1.png',
  price: '42',
  priceUnit: '$'
},{
  id: 'iphone-case',
  title: 'Space Cleaner iPhone Case & Cover',
  imageUrl: '/store/iphone-case-2.png',
  price: '18',
  priceUnit: '$'
},{
  id: 'sticker',
  title: 'Space Cleaner Sticker',
  imageUrl: '/store/sticker-1.png',
  price: '2.25',
  priceUnit: '$'
}].map(work => {
  if (window.location.hostname === 'hopscotchproject.github.io') {
    work.imageUrl = `/art-e-commerce-platform-frontend-live-demo/${work.imageUrl}`
  }
  return work
})

export {
  allItems
}
