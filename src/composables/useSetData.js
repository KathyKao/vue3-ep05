// composables 用來處理共用邏輯的部分
// 官方建議檔案命名前面使用 use 當開頭
import { readonly, ref } from "vue";

export function useSetData(val) {
  const data = ref(val);
  const setData = (val) => {
    data.value = val;
  };

  return {
    // 表示此 data 只可以讀不能設值, 要設值須透過 setData
    data: readonly(data),
    setData,
  };
}
