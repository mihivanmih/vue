<template>
  <div>
<!--    <h1>{{ $store.state.likes }}</h1>-->
<!--    <h1>{{ $store.getters.doubleLikes }}</h1>-->
<!--    <h1>{{ $store.state.isAuth ? 'Мы авториpизованы' : 'Необходимо авторизироваться' }}</h1>-->

<!--    <MyButton @click="$store.commit('incrementLikes')">Лайк</MyButton>-->
<!--    <MyButton @click="$store.commit('decrementLikes')">Дизлайк</MyButton>-->

    <h1>Страница с постами</h1>
    <MyInput
        :value="searchQuery"
        @update:value="setSearchQuery"
        placeholder="Поиск..."
        v-focus
    />
    <div class="app__btns">
      <MyButton
          class="user_button"
          @click="showDialog"
      >
        Создать пост
      </MyButton>

      <MySelect
          :model-value="selectedSort"
          @update:model-value="setSelectedSort"
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
    <div v-intersection="loadMorePosts" class="observer"></div>

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
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  components: {
    // Paginations,
    MyInput,
    MyButton,
    PostList, PostFom
  },
  data() {
    return {
      dialogVisible: false, // диалоговое окно закрыто
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort'
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts'
    }),
    createPost(post) {
      this.posts.push(post)
      this.dialogVisible = false
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true
    },
    changePage(pageNumber) {
      console.log("pageNumber", pageNumber)
      this.page = pageNumber
    }
  },
  mounted() {
    this.fetchPosts()
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts, // посты
      isPostsLoading: state => state.post.isPostsLoading,
      selectedSort: state => state.post.selectedSort,
      searchQuery: state => state.post.searchQuery, // поиск
      page: state => state.post.page, // номер страницы
      limit: state => state.post.limit, // кол-во эл-ов на странице
      totalPages: state => state.post.totalPages, //сколько всего страниц
      sortOptions: state => state.post.sortOptions
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
    })
  },
  watch: {
    /*    page() {
          this.fetchPosts()
        }*/
  }
}
</script>

<style>
.app {
  padding: 20px;
}

.app__btns {
  display: flex;
  margin: 0 0 20px 0;
  justify-content: space-between;
}

.observer {
  height: 30px;
  position: relative;
  z-index: 333;
  width: 95%;
  bottom: -50px;
}
</style>