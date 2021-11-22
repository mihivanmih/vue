<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton"
}
</script>

<style scoped>
button {
  padding: 10px 15px;
  background: none;
  border: 1px solid #ccc;
  cursor: pointer;
}

button:hover {
  background: #ddd;
}
</style>