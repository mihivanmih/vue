<template>
  <div class="app">
    <PostFom
        @create="createPost"
    />
    <PostList
        :posts="posts"
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
      ]
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
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
</style>