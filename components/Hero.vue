<template>
  <div class="container my-24 pt-12 mb-36">
    <div class="flex flex-col lg:flex-row justify-between gap-24">
      <div class="max-w-lg self-center">
        <h1 class="mb-5">
          See the world better.
        </h1>
        <p class="max-w-md mb-10 text-sm leading-loose">
          hero message is the statement that appears at the top of a web
          page—often the homepage, usually in a large font—that communicates
          something about the organization.
        </p>
        <div class="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
          <a href="/Product" class="btn-secondary shadow-lg shadow-secondary/50">Pesan Sekarang</a>
          <!-- <a href="#" class="btn-tertiary">Malesuada</a> -->
        </div>
      </div>

      <div class="mt-12 lg:mt-9">
        <img
          src="../assets/img/hero_img.png"
          alt="hero"
          class="object-contain h-full"
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
