<script setup>
import { ref } from 'vue'
import { useAssignmentStore } from '../stores/assignmentStore'

const store = useAssignmentStore()
const title = ref('')

function addAssignment() {
  if (title.value.trim() !== '') {
    store.addAssignment(title.value)
    title.value = ''
  }
}
</script>

<template>
  <div>
    <h2>Add Homework</h2>
    <input v-model="title" placeholder="Homework title" />
    <button @click="addAssignment">Add</button>
  </div>
</template>