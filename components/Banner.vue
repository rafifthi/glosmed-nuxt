<template>
  <div id="carouselExampleControls" class="carousel slide relative mb-8 lg:mb-24" data-bs-ride="carousel">
    <div v-for="banner in banners" :key="banner.id" class="carousel-inner relative h-fit w-full overflow-hidden rounded-2xl">
      <div class="carousel-item active relative float-left w-full">
        <img
          :src="banner.attributes.thumbnail.data.attributes.url"
          class="block w-full"
          :alt="banner.attributes.name"
        >
      </div>
    </div>
    <button
      class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true" />
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true" />
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({
    banners: []
  }),
  mounted () {
    this.findData()
  },
  methods: {
    async findData () {
      try {
        this.error = null
        this.loading = true
        const results = await this.$axios.$get(
          '/banners?populate=*'
        )
        this.banners = results.data
        console.log('data banner', this.banners)
      } catch (e) {
        console.log(e)
        this.error = 'This resource is not loading'
      }
      this.loading = false
    }
  }
}
</script>

<style>

</style>
