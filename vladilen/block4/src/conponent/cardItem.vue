<template>
  <div class="card">
    <h3>{{ id }} {{ title }}</h3>
    <app-button @action="open">{{ isOpenItem ? 'Закрыть' : 'Открыть' }}</app-button>
    <app-button
      @action="$emit('unmark-news', id)"
      :color="'danger'"
      v-if="wasRead">Отметить непрочитанной</app-button>
    <div v-if="isOpenItem">
      <hr>
      <p v-if="isOpenItem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur debitis dolorum et ipsam
        iure laborum nam provident quibusdam. Accusantium, aspernatur exercitationem explicabo fugit nam nihil
        obcaecati perferendis quaerat repudiandae voluptates.</p>
      <app-button
        color="primary"
        v-if="!wasRead"
        @action="read">Прочесть новость</app-button>

      <app-list></app-list>
    </div>
  </div>
</template>

<script>
import AppButton from '@/conponent/AppButton'
import AppList from '@/conponent/AppList'
export default {
  components: { AppList, AppButton },
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
