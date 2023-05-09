<script setup lang="ts">
import waterFallVue from "./components/waterFallVue.vue";
import { ref, reactive } from "vue";
const a: number = 12;
const getName = (name: string) => {
  console.log(name);
  console.log(waterFall.value?.name);
};
const waterFall = ref<InstanceType<typeof waterFallVue>>();
</script>


<template>
  <div class="show container"><router-view></router-view></div>
</template>

<style scoped>
.show {
  max-width: 100%;
}
</style>


