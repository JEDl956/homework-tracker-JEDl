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
  max-width: 650px;
  margin: 60px auto;
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
  background: #ffffff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
}

/* Buttons */
button {
  margin-top: 10px;
  margin-right: 5px;
  padding: 6px 12px;
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
  padding: 6px;
  margin-right: 5px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

/* Add spacing between sections */
.card + .card {
  margin-top: 15px;
}
</style>