<template>
  <header class="header">
    <router-link to="/" class="home">
      <h1 class="text-gradient">JUST<br />WATCH</h1>
    </router-link>
    <label for="nav" class="nav-icon"></label>
    <input type="checkbox" id="nav" />
    <ul class="nav">
      <li>
        <router-link to="/category" class="nav-btn movielist"
          >電影列表</router-link
        >
      </li>
      <li>
        <router-link to="/login" class="nav-btn login">登入</router-link>
      </li>
    </ul>
  </header>
</template>
