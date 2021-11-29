<template>
  <div class="container">
    <form class="card" @submit.prevent="submitForm">
      <h1>Анкета на Vue разработчика!</h1>
<!--      <div class="form-control">-->
<!--        <label for="name">Как тебя зовут?</label>-->
<!--        <input-->
<!--            type="text"-->
<!--            id="name"-->
<!--            placeholder="Введи имя"-->
<!--            v-model.trim="name"-->
<!--            :class="{invalid: errors.name}"-->
<!--        >-->
<!--      <small v-if="errors.name">{{ errors.name }}</small>-->
<!--      </div>-->

      <app-input
          placeholder="Введи имя"
          label="Как тебя зовут?"
          :error="errors.name"
          v-model:valueName="name"
      ></app-input>

      <div class="form-control">
        <label for="age">Выбери возраст</label>
        <input
            type="number"
            id="age"
            max="70"
            v-model.number="age"
        >
      </div>

      <div class="form-control">
        <label for="city">Твой город</label>
        <select id="city" v-model="city">
          <option value="spb">Санкт-Петербург</option>
          <option value="msk">Москва</option>
          <option value="kzn">Казань</option>
          <option selected value="nsk">Новосибирск</option>
        </select>
      </div>

      <div class="form-checkbox">
        <span class="label">Готов к переезду в Токио?</span>
        <div class="checkbox">
          <label><input type="radio" v-model="radio" name="trip" value="yes"/>Да</label>
        </div>

        <div class="checkbox">
          <label><input type="radio" v-model="radio" name="trip" value="no"/>Нет</label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Что знаешь во Vue?</span>
        <div class="checkbox">
          <label><input type="checkbox" v-model="checkbox" name="skilss" value="Vuex"/> Vuex</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" v-model="checkbox" name="skilss" value="Vue CLI"/> Vue CLI</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" v-model="checkbox" name="skilss" value="Vue Router"/> Vue Router</label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Наши правила</span>
        <div class="checkbox">
          <label><input type="checkbox" v-model="agree" name="agree" value="yes"/>Согласны с правилами?</label>
        </div>
      </div>

      <button type="submit" class="btn primary">Отправить</button>
    </form>
  </div>
</template>

<script>
import AppInput from '@/components/AppInput'
export default {
  components: {AppInput},
  data () {
    return {
      name: '',
      age: 23,
      city: 'msk',
      radio: null,
      checkbox: [],
      agree: false,
      errors: {
        name: null
      }
    }
  },
  methods: {
    formIsValue () {
      let isValid = true

      if(this.name.length === 0) {
        this.errors.name = 'Введите ваше имя'
        isValid = false
      } else {
        this.errors.name = ''
        isValid = true
      }

      return isValid

    },
    submitForm (event) {
      if(this.formIsValue()){
        console.log("Отправляем")
      }
    }
  }
}
</script>

<style>
.form-control input.invalid {
  border: 1px solid #e53935;
}
</style>
