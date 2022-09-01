<template>
  <div class="container my-24 pt-16">
    <div class="flex flex-col lg:flex-row justify-between">
      <div class="max-w-xl self-center">
        <h1 class="mb-5">
          See the world better.
        </h1>
        <p class="mb-10">
          hero message is the statement that appears at the top of a web
          page—often the homepage, usually in a large font—that communicates
          something about the organization.
        </p>
        <div class="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
          <a href="/Product" class="btn-secondary">Pesan Sekarang</a>
          <!-- <a href="#" class="btn-tertiary">Malesuada</a> -->
        </div>
      </div>

      <div class="mt-12 lg:mt-9 grid justify-items-center">
        <img
          src="../assets/img/hero_img.png"
          alt="hero"
          class="object-contain h-96"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style></style>
