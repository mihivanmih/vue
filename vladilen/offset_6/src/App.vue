<template>
  <div class="container column">
    <form class="card card-w30" @submit.prevent="addContent">
      <div class="form-control">
        <label for="type">Тип блока</label>
        <select id="type" v-model="selected">
          <option value="title" >Заголовок</option>
          <option value="subtitle">Подзаголовок</option>
          <option value="avatar">Аватар</option>
          <option value="text">Текст</option>
        </select>
      </div>

      <div class="form-control">
        <label for="value">Значение</label>
        <textarea id="value" rows="3" v-model.trim="text" @input="changeText"></textarea>
      </div>

      <button class="btn primary" :disabled="disabled">Добавить</button>
    </form>

    <div class="card card-w70">
      <h3 v-if="content.length <= 0">Добавьте первый блок, чтобы увидеть результат</h3>

      <app-component :content="content"></app-component>
    </div>
  </div>
  <div class="container">
    <p>
      <button class="btn primary" @click="loadPeople">Загрузить комментарии</button>
    </p>
    <div class="card" v-if="comments.length > 0">
      <h2>Комментарии</h2>
      <ul class="list">
        <li class="list-item" v-for="coment in comments" :key="coment.id">
          <div>
            <p><strong>{{ coment.email }}</strong></p>
            <small>{{ coment.body }}</small>
          </div>
        </li>
      </ul>
    </div>
    <div class="loader" v-if="loader"></div>
  </div>
</template>

<script>
import AppComponent from '@/components/AppComponent'
import axios from 'axios'
export default {
  data () {
    return {
      text: '',
      disabled: true,
      selected: 'title',
      content: [],
      comments: [],
      loader: false
    }
  },
  methods: {
    addContent () {
      this.content.push({
        id: Math.random(),
        text: this.text,
        component: this.selected
      })
      this.text = ''
      this.selected = 'title'
      this.disabled = true
    },
    changeText () {
      this.disabled = this.text.length < 3
    },
    async loadPeople () {
      try {
        this.loader = true
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=42')
        this.comments = data
        this.loader = false
      } catch (e) {
      }
    }
  },
  components: { AppComponent }
}
</script>

<style>
.avatar {
  display: flex;
  justify-content: center;
}

.avatar img {
  width: 150px;
  height: auto;
  border-radius: 50%;
}
</style>
