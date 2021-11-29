<template>
  <div class="form-control">
    <label :for="id">{{ label }}</label>
    <input
        type="text"
        :id="id"
        :placeholder="placeholder"
        :valueName="valueName"
        @input="change"
        :class="{invalid: error}"
    >
    <small v-if="error">{{ error }}</small>
  </div>
</template>

<script>
export default {
  props: {
    valueName: String,
    error: String,
    placeholder: String,
    label: String,
  },
  emits: ['update:value'],
  data () {
    return {
      id: 'input-' + Math.random()
    }
  },
  methods: {
    change (event) {
      this.$emit('update:valueName', event.target.value)
    }
  }
}
</script>

<style scoped>

</style>