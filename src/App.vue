<script setup>
import AssignmentForm from './components/AssignmentForm.vue'
import AssignmentList from './components/AssignmentList.vue'
import AssignmentStats from './components/AssignmentStats.vue'
</script>

<template>
  <main>
    <h1>Homework Assignment Tracker</h1>

    <AssignmentForm />
    <AssignmentStats />
    <AssignmentList />
  </main>
</template>

<style scoped>
main {
  max-width: 700px;
  margin: 40px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
}
</style>