<template>
  <header class="navbar">
    <strong>Vue Composition Api</strong>

    <ul class="navbar-menu">
      <li>
        <router-link to="/">Главная</router-link>
      </li>
      <li>
        <router-link to="/reusable">Переиспользование</router-link>
      </li>
      <li>
        <router-link to="/vuex">vuex</router-link>
      </li>
    </ul>

  </header>
  <div class="container with-nav">
    <router-view></router-view>
  </div>
</template>

<script>
// import { reactive, toRef, watch, ref, provide, onBeforeMount, onMounted, onBeforeUpdate, onUpdated } from 'vue'
// import Frameworkinfo from '@/component/frameworkinfo'
//
// export default {
//   components: { Frameworkinfo },
//   setup () {
//     // const name = ref('VueJs')
//     // const version = ref(3)
//     // console.log(isRef(name))
//     // console.log(isRef(version.value))
//     const firsName = ref('')
//
//     const framework = reactive({
//       name: 'VueJs',
//       version: 366
//     })
//
//     provide('framework', framework)
//
//     const textInput = ref(555)
//     // console.log(isReactive(framework))
//     // console.log('framework', framework.name)
//
//     function changeInfo () {
//       framework.name = 'React'
//       framework.version = 7
//       console.log('React')
//     }
//
//     // const doubleVersion = computed(() => {
//     //   return framework.version * 2
//     // })
//
//     onBeforeMount(() => {
//       console.log('onBeforeMount')
//     })
//     onMounted(() => {
//       console.log('onMounted')
//     })
//     onBeforeUpdate(() => {
//       console.log('onBeforeUpdate')
//     })
//     onUpdated(() => {
//       console.log('onUpdated')
//     })
//
//     // watch(doubleVersion, (newValue, oldValue) => {
//     watch(firsName, (newValue, oldValue) => {
//       console.log('new', newValue)
//       console.log('old', oldValue)
//     })
//
//     function changeVersion (num) {
//       framework.version = num
//     }
//
//     console.log('dsdad', toRef(framework, 'name').value)
//
//     return {
//       // name: framework.value.name,
//       // version: framework.value.version,
//       // ...toRefs(framework),
//       // ...toRef(framework, 'name').value,
//       change: changeInfo,
//       // doubleVersion,
//       textInput,
//       firsName,
//       changeVersion
//     }
//   }
// }
</script>

<style>
.navbar-menu li {
  margin-left: 10px;
}
</style>
