<script>
import axios from "axios";
import { ref } from "vue";
// import router from "@/router";
const setup = () => {
  const email = ref("");
  const password = ref("");

  function loginHandler() {
    const emailValue = email.value;
    const passwordValue = password.value;
    const user = {
      email: emailValue,
      password: passwordValue,
    };
    if (!emailValue) {
      alert("請輸入電子信箱");
    } else if (!passwordValue) {
      alert("請輸入密碼");
    } else {
      axios
        .post("https://65c202bdf7e6ea59682a5d1d.mockapi.io/api/login", user)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      alert("登入成功");
      // router.push("/");
    }
  }
  return {
    email,
    password,
    loginHandler,
  };
};
export default {
  setup,
};
</script>
<template src="./template.html" />
