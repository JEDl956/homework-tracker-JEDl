import { defineStore } from 'pinia'

export const useAssignmentStore = defineStore('assignment', {
  state: () => ({
    assignments: []
  }),

  getters: {
    totalAssignments: (state) => state.assignments.length,
    completedAssignments: (state) =>
      state.assignments.filter(a => a.completed),
    pendingAssignments: (state) =>
      state.assignments.filter(a => !a.completed)
  },

  actions: {
    addAssignment(title) {
      this.assignments.push({
        id: Date.now(),
        title,
        completed: false
      })
    },

    toggleComplete(id) {
      const item = this.assignments.find(a => a.id === id)
      if (item) item.completed = !item.completed
    },

    deleteAssignment(id) {
      this.assignments = this.assignments.filter(a => a.id !== id)
    }
  }
})