<template>
  <div>
    <h1>{{ post.title }}</h1>
    <div v-html="post.html"></div>
  </div>
</template>

<script>
import { getSinglePost } from '../../api/posts'

export default {
  async asyncData ({ params }) {
    console.log(params.slug)
    const post = await getSinglePost(params.slug)
    // eslint-disable-next-line object-shorthand
    return { post: post }
  }
}
</script>
