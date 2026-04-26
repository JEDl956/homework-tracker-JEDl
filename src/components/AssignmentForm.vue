<script setup>
import { ref } from 'vue'
import { useAssignmentStore } from '../stores/assignmentStore'

const store = useAssignmentStore()

const title = ref('')
const dueDate = ref('')

function addAssignment() {
  if (title.value.trim() !== '' && dueDate.value !== '') {
    store.addAssignment(title.value, dueDate.value)
    title.value = ''
    dueDate.value = ''
  }
}
</script>

<template>
  <div>
    <h2>Add Homework</h2>

    <input
      v-model="title"
      placeholder="Homework title"
      @keyup.enter="addAssignment"
    />

    <input
      type="date"
      v-model="dueDate"
    />

    <button @click="addAssignment">Add</button>
  </div>
</template>

<style scoped>
input {
  padding: 6px;
  margin-right: 5px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

button {
  padding: 6px 10px;
  border: none;
  background-color: #4f46e5;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #3730a3;
}
</style>