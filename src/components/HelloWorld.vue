<script setup lang="ts">
import { ref, Ref, watch, reactive, computed, onMounted } from "vue";
const emits = defineEmits(["update:modelValue"]);
const props = defineProps<{ obj: Object }>();
import child1 from "./child1.vue";
import child2 from "./child2.vue";
// const _obj = computed(() => props.obj);
const computedObj = computed({
  get() {
    return { a: { b: 1 } };
  },
  set(newV) {
    console.log(newV, "newvvvvv");
  },
});
computedObj.value = 1;
const computedData = () => {
  return refNum.value;
};
computedData.value = 2;
const refNum = ref(1);
onMounted(() => {
  console.log("hhhhh");
});
console.log(refNum);
console.log(computedObj.value.a.b);
// defineExpose({ childObj });
function setWaterMarker() {}
</script>

<template>
  <div></div>
  <!-- <child1 v-model="computedObj"></child1>
  <child2 v-model="computedObj"></child2> -->
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
