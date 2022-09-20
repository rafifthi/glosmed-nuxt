<!-- eslint-disable vue/no-v-html -->
<template>
  <body class="bg-gradient-to-b from-white to-sky-100 ">
    <div class="container bg-white py-24 lg:py-40 lg:flex items-start justify-center px-4">
      <div class="xl:w-2/6 lg:w-2/5 w-full lg:pr-8 mb-12">
        <img
          class="w-full"
          :src="product.data.attributes.thumbnail.data.attributes.url"
        >
      </div>
      <div class="xl:w-2/5 lg:ml-8 md:ml-6 md:mt-0 mt-6">
        <div class="grid gap-2 border-b border-gray-200 pb-4">
          <h3>
            {{ product.data.attributes.name }}
          </h3>
        </div>
        <div>
          <p
            class="xl:pr-12 mt-7"
          >
            {{ product.data.attributes.description }}
          </p>
        </div>
        <!-- Spesifikasi -->
        <div>
          <div class="border-t border-b py-4 mt-7 border-gray-200">
            <div
              data-menu
              class="flex justify-between items-center cursor-pointer"
              @click="showListSpec"
            >
              <h4 class="leading-4 text-gray-800">
                Spesifikasi
              </h4>
              <button
                class="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded"
                role="button"
                aria-label="show or hide"
              >
                <img
                  v-show="showSpec == false"
                  class="transform"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail3-svg4.svg"
                  alt="dropdown"
                >
                <img
                  v-show="showSpec == true"
                  class="transform rotate-180"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail3-svg4.svg"
                  alt="dropdown"
                >
              </button>
            </div>
            <div
              v-show="showSpec"
              id="sect"
              class="prose overflow-auto max-h-72 pt-4 text-base leading-normal pr-12 mt-4 text-gray-600"
              v-html="product.data.attributes.specification"
            />
          </div>
        </div>
        <!-- Arsip -->
        <div>
          <div class="border-b py-4 border-gray-200">
            <div
              data-menu
              class="flex justify-between items-center cursor-pointer"
              @click="showListArchive"
            >
              <h4 class="leading-4 text-gray-800">
                Arsip
              </h4>
              <button
                class="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded"
                role="button"
                aria-label="show or hide"
              >
                <img
                  v-show="showArchive == false"
                  class="transform"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail3-svg4.svg"
                  alt="dropdown"
                >
                <img
                  v-show="showArchive == true"
                  class="transform rotate-180"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail3-svg4.svg"
                  alt="dropdown"
                >
              </button>
            </div>
            <div
              v-show="showArchive"
              id="sect"
              class="prose overflow-auto max-h-72 pt-4 text-base leading-normal pr-12 mt-4 text-gray-600"
              v-html="product.data.attributes.archive"
            >
            </div>
          </div>
        </div>
        <!-- Video -->
        <div>
          <div class="border-b py-4 border-gray-200">
            <div
              data-menu
              class="flex justify-between items-center cursor-pointer"
              @click="showListVideo"
            >
              <h4 class="leading-4 text-gray-800">
                Video
              </h4>
              <button
                class="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded"
                role="button"
                aria-label="show or hide"
              >
                <img
                  v-show="showVideo == false"
                  class="transform"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail3-svg4.svg"
                  alt="dropdown"
                >
                <img
                  v-show="showVideo == true"
                  class="transform rotate-180"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail3-svg4.svg"
                  alt="dropdown"
                >
              </button>
            </div>
            <!-- rasio video: 320x180 -->
            <div
              v-show="showVideo"
              id="sect"
              class="overflow-auto max-h-72 pt-4 text-base leading-normal pr-12 mt-4 text-gray-600"
              v-html="product.data.attributes.video"
            >
            </div>
          </div>
        </div>
        <!-- Jurnal -->
        <div>
          <div class="border-b py-4 border-gray-200">
            <div
              data-menu
              class="flex justify-between items-center cursor-pointer"
              @click="showListJournal"
            >
              <h4 class="leading-4 text-gray-800">
                Jurnal
              </h4>
              <button
                class="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded"
                role="button"
                aria-label="show or hide"
              >
                <img
                  v-show="showJournal == false"
                  class="transform"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail3-svg4.svg"
                  alt="dropdown"
                >
                <img
                  v-show="showJournal == true"
                  class="transform rotate-180"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail3-svg4.svg"
                  alt="dropdown"
                >
              </button>
            </div>
            <div
              v-show="showJournal"
              id="sect"
              class="prose overflow-auto max-h-72 pt-4 text-base leading-normal pr-12 mt-4 text-gray-600"
              v-html="product.data.attributes.journal"
            >
            </div>
          </div>
        </div>
        <a
          href="https://wa.me/08118955662?text=Hi"
          class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-secondary w-full py-4 hover:bg-cyan-900 transition duration-300 ease-in-out"
        >
          Pesan Sekarang
        </a>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  async asyncData ({ params, $axios }) {
    const product = await $axios.$get(`/products/${params.slug}?populate=*`)
    return { product }
  },
  data () {
    return {
      showSpec: true,
      showJournal: false,
      showVideo: false,
      showArchive: false
    }
  },
  head () {
    const product = this.product
    return {
      title: `${product.data.attributes.name} - Glosmed`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${product.data.attributes.description}`
        }]
    }
  },
  methods: {
    showListSpec () {
      if (this.showSpec === false) {
        this.showSpec = true
      } else {
        this.showSpec = false
      }
    },
    showListJournal () {
      if (this.showJournal === false) {
        this.showJournal = true
      } else {
        this.showJournal = false
      }
    },
    showListVideo () {
      if (this.showVideo === false) {
        this.showVideo = true
      } else {
        this.showVideo = false
      }
    },
    showListArchive () {
      if (this.showArchive === false) {
        this.showArchive = true
      } else {
        this.showArchive = false
      }
    }
  }
}
</script>

<style></style>
