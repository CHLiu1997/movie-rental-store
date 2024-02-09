<script>
const setup = () => {
  function subscribeHandler() {
    let discount = prompt("請輸入優惠碼");
    if (discount == null) {
      alert("訂閱失敗");
    } else if (discount == "") {
      alert("訂閱成功");
    } else if (discount == "justwatch") {
      alert("優惠碼輸入成功");
      alert("訂閱成功");
    } else {
      alert("請輸入正確的優惠碼");
    }
  }
  return {
    subscribeHandler,
  };
};
export default { setup };
</script>
<template src="./template.html" />
<style src="./style.css" />
