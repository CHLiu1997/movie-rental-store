<template>
  <h2>會員登入</h2>
  <form>
    <label for="email">帳號/電子郵件</label>
    <input
      type="email"
      name="email"
      id="email"
      placeholder="請輸入電子郵件"
      autocomplete="on"
    />
    <label for="password">密碼</label>
    <input
      type="password"
      name="password"
      id="password"
      placeholder="請輸入您的密碼"
      autocomplete="off"
    />
    <button class="confirm" type="submit" @click.prevent="test">登入</button>
  </form>
  <router-link to="/login/register" class="switch">註冊會員</router-link>
</template>
<script setup>
const test = () => {
  alert("酷喔");
};
</script>
