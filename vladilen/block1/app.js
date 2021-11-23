const App = {
    data() {
        return {
            placeholderString: "Введите название заметки",
            title: 'Список заметок',
            inputValue: '',
            notes: ['Заметка 1', 'Заметка 2']
        }
    },
    methods: {
        inputChangeHandler(event){
            this.inputValue = event.target.value
        },
        addNewNote() {
            if(this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        removeNote(idx) {
            this.notes.splice(idx, 1);
            console.log("sss", idx)
        }
    },
    computed: {
        doubleCountComputed() {
            console.log("doublecountComputed")
            return this.notes.length * 2
        }
    },
    watch: {
        inputValue(value) {
            // следим за изменением
        }
    }
}

Vue.createApp(App).mount('#app')
