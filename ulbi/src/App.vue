<template>
  <div class="app">

    <h1>Страница с постами</h1>
    <MyInput
        v-model:value="searchQuery"
        placeholder="Поиск..."
    />
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
        :posts="sortedAndSearchedPosts"
        @remove="removePost"
        v-if="!isPostsLoading"
    />
    <div v-else>Идет загрузка...</div>
    <div ref="observer" class="observer"></div>

<!--    <Paginations
      :pageNumber = "0"
      :page = page
      :totalPages = totalPages
      @pageNumber="changePage"
    />-->

  </div>
</template>

<script>
import PostFom from "@/components/PostFom"
import PostList from "@/components/PostList"
import axios from "axios"
import MyButton from "@/components/UI/MyButton";
import MyInput from "@/components/UI/MyInput";
import Paginations from "@/components/Paginations";

export default {
  components: {
   // Paginations,
    MyInput,
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
      searchQuery: '', // поиск
      page: 1, // номер страницы
      limit: 10, // кол-во эл-ов на странице
      totalPages: 0, //сколько всего страниц
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
    changePage(pageNumber){
      console.log("pageNumber", pageNumber)
      this.page = pageNumber
    },
    async fetchPosts() {
      try {
        this.isPostsLoading = true
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        })
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = response.data
      } catch (e) {
        alert("Ошибка")
      } finally {
        this.isPostsLoading = false
      }
    },
    async loadMorePosts() {
      try {
        this.page++
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        })
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = [...this.posts, ...response.data]
      } catch (e) {
        alert("Ошибка")
      } finally {
      }
    }
  },
  mounted() {
    this.fetchPosts()
    const options = {
      rootMargin: '0px',
      threshold: 1.0
    }
    const callback = (entries, observer) => {
      if(entries[0].isIntersecting && this.page < this.totalPages){
        this.loadMorePosts()
      }
    }
    const observer = new IntersectionObserver(callback, options)
    observer.observe(this.$refs.observer)
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>  post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  watch: {
/*    page() {
      this.fetchPosts()
    }*/
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
  margin: 0 0 20px 0;
  justify-content: space-between;
}
h1 {
  margin-bottom: 20px;
}
.observer{
  height: 30px;
  position: relative;
  z-index: 333;
  width: 95%;
  bottom: -50px;
}
</style>