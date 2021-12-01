export default {
  data () {
    return {
      hideAlert: true
    }
  },
  methods: {
    close () {
      this.hideAlert = false
    },
    toggleAlert () {
      this.hideAlert = !this.hideAlert
    }
  }
}
