import {createStore} from "vuex"
import { postModule } from '@/store/postModule'

export default createStore({
    // state: {
    //     likes: 3,
    //     isAuth: false
    // },
    // getters: {
    //     doubleLikes(state) {
    //         return state.likes * 2
    //     }
    // },
    // mutations: {
    //     incrementLikes(state) {
    //         state.likes += 1
    //     },
    //     decrementLikes(state) {
    //         state.likes -= 1
    //     }
    // },
    // actions: {},
    // modules: {}
    
    modules: {
        post: postModule
    }
})