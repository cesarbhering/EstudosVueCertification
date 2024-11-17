<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <h1>Header</h1>
    <nav>
      <RouterLink to="/">Landing</RouterLink>
      <RouterLink to="/second">Second</RouterLink>
    </nav>
  </div>

  <RouterView />
</template>

<style scoped></style>
