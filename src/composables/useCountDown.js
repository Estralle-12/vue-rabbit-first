// 封装倒计时逻辑函数
import { computed, onUnmounted, ref } from "vue";
import dayjs from "dayjs";

export const useCountDown = () => {
  let timer = null;
  // 1.响应式数据
  const time = ref(0);
  //   格式化为 xx分xx秒
  const formatTime = computed(() => dayjs.unix(time.value).format("mm分ss秒"));
  // 2.开启倒计时的函数
  const start = (currentTime) => {
    // 开启倒计时逻辑
    // 核心逻辑编写：每隔一秒钟减1
    time.value = currentTime;
    timer = setInterval(() => {
      time.value--;
    }, 1000);
  };

  //   组件销毁时清除定时器
  onUnmounted(() => {
    timer && clearInterval(timer);
  });
  return { formatTime, start };
};
