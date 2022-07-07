<script setup>
import { ref, computed } from 'vue'

const props = defineProps(['date'])
const formatedDate = computed(() => {
  const day = props.date.getDate()
  const month = props.date.getMonth()
  const year = props.date.getFullYear()

  return `${day}/${month}/${year}`
})

</script>

<template>
  <h1>{{ formatedDate }}</h1>
</template>