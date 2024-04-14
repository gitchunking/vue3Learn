<script setup lang="ts">
import { ref, Ref, watch, reactive, computed, onMounted, inject } from "vue";
const emits = defineEmits(["update:modelValue"]);
const props = defineProps<{ obj: Object }>();
import child1 from "./child1.vue";
import child2 from "./child2.vue";
import WaterMark from "l-watermark";
// WaterMark.page({
//   targe: document.body,
//   text: "王鑫",
//   secret: true,
//   color: "rgba(0, 0, 0, 0.4)",
//   fontSize: 24,
// });
// const _obj = computed(() => props.obj);
const testObj = inject('testObj')
setTimeout(() => {
  testObj.value.a.b.c = 3
}, 3000);
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
  <!-- <child1 v-model="computedObj"></child1>
  <child2 v-model="computedObj"></child2> -->
  <span>
    {{ testObj.a.b.c }}
  </span>
  <div class="cart">我是购物车</div>
  <div class="wrap">
    <div>
      <div>
        <div>
          <div class="item">我是指定元素</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cart {
  width: 100px;
  height: 100px;
  background-color: red;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  display: none;
}
body:has(.item) {
  width: 10px;
  height: 10px;
  .cart {
    display: block;
  }
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
