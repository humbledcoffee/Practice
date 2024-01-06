<script setup lang="ts">
import { ComputedRef, Ref, computed, reactive, ref,watch } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import type { typeUser, typeAgeStatus } from './App.ts'
const count:Ref<number> = ref<number>(0)
const user: typeUser = reactive<typeUser>({
  name: '咖啡',
  age:28
})
const increase:() => void = () => {
  count.value++
  user.age++
}

const ageStatus: ComputedRef<typeAgeStatus> = computed<typeAgeStatus>(() => 
   ({
    text: user.age > 30 ? '三十而立' : '还没立',
    disabled: user.age > 30
  })
)
watch(count, (newValue,oldValue) => {
console.log("🚀 ~ file: App.vue:22 ~ watch ~ oldValue:", oldValue)
console.log("🚀 ~ file: App.vue:22 ~ watch ~ newValue:", newValue)
document.title = `目前点击次数为${count.value}`
})
</script>
<template>
  <div>{{ count }}</div>
  <div>{{ user.age }}</div>
  <button
    type="button"
    @click="increase"
    :disabled="ageStatus.disabled"
  >
    {{ ageStatus.text }}
  </button>
  <HelloWorld msg="Vite + Vue" />   
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
