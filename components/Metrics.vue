<template>
  <div class="container py-24">
    <div class="grid lg:grid-cols-2 gap-6">
      <div class="w-full">
        <h2 class="mb-4">Our 16 Years of Achievements</h2>
        <p class="mb-5 pr-12">
          Kami telah mendistribusikan ke berbagai Rumah Sakit dan Klinik di
          Indonesia
        </p>
      </div>

      <div class="w-full">
        <div class="flex flex-wrap">
          <div v-for="item in factors" :key="item.icon" class="flex py-4">
            <img
              :src="require('../assets/img/' + item.icon)"
              class="h-12 mx-6 self-center"
              alt=""
            >
            <div>
              <h3>{{ item.name }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Metrics',
  data () {
    return {
      factors: [
        { name: '100+', icon: 'icon-1.svg', description: 'Rumah Sakit Umum' },
        {
          name: '30+',
          icon: 'icon-2.svg',
          description: 'Rumah Sakit Khusus Mata'
        },
        { name: '30+', icon: 'icon-3.svg', description: 'Klinik & Pribadi' }
      ]
    }
  }
}
</script>

<style></style>
