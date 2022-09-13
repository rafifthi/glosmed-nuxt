<template>
  <div class="bg-white py-20 px-2">
    <div class="container">
      <div class="mb-12">
        <h2 class="text-center mb-10 lg:hidden">Why Choose Us?</h2>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-24 items-center">
        <div class="w-full flex justify-center mb-6">
          <img
            src="../assets/img/why_illust.svg"
            alt="hero"
            class="w-80 md:w-96 lg:w-full max-w-md"
          >
        </div>

        <div class="flex flex-col justify-start self-center">
          <h2 class="mb-10 hidden lg:block">Why Choose Us?</h2>
          <div v-for="item in factors" :key="item.name" class="flex py-4">
            <img
              :src="require('../assets/img/' + item.icon)"
              class="h-12 mr-6 self-center"
              alt=""
            >
            <div>
              <h4 class="mb-1">{{ item.name }}</h4>
              <p class="text-sm leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facere, corrupti debitis? Itaque repellendus temporibus placeat?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Why',
  data () {
    return {
      factors: [
        { name: 'Produk eksklusif', icon: 'eye.svg', description: '#' },
        { name: 'Product', icon: 'globe.svg', description: '#' },
        { name: 'Career', icon: 'local_shipping.svg', description: '#' },
        { name: 'Gallery', icon: 'local_atm.svg', description: '#' }
      ]
    }
  }
}
</script>

<style></style>
