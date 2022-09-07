<template>
  <div>
    <div v-if="loading">
      <!-- <slot name="loading">
        <Spinner />
      </slot> -->
      <slot name="loading-message">Loading your data...</slot>
    </div>
    <slot v-else-if="error" name="error">{{ error }}</slot>
    <slot v-else name="loaded" :data="data" />
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  props: {
    endpoint: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      data: null,
      loading: false,
      error: null,
      isDebouncing: true
    }
  },
  watch: {
    endpoint () {
      this.updateEndpoint()
    }
  },
  created () {
    this.findData()
    this.updateEndpoint = _.debounce(function () {
      this.findData()
    }, 300)
  },
  methods: {
    async findData () {
      try {
        this.error = null
        this.loading = true
        const results = await this.$axios.$get(this.endpoint)
        this.data = results.data
      } catch (e) {
        console.log(e)
        this.error = 'This resource is not loading'
      }
      this.loading = false
    }
  }
}
</script>

<style></style>
