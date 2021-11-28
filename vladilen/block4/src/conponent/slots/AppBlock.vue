<template>
  <div class="card">
    <slot name="header"></slot>
    <slot name="default">
      No text
    </slot>
    <div class="footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppBlock',
  mounted () {
    console.log(this.$slots)
  }
}
</script>

<style scoped>
  .footer {
    background: #42b983;
    height: 20px;
    width: 100%;
  }
</style>
