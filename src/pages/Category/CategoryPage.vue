<script>
import { reactive, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import router from "@/router";
import {
  Pagination,
  Navigation,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const setup = () => {
  const modules = ref([Pagination, Navigation, EffectCoverflow, Autoplay]);
  const categoryList = reactive([
    {
      label: "所有類型",
      value: "All",
      url: "",
    },
    {
      label: "科幻",
      value: "Science fiction",
      url: "sci-fi",
    },
    {
      label: "恐怖",
      value: "Horror",
      url: "horror",
    },
    {
      label: "浪漫",
      value: "Romantic",
      url: "romantic",
    },
    {
      label: "動作",
      value: "Action",
      url: "action",
    },
    {
      label: "喜劇",
      value: "Comedy",
      url: "comedy",
    },
    {
      label: "經典",
      value: "Classic",
      url: "classic",
    },
    {
      label: "動畫",
      value: "Animation",
      url: "animation",
    },
  ]);
  const currentUrl = router.currentRoute.value.params.activedUrl;
  const length = categoryList.length;
  let actived = ref({ label: "所有類型", value: "All", url: "" });
  const addActived = () => {
    for (let i = 0; i < length; i++) {
      if (categoryList[i].url === currentUrl) {
        actived.value = categoryList[i];
      }
    }
    return actived.value;
  };
  addActived();
  return {
    modules,
    categoryList,
    actived,
  };
};
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup,
};
// 將addActive的資料傳出並儲存即可(或儲存後傳出)
// @click觸發addActive後在函式內更新了actived的資料，但外面的actived卻沒更新，導致每次更新網頁時渲染至網頁上的資料還是顯示最原始的資料
// 解決方法是將更新後的資料儲存至新的變數當中，下次更新網頁時以新的變數來顯示
// 方法一
// 1. 預設顯示 actived
// 2. 觸發 addActive 改動 actived 資料(此時網址變動)
// 3. 將改動的資料儲存至 newActived
// 4. 點擊分類時使用 newActived 的資料來渲染網頁
// 5. 上述方法會使得點擊新分類後固定為最後一次點擊的分類，所以不適用(嘗試方法二)

// 方法二
// 2.1 預設顯示 actived
// 2.2 觸發 addActive 改動 actived 資料(此時網址變動)
// 2.3 利用暫存在 addActive 中的 actived 資料來渲染網站
// 2.4 但重整後應該是要同一種分類，而不是回去到所有分類，是關閉網站後重新開啟才應該是預設分類
// 2.5 有可能是方法一才正確
// let actived = ref({ label: "所有類型", value: "All", url: "" });
// const addActive = (category) => {
//   actived.value = category;
// };
// const newActived = () => {
//   let actived;
// };
// let newActived = addActive();

// console.log("actived not in function", actived.value);
// console.log("newActived not in function", newActived.value);
</script>
<template src="./template.html" />
<style scoped src="./style.css" />
