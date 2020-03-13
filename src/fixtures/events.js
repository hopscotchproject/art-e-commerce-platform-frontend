const hellerGalleryEvent = {
  id: 'heller',
  name: 'Toots Zynsky, Red List',
  gallery: 'Heller Gallery',
  rating: '4.5',
  going: 585,
  distance: '2.3 mi',
  coverImageUrls: [
    '/events/heller-cover-1.png',
  ],
  detailImageUrls: [
    '/events/heller-cover-1.png',
    '/events/heller-cover-2.png'
  ],
  artists: [{
    name: 'Toots Zynsky',
    about: 'Toots Zynsky is known for her distinctive “filet de verre” technique that fuses threads of glass to achieve unmatched explorations of color. A process that involved teams of people pulling thread was simplified by her co-invention of a thread-pulling machine, which uses electronic software to create glass thread in a manner comparable to glass optical fiber. While completing her BFA at the Rhode Island School of Design, Zynsky helped found the Pilchuck Glass School, which ultimately made studio glass a mainstream phenomenon. Although her work is constantly evolving, Zynsky consistently experiments with color and form; in her early vessels, Zynsky fused glass with barbed wire and later, nets of glass with blown forms.',
  }],
  time: '03/06 - 04/11',
  location: '303 10th ave, New York, NY, 10001',
  'about the event': 'This Exhibition featured artist Toots Zynsky’s latest glassware work using a special technique to bend the threads to create unique shapes and colors.',
  'about gallery': 'Since 1973 Heller Gallery has been recognized for playing a seminal role in promoting contemporary sculpture employing glass as its touch stone medium. For more than four decades Heller has exhibited the premier international artists who incorporate glass in their practice and has been a valuable resource for artists, museums, and collectors worldwide.The artists who exhibit at Heller work in a broad range of styles and techniques and explore subject matter equally diverse. Some take on the material itself, testing its limits in monumental sculptures or exploring its fundamental qualities in works that play with the interactions of color, light, transparency and form. Others delve into emotion and myth or comment on art history and do so by casting figurative sculptures, painting on glass, or creating complex large scale installations.',
  pieceImageUrls: [
    '/events/heller-piece-1.png',
    '/events/heller-piece-2.png',
    '/events/heller-piece-3.png'
  ],
  comments: [{
    name: 'Nancy Brown',
    timestamp: '03/08/2020 11:43AM',
    rating: '5',
    comment: 'This is an interesting show and I strongly recommend it.'
  },{
    name: 'Alex Zhang',
    timestamp: '03/12/2020 8:10PM',
    rating: '4',
    comment: 'Pretty Cool, but not my type of art.'
  }]
}

const allEvents = [...new Array(5)].map(() => hellerGalleryEvent).map(event => {
  if (window.location.hostname === 'hopscotchproject.github.io') {
    ['coverImageUrls', 'detailImageUrls', 'pieceImageUrls'].forEach(key => {
      event[key] = event[key].map(
        imageUrl => `/art-e-commerce-platform-frontend-live-demo/${imageUrl}`)
    })
  }
  return event
})

export {
  allEvents
}