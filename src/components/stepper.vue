<template>
    <div>
      <!-- tid 属性用于测试，可以快速获取 DOM -->
      <button @click="count--" tid="dec-btn">-</button>
      <span>{{ count }}</span>
      <button @click="count++" tid="inc-btn">+</button>
    </div>
  </template>
  
  <script setup lang="ts">
    import { ref } from 'vue'
  
    interface Props {
        initial: number;
    }
  
    const props = withDefaults(defineProps<Props>(), {
      initial: 0
    })
  
    const count = ref(props.initial)
  </script>
  