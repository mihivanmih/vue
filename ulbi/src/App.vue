<template>
  <Navbar />
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/UI/Navbar"
export default {
  components: {
    Navbar
  }
}
</script>

<style>
*, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h1 {
  margin-bottom: 20px;
}
</style>