template>
  <div>
    <h3>Список пользователей</h3>
    <PostItem
        :post="post"
        v-for="post in posts"
    />
  </div>

</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>