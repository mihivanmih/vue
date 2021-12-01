<template>
  <div class="alert" :class="classAlert">
    <p class="alert-title">{{ title }}</p>
    <p>{{ text }}</p>
    <button class="btn" :class="classAlert" v-if="closable" @click="$emit('close')">Закрыть</button>
  </div>
</template>

<script>
export default {
  emits: ['close'],
  props: {
    title: String,
    text: String,
    classAlert: String,
    closable: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>

</style>
