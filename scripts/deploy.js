const { publish } = require('gh-pages')

console.log('Starting deploying...')

publish('dist', {
  branch: 'master',
  repo: 'https://github.com/hopscotchproject/art-e-commerce-platform-frontend-live-demo.git'
}, () => console.log('Deployment done!'))