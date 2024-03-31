<script setup lang="ts">
import { ref, Ref, watch, reactive, computed } from "vue";
const emits = defineEmits(["update:modelValue"]);
const props = defineProps<{ obj: Object }>();
import child1 from "./child1.vue";
import child2 from "./child2.vue";

const _obj = computed(() => props.obj);
const coputedObj = computed({
  get() {
    return { a: { b: 1 } };
  },
  set(newV) {
    console.log(newV,'newvvvvv')
  },
});
coputedObj.value =  1
console.log(coputedObj.value.a.b)
// defineExpose({ childObj });
</script>

<template>
  <!-- <child1></child1>
  <child2></child2> -->
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
