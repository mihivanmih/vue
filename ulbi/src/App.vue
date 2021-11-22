<template>
  <div class="app">

    <h1>Страница с постами</h1>
    <input type="text" v-model.trim="modificatorValue">

    <MyButton
      class="user_button"
      @click="showDialog"
    >
      Создать пост
    </MyButton>

    <MyDialog v-model:show="dialogVisible">
      <PostFom
          @create="createPost"
      />
    </MyDialog>

    <PostList
        :posts="posts"
        @remove="removePost"
    />
  </div>
</template>

<script>
import PostFom from "@/components/PostFom"
import PostList from "@/components/PostList"

export default {
  components: {
    PostList, PostFom
  },
  data() {
    return {
      posts: [
        {id: 1, title: 'JavaScript 1', body: 'Описание поста 1'},
        {id: 2, title: 'JavaScript 2', body: 'Описание поста 2'},
        {id: 3, title: 'JavaScript 3', body: 'Описание поста 3'}
      ],
      dialogVisible: false,
      modificatorValue: ''
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
      this.dialogVisible = false
    },
    removePost(post){
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog(){
      this.dialogVisible = true
    }
  }
}
</script>

<style>
*, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}

.user_button {
  margin: 20px 0;
}
</style>