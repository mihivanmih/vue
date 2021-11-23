Vue.createApp({
    data() {
        return {
            myHtml: '<h1>Vue 3 App</h1>',
            title: 'Я есть Грут',
            person: {
                firstName: 'Valera',
                lastName: 'Kucha',
                age: 42
            },
            items: [1,1,2,3,4,5,6]
        }
    },
    methods: {
        addItem() {
            this.items.unshift(this.$refs.myInput.value)
            this.$refs.myInput.value = ''
        },
        remove(i) {
            this.items.splice(i, 1)
        },
        log(item) {
            console.log("log item: ", item)
        }
    },
    computed: {
        evenItems() {
            return this.items.filter(i => i % 2 === 0)
        }
    }
}).mount('#app')
