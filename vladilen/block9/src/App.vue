<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <div class="card">
      <h1>Про Vuex {{ test }}</h1>
      <h2>Счетчик {{ counter }} ( {{ doubleCounter }} )</h2>
      <button class="btn" @click="increment">Добавить</button>
      <button class="btn danger" @click="incrementAsync({ value: 20, delay: 500 })">Добавить 10</button>
    </div>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters(['test']),
    ...mapGetters('coutMod', ['counter', 'doubleCounter'])
  },
  methods: {
    ...mapMutations({
      incrementApp: 'coutMod/increment'
    }),
    ...mapActions('coutMod', ['incrementAsync']),
    increment () {
      this.incrementApp({ value: 1 })
    }
    // incrementAsync () {
    //   this.$store.dispatch('incrementAsync', { value: 20, delay: 2500 })
    // }
  },
  components: { TheNavbar }
}
</script>

<style>
</style>
