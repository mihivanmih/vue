<template>
  <div class="avatar">
    <img :src="text" />
  </div>
</template>
<script>
export default {
  name: 'AppAvatar',
  props: ['text']
}
</script>

<style scoped>

</style>
