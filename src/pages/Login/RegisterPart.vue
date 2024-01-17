<template>
  <h2>註冊會員</h2>
  <form class="register-form">
    <label for="name">暱稱</label>
    <input
      class="inputtext"
      type="text"
      name="name"
      id="name"
      placeholder="請輸入您的暱稱"
    />
    <label for="email">帳號/電子郵件</label>
    <input
      class="inputtext"
      type="email"
      name="email"
      id="email"
      placeholder="請輸入電子郵件"
      autocomplete="username"
    />
    <label for="password">密碼</label>
    <input
      class="inputtext"
      type="new-password"
      name="new-password"
      id="new-password"
      placeholder="請輸入您的密碼"
      autocomplete="new-password"
    />
    <label for="verify">確認密碼</label>
    <input
      class="inputtext"
      type="password"
      name="verify"
      id="verify"
      placeholder="請再次輸入您的密碼"
      autocomplete="new-password"
    />
    <input class="confirm" type="button" value="註冊" />
    <router-link to="/login" class="switch">登入</router-link>
  </form>
</template>
