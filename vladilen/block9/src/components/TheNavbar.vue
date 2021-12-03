<template>
  <header class="navbar">
    Vuex  <h2>Счетчик {{ counter }}</h2>
    <button class="btn primary" @click="add">Добавить</button>
  </header>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    counter () {
      // return this.$store.getters.counter
      return this.$store.getters['coutMod/counter']
    }
    // ...mapGetters('coutMod', ['counter'])
  },
  methods: {
    // ...mapMutations(['increment']),
    ...mapMutations({
      addFive: 'coutMod/increment'
    }),
    add () {
      this.addFive({ value: 5 })
      // this.increment({ value: 5 })
      // this.$store.commit('increment', {
      //   value: 5
      // })
      // this.$store.commit({
      //   type: 'increment',
      //   value: 5
      // })
    }
  }
}
</script>
