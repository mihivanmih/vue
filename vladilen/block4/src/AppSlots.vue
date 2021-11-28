<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Slosts</h2>

      <app-list>
<!--        <template #default="slotProps">-->
        <template #default="slotProps">
          <span style="color: #c25205">Item {{ slotProps.iter }} - i{{ slotProps.i }}</span>
        </template>
      </app-list>

      <app-block>
        <p>Это важный текст</p>

        <template #header>
          <h3>Это заголовок</h3>
        </template>

        <template v-slot:footer>
          Это футер
        </template>

      </app-block>
    </div>
  </div>
</template>

<script>
import AppBlock from '@/conponent/slots/AppBlock'
import AppList from '@/conponent/slots/AppList'
export default {
  components: { AppList, AppBlock }
}
</script>

<style scoped>
</style>
