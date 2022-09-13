<template>
  <div class="py-24 pt-40 bg-gradient-to-b from-white to-cyan-100">
    <div class="container">
      <div class="flex flex-col-reverse lg:flex-row justify-between divide-y-2 divide-y-reverse lg:divide-y-0 lg:divide-x-2 bg-white p-8 lg:p-16 rounded-xl">
        <div class="lg:w-2/3 pr-16">
          <h3 class="mb-4">Deskripsi</h3>
          <p class="mb-8 text-gray-500 prose" v-html="career.data.attributes.description" />
          <h3 class="mb-4">Kualifikasi</h3>
          <p class="text-gray-500 prose" v-html="career.data.attributes.qualification" />
        </div>
        <div class="lg:w-1/3 mb-8 lg:mb-0 pb-8 lg:pl-8">
          <img src="../../assets/img/teknisi_illust.svg" alt="Teknisi" class="mb-4">
          <h3 class="mb-4">{{ career.data.attributes.name }}</h3>
          <div class="category flex gap-4 mb-8">
            <div class="flex gap-1">
              <img src="../../assets/img/department_icon.svg" alt="">
              <p>{{ career.data.attributes.division.data.attributes.name }}</p>
            </div>
            <div class="flex gap-1">
              <img src="../../assets/img/map_icon.svg" alt="">
              <p>{{ career.data.attributes.office.data.attributes.name }}</p>
            </div>
          </div>
          <a href="/" class="btn-secondary flex justify-center">Daftar</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ params, $axios }) {
    const career = await $axios.$get(`/careers/${params.id}?populate=*`)
    return { career }
  },
  head () {
    const career = this.career
    return {
      title: `Glosmed - ${career.data.attributes.name}`,
      meta: [{
        hid: 'iOSUrl',
        property: 'al:ios:url',
        content: ''
      },
      {
        hid: 'description',
        name: 'description',
        content: `${career.data.attributes.description}`
      }]
    }
  }
}
</script>

<style></style>
