<script setup>
import { useAssignmentStore } from '../stores/assignmentStore'

const store = useAssignmentStore()
</script>

<template>
  <div>
    <h2>Homework Stats</h2>

    <p>Total: {{ store.totalAssignments }}</p>
    <p>Completed: {{ store.completedAssignments.length }}</p>
    <p>Pending: {{ store.pendingAssignments.length }}</p>

    <!-- Show message when all done -->
    <p v-if="store.pendingAssignments.length === 0 && store.totalAssignments > 0">
      🎉 All homework completed!
    </p>

    <!-- Clear all button -->
    <button @click="store.clearAll()">Clear All</button>
  </div>
</template>

<style scoped>
h2 {
  color: #4f46e5;
}

button {
  margin-top: 10px;
  padding: 6px 10px;
  border: none;
  background-color: #ef4444;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #b91c1c;
}
</style>