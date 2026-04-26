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
  </div>
</template>