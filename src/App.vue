<script setup>
import AssignmentForm from './components/AssignmentForm.vue'
import AssignmentList from './components/AssignmentList.vue'
import AssignmentStats from './components/AssignmentStats.vue'
</script>

<template>
  <main>
    <h1>📚 Homework Assignment Tracker</h1>

    <div class="card">
      <AssignmentForm />
    </div>

    <div class="card">
      <AssignmentStats />
    </div>

    <div class="card">
      <AssignmentList />
    </div>
  </main>
</template>

<style scoped>
main {
  max-width: 600px;
  margin: 50px auto;
  text-align: center;
  font-family: Arial, sans-serif;
}

/* Title */
h1 {
  color: #4f46e5;
  margin-bottom: 30px;
}

/* Card sections */
.card {
  background: #f9fafb;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

/* Buttons */
button {
  margin-left: 10px;
  padding: 5px 10px;
  border: none;
  background-color: #4f46e5;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #3730a3;
}

/* Input */
input {
  padding: 5px;
  border-radius: 6px;
  border: 1px solid #ccc;
}
</style>