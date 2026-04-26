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
        
        <span :style="{
          textDecoration: assignment.completed ? 'line-through' : 'none',
          color: assignment.completed ? 'gray' : 'black'
        }">
          {{ assignment.title }}
        </span>

        <br />

        <!-- ✅ Formatted Due Date MM-DD-YYYY -->
        <small v-if="assignment.dueDate">
          📅 Due: {{
            new Date(assignment.dueDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit'
            }).replace(/\//g, '-')
          }}
        </small>

        <br />

        <button @click="store.toggleComplete(assignment.id)">Complete</button>
        <button @click="store.deleteAssignment(assignment.id)">Delete</button>

      </li>
    </ul>
  </div>
</template>

<style scoped>
li {
  margin-bottom: 12px;
}
</style>