<template>
  <div class="py-24 pt-40 bg-gradient-to-b from-white to-cyan-50">
    <div class="container">
      <Banner />
      <div class="w-full flex flex-col lg:flex-row">
        <!-- Sidebar -->
        <div class="xl:w-1/5 mb-8 content-start space-y-8 order-2">
          <div class="bg-white p-6 rounded-xl min-w-fit h-fit shadow-md">
            <h4 class="mb-3">
              Kategori
            </h4>
            <ul>
              <li>
                <a
                  href="/Product/Category/Katarak"
                  class="py-2 mx-3 flex hover:text-primary"
                >Katarak</a>
              </li>
              <li>
                <a
                  href="/Product/Category/VitreoRetina"
                  class="py-2 mx-3 flex hover:text-primary"
                >
                  Vitreo Retina
                </a>
              </li>
              <li class="bg-primary">
                <a
                  href="/Product/Category/Refraktif"
                  class="py-2 mx-3 flex text-white"
                >Refraktif</a>
              </li>
              <li>
                <a
                  href="/Product/Category/Instrumen"
                  class="py-2 mx-3 flex"
                >Instrumen</a>
              </li>
              <li>
                <a
                  href="/Product/Category/OphthalmicOperatingTable"
                  class="py-2 mx-3 flex hover:text-primary"
                >Ophthalmic Operating Table</a>
              </li>
              <li>
                <a
                  href="/Product/Category/OperatingChairStools"
                  class="py-2 mx-3 flex hover:text-primary"
                >Operating Chair & Stools</a>
              </li>
              <li>
                <a
                  href="/Product"
                  class="py-2 mx-3 flex hover:text-primary"
                >Semua Produk</a>
              </li>
            </ul>
          </div>
          <ContactCard />
        </div>
        <!-- Produk -->
        <div class="xl:w-4/5 lg:order-2">
          <div class="grid lg:ml-24 lg:order-2 mb-8">
            <div class="flex flex-col items-center md:flex-row justify-between gap-3 mb-12">
              <h3 class="text-center">
                Semua Produk
              </h3>
              <div class="relative">
                <select
                  id="grid-state"
                  class="block appearance-none w-full bg-white border border-gray-200 text-slate-500 py-3 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                >
                  <option>Terbaru</option>
                  <option>Terlama</option>
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
            <Pagination :total-items="2">
              <template #data="{page}">
                <DataLoader :endpoint="`http://localhost:1337/api/products?filters[category][id][$eq]=3&populate=*&pagination[pageSize]=6&pagination[page]=${page}`">
                  <template #loading-message>
                    <h3>Loading Products...</h3>
                  </template>
                  <template #error>
                    Produk kosong.
                  </template>
                  <template #loaded="{data}">
                    <ProductList :items="data" class="grid-cols-2 md:grid-cols-3" />
                  </template>
                </DataLoader>
              </template>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style></style>
