<script>
import { ref } from "vue";
import axios from "axios";

const setup = () => {
  const name = ref("");
  const email = ref("");
  const password = ref("");
  const verify = ref("");

  function registerHandler() {
    const nameValue = name.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const verifyValue = verify.value;

    if (!nameValue || !emailValue || !passwordValue || !verifyValue) {
      alert("欄位請勿空白！");
    } else if (passwordValue != verifyValue) {
      alert("兩次密碼輸入不同，請再次輸入！");
    } else {
      const user = {
        name: nameValue,
        email: emailValue,
        password: passwordValue,
      };
      axios
        .post("https://65c202bdf7e6ea59682a5d1d.mockapi.io/api/register", user)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      alert("註冊成功");
    }
  }
  return {
    name,
    email,
    password,
    verify,
    registerHandler,
  };
};
export default {
  setup,
};
</script>
<!-- <script>
import { reactive, ref } from "vue";

const setup = () => {
  const name = ref("");
  const email = ref("");
  const password = ref("");
  const verify = ref("");
  let account = reactive([]);

  if (JSON.parse(localStorage.getItem("Account"))) {
    account = JSON.parse(localStorage.getItem("Account"));
    console.log(JSON.parse(localStorage.getItem("Account")));
    if (account.includes(null)) {
      account.splice(0, 1);
    }
  }

  function registerHandler() {
    const nameValue = name.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const verifyValue = verify.value;
    const existEmail = reactive([]);

    //每次重新整理，existEmail會變成空值，所以每次的第一次可以重複註冊
    if (account.length > 0) {
      for (let i = 0; i < account.length; i++) {
        existEmail.push(account[i].email);
      }
    }
    if (!nameValue || !emailValue || !passwordValue || !verifyValue) {
      alert("欄位請勿空白！");
    } else if (passwordValue != verifyValue) {
      alert("兩次密碼輸入不同，請再次輸入！");
    } else if (existEmail.includes(emailValue)) {
      alert("此電子郵箱已被註冊！");
    } else {
      const user = {
        name: nameValue,
        email: emailValue,
        password: passwordValue,
      };
      account.push(user);
      localStorage.setItem("Account", JSON.stringify(account));
      alert("註冊成功");
    }
  }
  return {
    name,
    email,
    password,
    verify,
    registerHandler,
  };
};
export default {
  setup,
};
</script> -->
<template src="./template.html" />
