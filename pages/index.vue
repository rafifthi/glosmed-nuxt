<template>
  <div>
    <div class="bg-gradient-to-b from-white to-sky-50">
      <Hero />
      <Brand />
    </div>
    <Intro />
    <!-- <FAQ /> -->
    <Services />
    <FeaturedProducts />
    <Why />
    <Testimony />
    <CTA />
  </div>
</template>

<script>
export default {
  name: 'ProductIndex',
  components: { },
  head: {
    title: 'Glosmed - Distributor Alat Kesehatan Mata',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Glosmed mensuplai alat-alat kesehatan dan bahan penunjang operasi mata lainnya ke Rumah Sakit Umum dan Rumah Sakit khusus Mata yang ada di seluruh Indonesia.'
      }
    ]
  }
}
</script>
