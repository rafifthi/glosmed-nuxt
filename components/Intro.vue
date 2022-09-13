<template>
  <div class="py-24 pb-20 bg-sky-50">
    <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 container">
      <img
        src="../assets/img/intro.png"
        alt="hero"
        class="rounded-xl object-contain"
      >

      <div class="xl:max-w-lg self-center">
        <div class="subtitle text-primary mb-2">
          Selamat Datang di Glosmed
        </div>
        <h2 class="mb-4">
          Melayani Negri
        </h2>
        <p class="mb-10 leading-loose text-sm">
          Glosmed mensuplai alat-alat kesehatan dan bahan
          penunjang operasi mata lainnya ke Rumah Sakit Umum
          dan Rumah Sakit khusus Mata yang ada di seluruh Indonesia.
        </p>
        <a
          href="/About"
          class="btn-secondary"
        >Selengkapnya
          <svg
            class="w-6 h-6 inline-block"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            /></svg></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Intro'
}
</script>

<style></style>
