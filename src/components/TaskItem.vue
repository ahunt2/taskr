<script setup>
import { useTaskStore } from '../stores/task';
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps(['title', 'created', 'description', 'id'])
const taskStore = useTaskStore()
const router = useRouter()
const completed = ref(false)

function completeTask() {
  console.log('complete task')

  completed.value = !completed.value

  // TODO: add dynamic class for completed task (light green background)
}

function removeTask() {
  taskStore.removeTask(props.id)
}

function editTask() {
  router.push('/edit-task')
}
</script>

<template>
  <li>
    <div class="flex relative" :class="{ complete: completed}">
      <div>
        <h1>{{ props.title }}</h1>
      </div>
      <div class="absolute right-0 space-x-4">
        <button @click="editTask()" v-tooltip="'Edit Task'">
          <font-awesome-icon class="hover:cursor-pointer" icon="fa-solid fa-pen" size="lg" />
        </button>
        <button @click="completeTask()" class="text-green-700" v-tooltip="'Complete Task'">
          <font-awesome-icon class="hover:cursor-pointer" icon="fa-solid fa-circle-check" size="lg" />
        </button>
        <button @click="removeTask()" class="text-red-700" v-tooltip="'Remove Task'">
          <font-awesome-icon class="hover:cursor-pointer" icon="fa-solid fa-circle-xmark" size="lg" />
        </button>
      </div>
    </div>
  </li>
</template>

<style scoped>
.complete {
  border-left: 3px solid green;
}
</style>