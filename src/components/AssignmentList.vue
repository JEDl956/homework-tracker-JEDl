<script setup>
import { useAssignmentStore } from '../stores/assignmentStore'

const store = useAssignmentStore()
</script>

<template>
  <div>
    <h2>Homework List</h2>

    <p v-if="store.assignments.length === 0">
      📭 No homework added yet.
    </p>

    <ul>
      <li v-for="assignment in store.assignments" :key="assignment.id">

        <span :style="{
          textDecoration: assignment.completed ? 'line-through' : 'none',
          color: assignment.completed
            ? 'gray'
            : (assignment.dueDate && new Date(assignment.dueDate) < new Date()
                ? 'red'
                : 'black')
        }">
          {{ assignment.title }}
        </span>

        <br />

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

        <button
          @click="store.toggleComplete(assignment.id)"
          :disabled="assignment.completed"
        >
          Complete
        </button>

        <button @click="store.deleteAssignment(assignment.id)">
          Delete
        </button>

      </li>
    </ul>
  </div>
</template>

<style scoped>
li {
  margin-bottom: 14px;
}

h2 {
  color: #4f46e5;
}

button {
  margin-right: 5px;
  padding: 5px 10px;
  border: none;
  background-color: #4f46e5;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}

button:disabled {
  background-color: gray;
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background-color: #3730a3;
}
</style>