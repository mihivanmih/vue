<template>
  <div class="page__wrapper">
    <div
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        class="page"
        :class="{
            'current-page': page === pageNumber
          }"
        @click="$emit('pageNumber', pageNumber)"
    >{{ pageNumber }}</div>
  </div>
</template>

<script>
export default {
  name: "Paginations",
  props: {
    pageNumber: {
      type: Number
    },
    page: {
      type: Number
    },
    totalPages: {
      type: Number
    }
  }
}
</script>

<style scoped>
.page__wrapper {
  display: flex;
  margin-top: 20px;
}
.page {
  border:  1px solid #ccc;
  padding: 10px;
  cursor: pointer;
  text-align: center;
  min-width: 40px;
  margin-left: -1px;
}
.current-page {
  border:  2px solid limegreen;
}
</style>