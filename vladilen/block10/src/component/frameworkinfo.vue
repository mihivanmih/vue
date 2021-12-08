<template>
  <div class="card">
    <p>Название: <strong>{{ name }}</strong></p>
    <p>Версия: <strong>{{ version }}</strong></p>
    <p>Дабл: <strong>{{ doubleVersion }}</strong></p>

    <button class="btn warning" @click="changeToThree">Изменить на 3</button>

  </div>
</template>

<script>
import { computed, inject } from 'vue'

export default {
  // props: ['name', 'version'],
  emits: ['change-version'],
  setup (props, context) {
    // console.log(context)
    function change () {
      context.emit('change-version', 33)
    }

    const framework = inject('framework')

    return {
      changeToThree: change,
      name: computed(() => framework.name),
      version: computed(() => framework.version),
      // doubleVersion: computed(() => props.version * 2)
      doubleVersion: computed(() => framework.version * 2)
    }
  }
}
</script>

<style scoped>

</style>
