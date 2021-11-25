const h = Vue.h

const app = Vue.createApp({
    data() {
        return {
            title: 'Это data'
        }
    },
    methods: {
        changeTitle() {
            console.log(this)
            this.title = 'Изменили'
        }
    },
    // template: `
    // <div class="card center">
    //     <h1>Это из js {{ title }}</h1>
    //     <button class="btn" @click="title='Изменили'">Изменить</button>
    // </div>
    // `
    render() {
        return h('div', {
            class: 'card center'
        }, [
            h('h1', {}, this.title),
            h('button', {
                class: 'btn',
                onClick: this.changeTitle
            }, 'изменить')
        ])
    },
    beforeCreate() {
        console.log('beforeCreate')
    },
    created() {
        console.log('created')
    },
    beforeMount() {
        console.log('beforeMount')
    },
    mounted() {
        console.log('mounted')
    },
    beforeUnmount() {
        console.log('beforeUnmount')
    },
    unmounted() {
        console.log('unmounted')
    },
    beforeUpdate() {
        console.log('beforeUpdate')
    },
    updated() {
        console.log('updated')
    }
    ,
})

app.mount('#app')

// setTimeout(() => {
//     app.unmount()
// }, 2000)


// ======

let title = 'Vue 3'
let message = 'Заголовок это: ' + title

const data = {
    title: 'Vue 3',
    message: 'Заголовок это: Vue 3'
}

const proxy = new Proxy(data, {
    get(target, p) {
        // console.log(target)
        // console.log(p)
    },
    set(target, p, value) {
        if (p === 'title') {
            target.message = 'Заголовок это: ' + value
        }
        target[p] = value

        /*        console.log(target)
                console.log(p)
                console.log(value)*/
    }
})

proxy.title = 'Angular 10'

Vue.createApp({
    data() {
        return {
            title: 'new title 2'
        }
    }
}).mount('#app2')