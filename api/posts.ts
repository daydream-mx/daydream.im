import { PostsOrPages, PostOrPage } from '@tryghost/content-api'
import api from './ghost'

export async function getPosts (): Promise<void | PostsOrPages> {
  return await api.posts
    .browse({
      limit: 'all'
    })
    .catch((err) => {
      console.error(err)
    })
}

export async function getSinglePost (postSlug: string): Promise<void | PostOrPage> {
  console.log(postSlug)
  return await api.posts
    .read({
      slug: postSlug
    })
    .catch((err) => {
      console.error(err)
    })
}
