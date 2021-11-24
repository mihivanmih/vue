<template>
  <div class="navbar">
    <div>Vue 3</div>
    <div class="navbar__btns">
      <router-link to="/posts">Посты</router-link>
      <router-link to="/about">О сайте</router-link>
      <router-link to="/store">store</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
.navbar {
  height: 50px;
  background: #eeeeee;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.navbar__btns {
  margin-left: auto;
}

.navbar__btns a {
  padding: 0 20px;
  color: #222222;
  text-decoration: none;
}

.navbar__btns a:hover {
  color: #42b983;
}
</style>