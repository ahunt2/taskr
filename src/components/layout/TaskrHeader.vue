<script setup>
import { RouterLink, useRouter } from 'vue-router';

const router = useRouter()

function routeHome() {
  router.push('/')
}
</script>

<template>
  <div class="px-4 py-3 bg-blue-700 text-slate-50 overflow-hidden">
    <div class="float-left flex hover:cursor-pointer" @click="routeHome()">
      <font-awesome-icon icon="fa-solid fa-list-check" class="mt-1.5 mr-2" />
      <h1 class="text-xl font-semibold">Taskr</h1>
    </div>
    <nav class="float-right">
      <RouterLink to="/">Home</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
</style>
