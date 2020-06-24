import GhostContentAPI from '@tryghost/content-api'

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'http://localhost:3001',
  key: '35eab0dadcef1a6930dfcbf2fd',
  version: 'v3'
})

export default api
