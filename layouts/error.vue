<template>
  <div class="py-24 pt-40">
    <div class="container">
      <div class="grid gap-4 justify-items-center">
        <h1 v-if="error.statusCode === 404">
          Oops!
        </h1>
        <h1 v-else>
          An error occurred
        </h1>
        <p>
          You are lost.
        </p>
        <img src="../assets/img/404.svg" alt="404" class="h-96">
        <div class="flex space-x-4 items-center mt-12">
          <a
            href="javascript:history.back()"
            class="px-5 py-3 rounded-lg border-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 inline-block mr-2"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="5" y1="12" x2="19" y2="12" />
              <line x1="5" y1="12" x2="11" y2="18" />
              <line x1="5" y1="12" x2="11" y2="6" />
            </svg>Go back
          </a>
          <a href="/" class="bg-secondary text-white px-5 py-4 rounded-lg hover:bg-opacity-90 transition duration-300 ease-in-out">Take me home</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'error',
  // eslint-disable-next-line vue/require-prop-types
  props: ['error']
}
</script>
