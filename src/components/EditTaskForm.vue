<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { v4 as uuid } from 'uuid'
import { useTaskStore } from '../stores/task';

const title = ref(props.title)
const description = ref(props.description)
const router = useRouter()
const taskStore = useTaskStore()
const props = defineProps(['id', 'title', 'description'])

function updateForm() {
  const task = {
    id: props.id,
    title: title.value,
    description: description.value
  }

  taskStore.updateTask(task)
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
        <h1 class="text-xl font-semibold">Edit Task</h1>
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

      <div class="flex p-3justify-center space-x-4 btn-group">
        <button @click="updateForm()" class="w-24 h-8 bg-slate-800 rounded-md text-slate-50 hover:bg-blue-800">Update</button>
        <button @click="cancelForm()" class="w-24 h-8 bg-slate-800 rounded-md text-slate-50 hover:bg-blue-800">Cancel</button>
      </div>

    </form>
  </div>
</template>

<style scoped>
.btn-group {
  position: fixed;
  left: 50%;
  bottom: 20px;
  transform: translate(-50%, -50%);
  margin: 0 auto;
}
</style>