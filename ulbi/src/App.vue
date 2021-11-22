<template>
  <div class="app">

    <h1>Страница с постами</h1>

    <div class="app__btns">
      <MyButton
          class="user_button"
          @click="showDialog"
      >
        Создать пост
      </MyButton>

      <MySelect
        v-model="selectedSort"
        :options="sortOptions"
      />

    </div>



    <MyDialog v-model:show="dialogVisible">
      <PostFom
          @create="createPost"
      />
    </MyDialog>

    <PostList
        :posts="sortedPosts"
        @remove="removePost"
        v-if="!isPostsLoading"
    />
    <div v-else>Идет загрузка...</div>
  </div>
</template>

<script>
import PostFom from "@/components/PostFom"
import PostList from "@/components/PostList"
import axios from "axios"
import MyButton from "@/components/UI/MyButton";

export default {
  components: {
    MyButton,
    PostList, PostFom
  },
  data() {
    return {
      posts: [], // посты
      dialogVisible: false, // диалоговое окно закрыто
      modificatorValue: '', // модификатор который не используется
      isPostsLoading: false,
      selectedSort: '',
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержимому'},
      ]
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
    },
    async fetchPosts() {
      try {
        this.isPostsLoading = true
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10")
        this.posts = response.data
      } catch (e) {
        alert("Ошибка")
      } finally {
        this.isPostsLoading = false
      }
    }
  },
  mounted() {
    this.fetchPosts()
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>  post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    }
  },
  watch: {

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
.app__btns {
  display: flex;
  margin: 20px 0;
  justify-content: space-between;
}
</style>