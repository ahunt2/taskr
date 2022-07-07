<script setup>
import EditTaskForm from '../components/EditTaskForm.vue'
import { useTaskStore } from '../stores/task'

const props = defineProps(['id'])
const taskStore = useTaskStore()
const task = taskStore.getTask(props.id)
</script>

<template>
  <div class="h-screen flex justify-center">
    <EditTaskForm class="center-x h-2/3 w-96 min-w-fit h-[32rem] min-h-fit rounded-lg border-slate-200 border-2 shadow-xl"
    :id="props.id" :title="task.title" :description="task.description" />
  </div>
</template>