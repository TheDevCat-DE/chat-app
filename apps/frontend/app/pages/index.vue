<script setup lang="ts">
const { $api } = useNuxtApp()

const result = ref("loading...")

onMounted(async () => {
  try {
    const res = await $api.ping()
    result.value = res.message
  } catch {
    result.value = "API not reachable (expected for now)"
  }
})
</script>

<template>
  <h1>API Client Test</h1>
  <p>{{ result }}</p>
</template>
