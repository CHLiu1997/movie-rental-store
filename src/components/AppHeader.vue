<template>
  <header class="header">
    <a class="home" href="/#">
      <h1 class="text-gradient">JUST<br />WATCH</h1>
    </a>
    <label for="nav" class="nav-icon"></label>
    <input type="checkbox" id="nav" />
    <ul class="nav">
      <li>
        <router-link class="nav-btn register" :to="{ name: 'login' }"
          >立即註冊</router-link
        >
      </li>
      <li>
        <a class="nav-btn login" href="/#/login">登入</a>
      </li>
    </ul>
  </header>
</template>
