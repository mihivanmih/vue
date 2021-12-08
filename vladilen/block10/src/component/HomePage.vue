<template>
  <app-alert
    v-if="simpleAlert"
    title="Работаем с Composition"
    type="danger"
    @click="close"
  ></app-alert>
  <div class="card">
    <h1>Vue Composition Api</h1>
    <small>data, methods, computed, watch</small>
    <hr>
    <div class="form-control">
      <!--        <input type="text" ref="textInput">-->
      <input type="text" v-model="firsName">
    </div>

    <button class="btn" @click="change">Изменить</button>
    <button class="btn danger" @click="toogle">Alert</button>
  </div>

  <frameworkinfo
    :name="name"
    :version="version"
    @change-version="changeVersion"
    class="test-from-app">
    <template #footer><p>футер</p></template>
  </frameworkinfo>
</template>

<script>
import frameworkinfo from '@/component/frameworkinfo'
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, provide, reactive, ref, toRefs, watch } from 'vue'
import AppAlert from '@/component/AppAlert'
import { useAlert } from '@/hooks/alert'
export default {
  components: { AppAlert, frameworkinfo },
  setup () {
    // const name = ref('VueJs')
    // const version = ref(3)
    // console.log(isRef(name))
    // console.log(isRef(version.value))
    const firsName = ref('')

    const framework = reactive({
      name: 'VueJs',
      version: 366
    })

    provide('framework', framework)

    const textInput = ref(555)
    // console.log(isReactive(framework))
    // console.log('framework', framework.name)

    function changeInfo () {
      framework.name = 'React'
      framework.version = 7
      console.log('React')
    }

    // const doubleVersion = computed(() => {
    //   return framework.version * 2
    // })

    onBeforeMount(() => {
      console.log('onBeforeMount')
    })
    onMounted(() => {
      console.log('onMounted')
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })
    onUpdated(() => {
      console.log('onUpdated')
    })

    // watch(doubleVersion, (newValue, oldValue) => {
    watch(firsName, (newValue, oldValue) => {
      // console.log('new', newValue)
      // console.log('old', oldValue)
    })

    function changeVersion (num) {
      framework.version = num
    }

    const { alert: simpleAlert, close, toogle } = useAlert()
    // console.log('dsdad', toRef(framework, 'name').value)

    return {
      // name: framework.value.name,
      // version: framework.value.version,
      ...toRefs(framework),
      // ...toRef(framework, 'name').value,
      change: changeInfo,
      // doubleVersion,
      textInput,
      simpleAlert,
      close,
      toogle,
      firsName,
      changeVersion
      //  ...useAlert()
    }
  }
}
</script>

<style scoped>

</style>
