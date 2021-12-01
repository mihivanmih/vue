<template>
  <div class="modal-backdrop" @click="$emit('close')"></div>
  <div class="modal">
    <h3>Это заголовок</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, doloribus excepturi nisi obcaecati odio provident repellendus! Commodi deserunt minus sequi!</p>
  </div>
</template>

<script>
export default {
  emits: ['close'],
  name: 'AppModel'
}
</script>

<style scoped>

</style>
