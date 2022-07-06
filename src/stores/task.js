import { defineStore } from 'pinia'

export const useTaskStore = defineStore({
  id: 'task',
  state: () => ({
    tasks: []
  }),
  actions: {
    addTask(task) {
      this.tasks.push(task)
    },
    removeTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId)
    }
  }
})
