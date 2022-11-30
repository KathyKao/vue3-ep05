<script setup>
import { useWindowPosiotn } from "./composables/useWindowPosiotn.js";
import { useSetData } from "./composables/useSetData.js";
import { useFetchCard } from "./composables/useFetchCard.js";
import { onMounted } from "vue";

// 利用解構取得值
const { pageX, pageY } = useWindowPosiotn();

// 類似 react state hook, 雖然 vue 要自己撰寫, 但是相對彈性大
const { data, setData } = useSetData(0);
// data.value++; // 會報錯, 因為 readonly

const { result, errorMessage, fetchInit } = useFetchCard();
onMounted(() => {
  fetchInit();
});
</script>

<template>
  <h1>{{ data }}</h1>
  <button @click="setData(4)">add</button>
  <h1>pageX: {{ pageX }} : pageY: {{ pageY }}</h1>

  <h1 v-if="result.length === 0">Loading.......</h1>
  <div v-else>{{ result }}</div>
  <h1 v-if="errorMessage !== ''">{{ errorMessage }}</h1>
</template>

<style scoped></style>
