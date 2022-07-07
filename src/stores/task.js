import { defineStore } from 'pinia'
import { v4 as uuid } from 'uuid'

export const useTaskStore = defineStore({
  id: 'task',
  state: () => ({
    tasks: [
    {
      id: uuid(),
      title: 'Buy Groceries',
      description: 'Bananas, Milk, Carrots',
      created: new Date()
    },
    {
      id: uuid(),
      title: 'Wash Car',
      description: '',
      created: new Date()
    }
  ]
  }),
  actions: {
    addTask(task) {
      this.tasks.push(task)
    },
    removeTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId)
    },
    updateTask(editTask) {
      const index = this.tasks.findIndex(task => task.id === editTask.id)
      this.tasks[index].title = editTask.title
      this.tasks[index].description = editTask.description
    },
    getTask(taskId) {
      console.log(`task id: ${taskId}`)
      const task = this.tasks.find(task => task.id === taskId)
      return task
    }
  }
})