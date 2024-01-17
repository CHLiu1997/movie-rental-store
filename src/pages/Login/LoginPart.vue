<template>
  <h2>會員登入</h2>
  <form>
    <input
      class="inputtext"
      type="email"
      name="email"
      id="email"
      placeholder="請輸入電子郵件"
      autocomplete="username"
    />
    <input
      class="inputtext"
      type="password"
      name="current-password"
      id="current-password"
      placeholder="請輸入您的密碼"
      autocomplete="current-password"
    />
    <input class="confirm" type="button" value="登入" />
  </form>
  <router-link to="/login/register" class="switch">註冊</router-link>
</template>
