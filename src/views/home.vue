<script setup lang="ts">
import {
  Ref,
  ref,
  onMounted,
  computed,
  ComputedRef,
  watch,
  reactive,
} from "vue";
import { Plus } from "@element-plus/icons-vue";
import HelloWorld from "../components/HelloWorld.vue";
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
const refNum = ref(1);
const refObj = ref({ a: { b: { c: 1 } } });
const reactiveNum = reactive({ a: 1 });
const reactiveObj = reactive({ a: { b: { c: 1 } } });

watch(refNum.value, () => {
  console.log("refNum.value"); //不打印
});
watch(
  () => refNum.value,
  () => {
    console.log("() => refNum.value"); //打印
  }
);
watch(refNum, () => {
  console.log("refNum"); //打印
});
watch(reactiveNum.a, () => {
  console.log("reactiveNum"); //不打印
});
watch(
  () => reactiveNum.a,
  () => {
    console.log("() => reactiveNum.a"); //打印
  }
);
console.log(12345)
// watch(refObj.value, () => {
//   console.log("watch");
// });
watch(reactiveObj, () => {
  console.log("watchreactiveObj");
});
setTimeout(() => {
  refNum.value = 2;
  refObj.value.a.b.c = 2;
  reactiveNum.a = 2;
  reactiveObj.a.b.c = 2;
}, 1000);
// const testC = computed({
//   get: () => {
//     return obj.value.a.b[0].c;
//   },
//   set: (val) => {
//     msg.value = val;
//   },
// });
// testC.value = 2;
function add() {}
onMounted(() => {
  // helloWorldRef.value.childObj.text = 2;
});
</script>
<template>
  <img :src="ico" />
  <h2>msg:{{ msg }}</h2>
  <HelloWorld ref="helloWorldRef" :msg="msg" v-model="obj"></HelloWorld>
  <el-button type="primary" size="default" @click="add" :icon="Plus"
    >新增</el-button
  >
</template>
