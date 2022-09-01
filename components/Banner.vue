<template>
  <div id="carouselExampleControls" class="carousel slide relative mb-8 lg:mb-24" data-bs-ride="carousel">
    <div class="carousel-inner relative w-full overflow-hidden h-64 rounded-2xl">
      <div class="carousel-item active relative float-left w-full">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
          class="block w-full"
          alt="Wild Landscape"
        >
      </div>
      <div class="carousel-item relative float-left w-full">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
          class="block w-full"
          alt="Camera"
        >
      </div>
      <div class="carousel-item relative float-left w-full">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
          class="block w-full"
          alt="Exotic Fruits"
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
  async fetch () {
    this.banners = await this.$axios.$get('http://localhost:1337/api/banners?populate=*')
  }
}
</script>

<style>

</style>
