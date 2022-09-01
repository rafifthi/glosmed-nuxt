<template>
  <div class="py-24 pt-40 bg-gradient-to-b from-white to-cyan-100">
    <div class="container">
      <div class="p-2 text-center mb-6 lg:mb-16 grid justify-items-center">
        <div class="max-w-xl">
          <h2 class="mb-4">
            Join Us Now!
          </h2>
          <p>
            We found our purposes through the impact we make on others. You,
            too, can find yours.
          </p>
        </div>
      </div>

      <div class="grid md:grid-cols-7 px-3 gap-6 mb-24">
        <div class="w-full md:col-span-2">
          <div class="relative">
            <div
              class="pointer-events-none absolute inset-y-0 left-2 flex items-center px-2 text-slate-500"
            >
              <img src="../../assets/img/map_icon.svg" alt="">
            </div>
            <select
              id="grid-state"
              class="block appearance-none w-full bg-white border border-gray-200 text-slate-500 py-3 px-12 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option>Semua Lokasi</option>
              <option>Jakarta</option>
              <option>Bandung</option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div class="w-full md:col-span-2">
          <div class="relative">
            <div
              class="pointer-events-none absolute inset-y-0 left-2 flex items-center px-2 text-gray-700"
            >
              <img src="../../assets/img/department_icon.svg" alt="">
            </div>
            <select
              id="grid-state"
              class="block appearance-none w-full bg-white border border-gray-200 text-slate-500 py-3 px-12 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option>Semua Departemen</option>
              <option>Marketing</option>
              <option>Teknisi</option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div class="w-full md:col-span-2">
          <div class="relative">
            <div
              class="pointer-events-none absolute inset-y-0 left-2 flex items-center px-2 text-slate-500"
            >
              <img src="../../assets/img/type_icon.svg" alt="">
            </div>
            <select
              id="grid-state"
              class="block appearance-none w-full bg-white border border-gray-200 text-slate-500 py-3 px-12 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option>Semua Tipe</option>
              <option>Missouri</option>
              <option>Texas</option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </div>

        <button class="btn-secondary w-full self-end h-fit">
          Cari
        </button>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 my-12 gap-12">
        <div v-for="career in careers.data" :key="career.id" class="card bg-white p-6 rounded-xl hover:shadow-lg grid gap-5 divide-y-4">
          <div class="grid gap-4">
            <h3>
              {{ career.attributes.name }}
            </h3>
            <div class="category flex gap-4">
              <div class="flex gap-1">
                <img src="../../assets/img/department_icon.svg" alt="">
                <p>{{ career.attributes.division.data.attributes.name }}</p>
              </div>
              <div class="flex gap-1">
                <img src="../../assets/img/map_icon.svg" alt="">
                <p>{{ career.attributes.office.data.attributes.name }}</p>
              </div>
            </div>
          </div>
          <div class="grid gap-8">
            <a href="/" class="btn-secondary mt-5">Daftar</a>
            <a :href="/career/ + career.id" class="text-primary text-sm text-center font-medium">Lihat Detail</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    careers: []
  }),
  async fetch () {
    this.careers = await this.$axios.$get('http://localhost:1337/api/careers?populate=*')
  }
}
</script>

<style></style>
