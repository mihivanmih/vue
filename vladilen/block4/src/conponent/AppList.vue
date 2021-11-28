<template>
  <hr>
  <h4>{{ title }}</h4>
  <div>
    <ul>
      <li v-for="item in news" :key="item.title">{{ item.title }}
        <span v-if="item.wasRead">!!!</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  inject: ['title', 'news']
}
</script>

<style scoped>

</style>
