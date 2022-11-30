// composables 用來處理共用邏輯的部分
// 官方建議檔案命名前面使用 use 當開頭
import { onMounted, onUnmounted, ref } from "vue";

export function useWindowPosiotn() {
  const pageX = ref(0);
  const pageY = ref(0);

  const movePosition = (e) => {
    pageX.value = e.pageX;
    pageY.value = e.pageY;
  };

  onMounted(() => {
    window.addEventListener("mousemove", movePosition);
  });

  // 做監聽事件, 在 onUnmounted(destroyed) 生命週期要移除
  onUnmounted(() => {
    window.removeEventListener("mousemove", movePosition);
  });

  return {
    pageX,
    pageY,
  };
}
