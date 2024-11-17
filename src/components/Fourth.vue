<template>
  <div ref="innerChildRef">
    <div>
      fourth Componente
      {{ count }}
      <h1>clientwidth</h1>
      <b @click="() => console.log(divref.clientWidth)">console log clientwidth</b>
    </div>
    <div ref="divref">
      <slot name="numbers" :numbers="scopedTeste">
        <h1>caso nao venha nada</h1>
      </slot>
    </div>
    <div>
      <input v-focus v-model="text" @input="emit('updateText', text.length)" />
    </div>
    <div>
      <button @click="scopedTeste.push(scopedTeste.length + 1)">Mais no array</button>
      <button @click="scopedTeste.pop()">Menos no array</button>
    </div>
    <div :class="classObject">
      LENGTH x10
      {{ countComputed }}
    </div>
    <div>
      <button @click="objetoTeste.a.b = 'CACILDO'">change objetoTeste.a.b</button>
      {{ objetoTeste }}
    </div>
    <h1>{{ input1 }}</h1>
    <h1>{{ input2 }}</h1>
    <h1>input 33</h1>
    <input v-model="input33" />

    <h1>ajhdkjad</h1>
    <h1>ajhdkjad</h1>

    <h1>ajhdkjad</h1>

    <h1>ajhdkjad</h1>

    <button @[btnteste]="(e) => console.log(e.key)">TESTE KEY DOWN</button>
    <h3>asdads{{ qlqcoisa }}</h3>
  </div>
</template>

<script setup>
import {
  inject,
  ref,
  defineEmits,
  watch,
  computed,
  reactive,
  onMounted,
  defineExpose,
  defineModel,
  nextTick,
  defineProps
} from 'vue'
const count = inject('count')

const btnteste = ref('keydown')

const props = defineProps({
  qlqcoisa: String
})

const isActive = ref(true)
const hasError = ref(true)
const innerChildRef = ref(null)

const input1 = defineModel('first')
const input2 = defineModel('second')
const input33 = defineModel('input3')

const divref = ref(null)
const vFocus = {
  mounted: (el) => el.focus()
}

const countComputed = computed(() => {
  return scopedTeste.value.length * 10
})

const scopedTeste = ref([1, 2, 3, 4])

const objetoTeste = ref({ a: { b: 'cleiton' } })
const text = ref('')
defineExpose({
  scopedTeste
})

watch(
  objetoTeste,
  () => {
    console.log('objetotestemudou')
  },
  { deep: true }
)

watch(text, (newV, oldV) => {
  if (newV.length > 10) {
    console.log('maior que 10')
    console.log(newV.length, oldV.length)
  }
})

const classObject = ref({
  activeClass: true,
  'error-Class': true
})

const emit = defineEmits({
  updateText: (textLength) => {
    console.log('textLength ', textLength)
    console.log('entrei an validacao')
    if (textLength < 3) {
      console.log('text too short')
      throw new Error('emite nao validado')
    }
    return true
  }
})
/* const emit = defineEmits(['updateText']) */
</script>

<style scoped>
.error-Class {
  background-color: red;
}

.activeClass {
  color: green;
}
</style>
