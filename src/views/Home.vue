<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { ElButton } from 'element-plus'

const count = ref(0)
watch(count, (newValue, oldValue) => {
  console.log(`The new counter value is: ${count.value}`)
})
const inc = () => {
  count.value += 1
}
const reset = () => {
  count.value = 0
}

onMounted(inc)
</script>

<template>
  <div>Home</div>
  <p>{{ count }}</p>
  <el-button size="small" @click="inc">点击</el-button>
  <el-button size="small" @click="reset">重置</el-button>
</template>

<style scoped></style>
