<template>
  <div class="container">
      <div class="card" v-if="show">
        <h2 v-color:[type].blink.hover="myColor">Разговор про директивы</h2>
        <div class="form-control">
          <label for="inp"> Активный по умолчанию</label>
          <input v-focus type="text" id="inp">
        </div>
        <button class="btn" @click="myColor = 'rgb(19 221 212)'">Сделать синим</button>
        <button class="btn" @click="type = type === 'color' ? 'background' : 'color' ">Переключить тип</button>
      </div>
  </div>
</template>

<script>
import focusDirective from '@/directive/focusDirective'
import colorDirective from '@/directive/colorDirective'

export default {
  name: 'App',
  data () {
    return {
      myColor: '#c25205',
      type: 'color',
      show: true
    }
  },
  // mounted () {
  //   setTimeout(() => {
  //     this.show = false
  //   }, 3000)
  // },
  directives: {
    focus: focusDirective,
    color: colorDirective
  }
}
</script>

<style>
</style>
