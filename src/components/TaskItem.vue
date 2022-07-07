<script setup>
import { useTaskStore } from '../stores/task';
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import FormatDate from './FormatDate.vue'

const props = defineProps(['title', 'created', 'description', 'id'])
const taskStore = useTaskStore()
const router = useRouter()
const completed = ref(false)
const expanded = ref(false)

function completeTask() {
  console.log('complete task')

  completed.value = !completed.value
}

function removeTask() {
  taskStore.removeTask(props.id)
}

function editTask() {
  router.push(`/edit-task/${props.id}`)
}

function toggleExpand() {
  expanded.value = !expanded.value
}
</script>

<template>
  <li>
    <div class="m-3 p-3 pb-7 relative rounded border-gray-500 border" :class="{ complete: completed}">
      <div class="flex relative">

        <div class="title">
          <h1 class="text-lg font-semibold">{{ props.title }}</h1>
        </div>

        <div class="date"> 
          <FormatDate class="text-lg font-semibold" :date="props.created" />
        </div>

        <div class="absolute right-4 space-x-4">
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

      <div class="description my-1" v-if="expanded">
        <h3>{{ props.description }}</h3>
      </div>

      <div class="relative" v-if="props.description !== ''">
        <button class="expand-btn" v-if="!expanded" v-tooltip="'Expand'" @click="toggleExpand()">
          <font-awesome-icon class="hover:cursor-pointer" icon="fa-solid fa-caret-down" size="lg" />
        </button>
        <button class="expand-btn" v-else v-tooltip="'Collapse'" @click="toggleExpand()">
          <font-awesome-icon class="hover:cursor-pointer" icon="fa-solid fa-caret-up" size="lg" />
        </button>
      </div>
    </div>
  </li>
</template>

<style scoped>
.complete {
  border-left: 5px solid limegreen;
}

.date {
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 1rem auto;
}

.expand-btn {
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 1rem auto;
}
</style>