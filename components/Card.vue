<template>
  <div class="p-6">
    <a
      :href="/product/ + slug"
      class="grid rounded-2xl border hover:shadow-md h-full bg-white hover:scale-[1.03] transition duration-300 ease-in-out"
    >
      <img
        :src="imageUrl"
        alt=""
        class="object-cover object-top w-full h-64 rounded-xl mb-6"
      >
      <div class="flex flex-col justify-between px-6 pb-6 h-32">
        <div class="grid gap-2">
          <div class="font-medium text-sm text-primary">{{ brand }}</div>
          <div class="text-lg font-semibold line-clamp-2">{{ itemName }}</div>
          <p class="text-xs text-slate-500">{{ category }}</p>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    category: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    brand: {
      type: String,
      required: true
    },
    itemName: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>
