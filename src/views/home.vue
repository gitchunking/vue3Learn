<script setup lang="ts">
import {
  Ref,
  ref,
  onMounted,
  computed,
  ComputedRef,
  provide,
  watch,
  reactive,
} from "vue";
import { Plus } from "@element-plus/icons-vue";
import HelloWorld from "../components/HelloWorld.vue";
import stepper from "../components/stepper.vue";
const ico = "/favicon.ico";
const msg: Ref = ref("11");
const helloWorldRef: Ref = ref();
const obj: Ref = ref({
  list1: [],
  list2: [
    [1, 2],
    [1, 2],
  ],
});
const refObj = ref({ a: { b: { c: 1 } } });
const reactiveObj = reactive({ a: { b: { c: 1 } } });
watch(refObj.value, () => {
  console.log(refObj.value.a.b.c, "refObj.value.a.b.c111"); //打印
});
watch(refObj, () => {
  console.log(refObj.value.a.b.c, "refObj.value.a.b.c"); //不打印
});
watch(reactiveObj, () => {                                                                                       
  console.log(reactiveObj.a.b.c, "reactiveObj.a.b.c"); //打印
});
setTimeout(() => {
  refObj.value.a.b.c = 2;
  reactiveObj.a.b.c = 2;
}, 2000);
provide("testObj", refObj);

function add() {}
onMounted(() => {
  // helloWorldRef.value.childObj.text = 2;
});
</script>
<template>
  <!-- <img :src="ico" /> -->
  <!-- <h2>msg:{{ msg }}</h2> -->
  <!-- <HelloWorld ref="helloWorldRef" :msg="msg" v-model="obj"></HelloWorld> -->
  <!-- <el-button type="primary" size="default" @click="add" :icon="Plus"
    >新增</el-button
  > -->
  <stepper></stepper>
</template>
