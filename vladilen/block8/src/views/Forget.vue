<template>
  <div class="card">
    <h2>Забыл пароль? Так вспоминай!</h2>

    <button class="btn" @click="goToLogin">Обратно к логину</button>
    <button class="btn" @click="$router.push('/')">На главную</button>
  </div>
</template>

<script>
export default {
  name: 'Forget',
  methods: {
    goToLogin () {
      this.$router.push('/login')
    }
  }
}
</script>
