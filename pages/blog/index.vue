<template>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <nuxt-link :to="{ path: post.slug }">
        {{ post.title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { getPosts } from '../../api/posts'

export default {
  async asyncData () {
    const posts = await getPosts()
    // eslint-disable-next-line object-shorthand
    return { posts: posts }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
