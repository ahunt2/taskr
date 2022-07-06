<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { v4 as uuid } from 'uuid'
import { useTaskStore } from '../stores/task';

const title = ref('')
const description = ref('')
const router = useRouter()
const taskStore = useTaskStore()

function submitForm() {
  const task = {
    id: uuid(),
    title: title.value,
    description: description.value,
    created: new Date()
  }

  taskStore.addTask(task)
  router.push('/')
}

function cancelForm() {
  title.value = ''
  description.value = ''
  router.push('/')
}
</script>

<template>
  <div>
    <div class="overflow-hidden p-5">
      <div class="float-left flex">
        <h1 class="text-xl font-semibold">Create Task</h1>
      </div>
    </div>
    <hr class="my-2" />

    <form class="mt-12" @submit.prevent>
      <div class="overflow-hidden">
        <div class="float-left flex p-4">
          <label class="text-lg font-semibold ml-8">Title:</label>
        </div>
        <div class="float-right p-3">
          <input v-model="title" type="text" class="w-72 px-3 py-2 mr-8 shadow-md rounded" />
        </div>
      </div>

      <div class="overflow-hidden">
        <div class="float-left flex py-6">
          <label class="text-lg font-semibold ml-12">Description:</label>
        </div>
        <div class="float-right p-3">
          <textarea v-model="description" type="text" rows="5" class="w-72 px-3 py-2 mr-8 shadow-md rounded"></textarea>
        </div>
      </div>

      <div class="flex p-3 mt-24 justify-center space-x-4">
        <button @click="submitForm()" class="w-24 h-8 bg-slate-800 rounded-md text-slate-50">Submit</button>
        <button @click="cancelForm()" class="w-24 h-8 bg-slate-800 rounded-md text-slate-50">Cancel</button>
      </div>

    </form>
  </div>
</template>