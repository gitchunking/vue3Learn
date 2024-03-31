<script setup lang="ts">
import { Ref, ref, onMounted, computed, ComputedRef } from "vue";
import { Plus } from "@element-plus/icons-vue";
import HelloWorld from "../components/HelloWorld.vue";
const ico = "/favicon.ico";
const msg: Ref = ref("11");
const helloWorldRef: Ref = ref();
const obj: Ref = ref({
  a: {
    b: [{ c: 1 }],
  },
});
const testC = computed({
  get: () => {
    return obj.value.a.b[0].c;
  },
  set: (val) => {
    msg.value = val;
  },
});
testC.value = 2;
function add() {
  testC.value = new Date().getTime();
  console.log("testC.value", testC.value);
  console.log("msg.value", msg.value);
}
onMounted(() => {
  helloWorldRef.value.childObj.text = 2;
});
</script>
<template>
  <!-- <img :src="ico" />
  <h2>msg:{{ msg }}</h2>
  <h2>testC:{{ testC }}</h2>
  <HelloWorld ref="helloWorldRef" :msg="msg" v-model="obj"></HelloWorld>
  <el-button type="primary" size="default" @click="add" :icon="Plus"
    >新增</el-button
  >
  <el-button type="primary" size="default" :icon="Plus">{{ testC }}</el-button> -->
</template>
