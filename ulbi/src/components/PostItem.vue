<template>
  <div class="post">
    <div>{{ post.id }}</div>
    <div>
      <div><strong>Название: </strong>{{ post.title }}</div>
      <div><strong>Описание: </strong>{{ post.body }}</div>
    </div>
    <div class="post_btns">
      <MyButton
        @click="$emit('remove', post)"
      >Удалить</MyButton>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.post {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}
.post div:last-child {
  margin-left: auto;
}
.post div{
  padding-left: 20px;
}
</style>