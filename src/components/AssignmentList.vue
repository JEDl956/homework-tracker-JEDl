<script setup>
import { useAssignmentStore } from '../stores/assignmentStore'

const store = useAssignmentStore()
</script>

<template>
  <div>
    <h2>Homework List</h2>

    <p v-if="store.assignments.length === 0">No homework added yet.</p>

    <ul>
      <li v-for="assignment in store.assignments" :key="assignment.id">
        <span :style="{ textDecoration: assignment.completed ? 'line-through' : 'none' }">
          {{ assignment.title }}
        </span>

        <button @click="store.toggleComplete(assignment.id)">Done</button>
        <button @click="store.deleteAssignment(assignment.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>