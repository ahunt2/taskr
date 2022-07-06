<script setup>
import TaskItem from './TaskItem.vue'
import { useRouter } from 'vue-router'
import { useTaskStore } from '../stores/task';

const router = useRouter()
const taskStore = useTaskStore()

function createTask() {
  router.push('/create-task')
}
</script>

<template>
  <div>
    <div class="overflow-hidden p-5">
      <div class="float-left flex">
        <h1 class="text-xl font-semibold">Tasks</h1>
      </div>
      <div class="float-right mr-4 text-blue-400" v-tooltip="'Create new task'">
        <font-awesome-icon class="hover:cursor-pointer" icon="fa-solid fa-circle-plus" size="lg" @click="createTask()" />
      </div>
    </div>
    <hr class="my-2" />
    <div class="list p-3">
      <ul>
        <TaskItem v-for="task in taskStore.tasks" :key="task.id" 
        :title="task.title" :created="task.created" 
        :description="task.description" :id="task.id" />
      </ul>
    </div>
  </div>
</template>