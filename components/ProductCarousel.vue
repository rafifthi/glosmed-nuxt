<template>
  <section v-if="items.length">
    <VueSlickCarousel v-bind="settings">
      <Card
        v-for="item in items"
        :key="item.id"
        :category="item.attributes.category.data.attributes.name"
        :slug="item.attributes.slug"
        :image-url="item.attributes.thumbnail.data.attributes.url"
        :brand="item.attributes.brand.data.attributes.name"
        :item-name="item.attributes.name"
      />
    </VueSlickCarousel>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Card from './Card.vue'

export default {
  name: 'ProductCarousel',
  components: { VueSlickCarousel, Card },
  data () {
    return {
      items: [],
      settings: {
        adaptiveHeight: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
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
          'http://localhost:1337/api/products?populate=*&pagination[pageSize]=12'
        )
        this.items = results.data
      } catch (e) {
        console.log(e)
        this.error = 'This resource is not loading'
      }
      this.loading = false
    },
    showNext () {
      this.$refs.carousel.next()
    },
    showPrev () {
      this.$refs.carousel.prev()
    }
  }
}
</script>

<style></style>
