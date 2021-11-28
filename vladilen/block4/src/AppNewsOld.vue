<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости {{ now }}</h2>
      <span> Открыто <strong>{{ openRate }}</strong> | Прочитано: <strong>{{ readRate }}</strong></span>
      <hr>
      <card-item
        v-for="item in news"
        :key="item.id"
        :title="item.title"
        :id="item.id"
        :isOpen="item.isOpen"
        :wasRead="item.wasRead"
        @open-news="openNews"
        @read-news="readNews"
        @unmark-news="unmarkNews"
      ></card-item>
    </div>
  </div>
</template>

<script>

import CardItem from '@/conponent/cardItem'

export default {
  components: { CardItem },
  data () {
    return {
      now: new Date().toLocaleDateString(),
      isOpen: false,
      news: [
        {
          id: 1,
          title: 'Байден победил',
          isOpen: true,
          wasRead: false
        },
        {
          id: 2,
          title: 'Vue 3 успешно работает',
          wasRead: false
        }
      ],
      openRate: 0,
      readRate: 0
    }
  },
  methods: {
    openNews (data) {
      this.openRate += data + 1
    },
    readNews (id) {
      this.readRate++
      const idx = this.news.findIndex(news => news.id === id)
      this.news[idx].wasRead = true
    },
    unmarkNews (id) {
      this.readRate--
      const news = this.news.find(news => news.id === id)
      news.wasRead = false
    }
  },
  provide () {
    return {
      title: 'Список новостей',
      news: this.news
    }
  }
}
</script>

<style scoped>
h2 {
  color: #42b983;
}
</style>
