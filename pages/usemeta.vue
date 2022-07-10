<template>
  <h1>usemeta</h1>
</template>

<script>
import { defineComponent, useMeta } from '@nuxtjs/composition-api'

export default defineComponent({
  // You need to define an empty head to activate this functionality
  head: {},
  setup() {
    useMeta({ title: 'usemeta' })
  },
})
</script>
