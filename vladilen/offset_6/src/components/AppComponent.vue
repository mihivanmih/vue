<template>
  <div v-for="component in content" :key="component.id">
<!--    <app-heading :text="component.text" v-if="component.component === 'title'"></app-heading>
    <app-text :text="component.text" v-if="component.component === 'subtitle'"></app-text>
    <app-img :text="component.text" v-if="component.component === 'avatar'"></app-img>
    <app-p :text="component.text" v-if="component.component === 'text'"></app-p>-->
    <component v-bind:is="`app-${component.component}`" :text="component.text"></component>
  </div>
</template>

<script>
import AppTitle from '@/components/AppTitle'
import AppSubtitle from '@/components/AppSubtitle'
import AppAvatar from '@/components/AppAvatar'
import AppText from '@/components/AppText'

export default {
  name: 'AppComponent',
  props: ['content'],
  components: { AppTitle, AppSubtitle, AppAvatar, AppText }
}
</script>

<style scoped>

</style>
