<template>
  <h4>Создание поста</h4>
  <form @submit.prevent>
    <MyInput
        v-model:value="post.title"
        type="text"
        placeholder="Название"
    />
    <MyInput
        v-model:value="post.body"
        type="text"
        placeholder="Описание"
    />
    <MyButton
        class="newPostButton"
        @click="createPost"
    >Создать
    </MyButton>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost() {
      this.id = Date.now()
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: ''
      }
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
h4 {
  margin-bottom: 20px;
}
.newPostButton {
  align-self: flex-start;
  margin-bottom: 20px;
}

</style>