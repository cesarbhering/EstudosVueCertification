<template>
  <div>
    <h1 id="cleton">SERÁ QUE VAI ???</h1>
    <h1>{{ input3 }}</h1>
    <Fourth
      @updateText="logTextLength"
      ref="child"
      :first="input1"
      :second="input2"
      v-model:input33="input3"
      :qlqcoisa="'alt'"
    >
      <template #numbers="slotProps">
        <TransitionGroup name="list" tag="h3">
          <h3 v-for="(number, index) of slotProps.numbers" :key="index">
            {{ number }}
          </h3>
        </TransitionGroup>
      </template>
    </Fourth>
    <div>
      <!--       COUNTCOMPUTED
      {{ countComputed }} -->
      child ref
      {{ child }}
    </div>
    <div>
      <h1>define model</h1>
      <input v-model="input1" />
      <input v-model="input2" />
      <button @click="$sayHello()">PLUGINGIGJNIGN</button>
    </div>
  </div>
</template>

<script setup>
import { watch, ref, onMounted, computed } from 'vue'
import Fourth from '../components/Fourth.vue'

function logTextLength(payload) {
  debugger
  console.log(payload)
}
const child = ref()

const contador = ref(0)

const input1 = ref('')
const input2 = ref('')
const input3 = ref('CLEITIN')

watch(
  contador,
  () => {
    console.log('contador passei aqui')
  },
  { immediate: true }
)

onMounted(() => {
  console.log('Inner Child ref', child.value.scopedTeste /* .value.scopedTeste.value */)
  contador.value++
})
</script>

<style scoped>
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
</style>
