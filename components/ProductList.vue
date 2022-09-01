<template>
  <div v-if="items" class="grid gap-8">
    <div v-for="item in items" :key="item.id">
      <slot name="item" :item="item">
        <a
          :href="/product/ + item.attributes.slug"
          class="grid rounded-2xl shadow-md h-full bg-slate-50 hover:scale-[1.03] transition duration-300 ease-in-out"
        >
          <img
            :src="'http://localhost:1337'+item.attributes.thumbnail.data.attributes.url"
            alt=""
            class="object-cover object-top w-full h-64 rounded-xl mb-6"
          >
          <div class="flex flex-col justify-between px-6 pb-6">
            <div class="grid gap-2">
              <div class="font-medium text-sm text-primary">{{ item.attributes.brand.data.attributes.name }}</div>
              <div class="text-lg font-medium line-clamp-2">{{ item.attributes.name }}</div>
              <p class="text-xs text-slate-500">{{ item.attributes.category.data.attributes.name }}</p>
            </div>
          </div>
        </a>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style></style>
