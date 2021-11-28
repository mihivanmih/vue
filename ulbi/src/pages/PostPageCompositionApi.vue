<template>
  <div>
    <h1>Страница с постами</h1>
    <MyInput
        v-model:value="searchQuery"
        placeholder="Поиск..."
        v-focus
    />
    <div class="app__btns">
      <MyButton
          class="user_button"
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
      />
    </MyDialog>

    <PostList
        :posts="sortedAndSearchedPosts"
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
import MyInput from "@/components/UI/MyInput";
import { ref } from 'vue'
import useSortedPosts from '@/hooks/useSortedPosts'
import useSortedAndSearchedPosts from '@/hooks/useSortedAndSearchedPosts'
import { usePosts } from '@/hooks/usePosts'

export default {
  components: {
    MyInput,
    MyButton,
    PostList, PostFom
  },
  data() {
    return {
      dialogVisible: false, // диалоговое окно закрыто
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержимому'},
      ]
    }
  },
  methods: {

  },
  setup (props) {
    const {posts, totalPages, isPostsLoading} = usePosts(10)
    const {sortedPosts, selectedSort} = useSortedPosts(posts)
    const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts)
    const likes = ref(0)

    const addLike = () => {
      likes.value += 1
    }

    return {
      posts,
      totalPages,
      isPostsLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts
    }
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