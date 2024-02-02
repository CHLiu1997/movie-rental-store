<template>
  <h2>註冊會員</h2>
  <form class="register-form">
    <label for="name">暱稱</label>
    <input
      v-model="name"
      type="text"
      name="name"
      id="name"
      placeholder="請輸入您的暱稱"
      autocomplete="on"
    />
    <label for="email">帳號/電子郵件</label>
    <input
      v-model="email"
      type="email"
      name="email"
      id="email"
      placeholder="請輸入電子郵件"
      autocomplete="on"
    />
    <label for="password">密碼</label>
    <input
      v-model="password"
      type="password"
      name="password"
      id="password"
      placeholder="請輸入您的密碼"
      autocomplete="off"
    />
    <label for="verify">確認密碼</label>
    <input
      v-model="verify"
      type="password"
      name="verify"
      id="verify"
      placeholder="請再次輸入您的密碼"
      autocomplete="off"
    />
    <button class="confirm" type="submit" @click.prevent="registerHandler">
      註冊
    </button>
    <router-link to="/login" class="switch">會員登入</router-link>
  </form>
</template>
<script>
import { reactive, ref } from "vue";
// import axios from "axios";
// import AES from "crypto-js/aes";
// import encUtf8 from "crypto-js/enc-utf8";

// axios
//   .get("http://localhost:3000/api/users")
//   .then((response) => console.log(response));
// .catch((error) => console.log(error));
const setup = () => {
  const name = ref("");
  const email = ref("");
  const password = ref("");
  const verify = ref("");
  let account = reactive([]);
  // 加密
  // const ciphertext = AES.encrypt("test", "ryan").toString();
  // 解密
  // const bytes = AES.decrypt(ciphertext, "ryan");
  // const originalText = bytes.toString(encUtf8);

  // account.push(JSON.parse(localStorage.getItem("Account")));
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

    // console.log("before function", existEmail);
    //每次重新整理，existEmail會變成空值，所以每次的第一次可以重複註冊
    if (account.length > 0) {
      for (let i = 0; i < account.length; i++) {
        existEmail.push(account[i].email);
        // console.log("in function account[i]", account[i]);
      }
      // console.log("in function", existEmail);
    }
    // console.log("after function", existEmail);
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
        // password: AES.encrypt(passwordValue, "ryan").toString(),
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
</script>
