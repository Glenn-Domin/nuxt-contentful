<template>
  <div class="container">
    <div style="text-align: left;">
      <h1 class="title">
        brettie
      </h1>
      <h2 class="subtitle">
        My phenomenal Nuxt.js project
      </h2>
      <div v-if="alert" class="alert">
        {{ alert }}
      </div>
      <div v-for="post in posts" :key="post.id" v-html="parseFullDescription(post.fields)" />
    </div>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import FORMATDATA from '~/mixins/formatData.js'

const client = createClient()
const contentType = 'home'

export default {
  name: 'Home',
  mixins: [FORMATDATA],
  // `env` is available in the context object
  asyncData ({ env }) {
    return Promise.all([
      // fetch the owner of the blog
      client.getEntries({
        'sys.id': env.CTF_PERSON_ID
      }),
      // fetch all blog posts sorted by creation date
      client.getEntries({
        content_type: contentType, // eslint-disable-line
        order: '-sys.createdAt'
      })
    ]).then(([entries, posts]) => {
      // return data that should be available
      // in the template
      return {
        person: entries.items[0],
        posts: posts.items,
        alert: ''
      }
    }).catch(() => {
      return {
        posts: [],
        alert: 'Server error. Please contact us.'
      }
    })
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

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
