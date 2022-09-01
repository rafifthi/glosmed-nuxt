<template>
  <div class="grid justify-items-center gap-12">
    <slot name="data" :page="page" class="" />
    <!-- Previous -->
    <div class="flex space-x-1">
      <button
        title="previous"
        type="button"
        class="bg-white inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-l-md border-gray-700"
        :disabled="page <= 1"
        @click="changePageNumber(page - 1)"
      >
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-4"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <span v-for="(item, index) in new Array(numberPages)" :key="index" class="">
        <button
          class="bg-white inline-flex items-center px-4 py-2 text-sm font-semibold border border-gray-700"
          @click="changePageNumber(index + 1)"
        >
          {{ index + 1 }}
        </button>
      </span>
      <!-- Next -->
      <button
        title="next"
        type="button"
        class="bg-white inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-r-md border-gray-700"
        :disabled="page >= numberPages"
        @click="changePageNumber(page + 1)"
      >
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-4"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    totalItems: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      page: Number(this.$route.query.page) || 1,
      perPage: 6
    }
  },
  computed: {
    numberPages () {
      return Math.ceil(this.totalItems / this.perPage)
    }
  },
  methods: {
    changePageNumber (newPage) {
      this.page = newPage
      this.$router.push({
        path: this.$route.path,
        query: {
          ...this.$route.query,
          page: newPage
        }
      })
    }
  }
}
</script>

<style></style>
