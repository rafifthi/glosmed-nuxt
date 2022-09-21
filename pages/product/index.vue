<template>
  <div class="bg-gradient-to-b from-white to-sky-100">
    <div class="container bg-white py-24 pt-40">
      <Banner />
      <div class="w-full flex flex-col lg:flex-row">
        <!-- Sidebar -->
        <div class="xl:w-1/5 mb-8 content-start space-y-8 order-2">
          <div class="bg-white p-6 rounded-xl min-w-fit h-fit border">
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
              <li>
                <a
                  href="/Product/Category/Refraktif"
                  class="py-2 mx-3 flex hover:text-primary"
                >Refraktif</a>
              </li>
              <li>
                <a
                  href="/Product/Category/Instrumen"
                  class="py-2 mx-3 flex hover:text-primary"
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
              <li class="bg-primary">
                <a
                  href="/Product"
                  class="py-2 mx-3 flex text-white"
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
              <SortBar />
            </div>
            <Pagination :total-items="24">
              <template #data="{page}">
                <DataLoader :endpoint="`${$axios.defaults.baseURL}/products?populate=*&sort=sub_category&pagination[pageSize]=6&pagination[page]=${page}`">
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
  head: {
    title: 'Glosmed - Produk Kami',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Menyediakan produk terbaik di bidang kesehatan mata.'
      }
    ]
  }
}
</script>

<style></style>
