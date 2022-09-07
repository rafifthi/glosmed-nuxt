<template>
  <article class="max-w-3xl px-6 pt-48 pb-24 mx-auto space-y-12 bg-white">
    <div class="w-full mx-auto space-y-4 text-center">
      <p class="text-xs font-semibold tracking-wider uppercase">{{ blog.data.attributes.tags }}</p>
      <h1 class="text-4xl font-bold leading-tight md:text-5xl">
        {{ blog.data.attributes.title }}
      </h1>
      <p class="text-sm text-gray-400">
        by
        <a
          rel="noopener noreferrer"
          href="/"
          target="_blank"
          class="underline"
        >
          <span itemprop="name">{{ blog.data.attributes.Author }} </span> </a>on
        <time>{{ displayDate(blog.data.attributes.publish_date) }}</time>
      </p>
      <img alt="" class="object-cover w-full pt-12 pb-8" :src="blog.data.attributes.thumbnail.data.attributes.url">
    </div>
    <div class="prose leading-loose" v-html="blog.data.attributes.content" />
  </article>
</template>

<script>
import moment from 'moment'

export default {
  async asyncData ({ params, $axios }) {
    try {
      const blog = await $axios.$get(`/blogs/${params.slug}?populate=*`)
      return { blog }
    } catch (e) {
      console.log(e)
    }
  },
  methods: {
    displayDate (date) {
      return moment(date).format('D MMMM YYYY')
    }
  }
}
</script>

<style></style>
