// composables 用來處理共用邏輯的部分
// 官方建議檔案命名前面使用 use 當開頭
import axios from "axios";
import { ref } from "vue";

export function useFetchCard() {
  const errorMessage = ref("");
  const result = ref([]);

  const fetchInit = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      result.value = res.data;
    } catch (error) {
      errorMessage.value = "API 發生錯誤";
    }
  };
  return { result, errorMessage, fetchInit };
}
