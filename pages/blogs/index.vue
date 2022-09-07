<template>
  <div class="flex justify-center items-center py-24 bg-gradient-to-b from-white to-cyan-50">
    <div class="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
      <div role="main" class="flex flex-col items-center justify-center">
        <h1>Artikel</h1>
        <p class="text-center mt-4 lg:w-1/2 md:w-10/12 w-11/12">If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough</p>
      </div>
      <div class="lg:flex items-stretch md:mt-12 mt-8">
        <div v-for="blog in blogs" :key="blog.id" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-16">
          <article class="flex flex-col border-2 h-full bg-white rounded-lg hover:shadow-md hover:scale-[1.03] transition duration-300 ease-in-out">
            <a :href="/blogs/ + blog.attributes.slug">
              <img alt="" class="object-cover w-full h-52" :src="blog.attributes.thumbnail.data.attributes.url">
            </a>
            <div class="flex flex-col flex-1 p-6">
              <p class="text-xs tracking-wider uppercase hover:underline">{{ blog.attributes.tags }}</p>
              <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">{{ blog.attributes.title }}</h3>
              <div class="flex flex-wrap justify-between pt-6 space-x-2 text-xs">
                <span>{{ displayDate(blog.attributes.publish_date) }}</span>
                <span>Published by <span class="font-medium">{{ blog.attributes.Author }}</span></span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data () {
    return {
      blogs: []
    }
  },
  mounted () {
    this.findData()
  },
  methods: {
    async findData () {
      try {
        this.error = null
        this.loading = true
        const results = await this.$axios.$get(
          '/blogs?populate=*&pagination[pageSize]=6'
        )
        this.blogs = results.data
      } catch (e) {
        console.log(e)
        this.error = 'This resource is not loading'
      }
      this.loading = false
    },
    displayDate (date) {
      return moment(date).format('D MMMM YYYY')
    }
  }
}
</script>

<style></style>
