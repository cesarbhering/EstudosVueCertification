<template>
  <div @keydown.arrow-up="console.log('arrowup')" tabindex="0">
    <button @click="showTitle = !showTitle">mostrar titulo</button>
    <Transition name="teste">
      <h1 v-if="showTitle">Landing Views</h1>
    </Transition>
    <button @click="count++">Mais</button>
    <button @click="count--">Menos</button>
    <Third />
  </div>
</template>

<script setup>
import { provide, ref } from 'vue'
import Third from '../components/Third.vue'

const count = ref(0)
const showTitle = ref(false)
provide('count', count)
</script>

<style scoped>
.teste-enter-from,
.teste-leave-to {
  transition: all 0.5s ease-out;
  transform: translateX(20px);
  opacity: 0;
}

.teste-leave-from,
.teste-enter-to {
  opacity: 1;
  transition: all 0.5s ease-out;
}
</style>
