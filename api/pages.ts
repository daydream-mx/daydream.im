import api from './ghost'

export async function getPages () {
  return await api.pages
    .browse({
      limit: 'all'
    })
    .catch((err) => {
      console.error(err)
    })
}