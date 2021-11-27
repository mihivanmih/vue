<template>
  <div class="card">
    <h3>{{ id }} {{ title }}</h3>
    <button class="btn" @click="open">{{ isOpenItem ? 'Закрыть' : 'Открыть' }}</button>
    <button class="btn danger" v-if="wasRead" @click="$emit('unmark-news', id)">Отметить непрочитанной</button>
    <div v-if="isOpenItem">
      <hr>
      <p v-if="isOpenItem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur debitis dolorum et ipsam
        iure laborum nam provident quibusdam. Accusantium, aspernatur exercitationem explicabo fugit nam nihil
        obcaecati perferendis quaerat repudiandae voluptates.</p>
      <button class="btn primary" v-if="!wasRead" @click="read">Прочесть новость</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    wasRead: {
      type: Boolean
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
      validator (value) {
        return value === true || value === false
      }
    }
  },
  emits: {
    'open-news': null,
    'unmark-news': null,
    'read-news' (id) {
      if (id) {
        return true
      }
      console.log('Идишник потерялся')
    }
  },
  name: 'cardItem',
  data () {
    return {
      isOpenItem: this.isOpen
    }
  },
  methods: {
    open () {
      this.isOpenItem = !this.isOpenItem
      if (this.isOpenItem) {
        this.$emit('open-news', 0)
      }
    },
    read () {
      this.isOpenItem = !this.isOpenItem
      this.$emit('read-news', this.id)
    }
    // unmark () {
    //   this.$emit('unmark-news', this.id)
    // }
  }
}
</script>

<style scoped>

</style>
