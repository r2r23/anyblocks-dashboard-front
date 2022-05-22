import RestService from '@/common/rest.service'
import Vue from 'vue'
import router from '@/router'

const state = {
    user: {}
}

const getters = {
    user() {
        return state.user
    }
}

const mutations = {
    clearToken() {
        state.user.token = ''
        RestService.token('')
        localStorage.removeItem('token')
    },

    user(context, data) {
        for (let n in data) {
            Vue.set(state.user, n, data[n])
        }
        // doesn't have RestService and LS setters here because we don't need it everytime (eg in case of fetchByToken)
    },

    clearUser() {
        for (let n in state.user) {
            Vue.delete(state.user, n)
        }
    }
}

const actions = {
    appInit() {
        // do we have token in ls?
        let lsToken = localStorage.getItem('token')
        // yes, have ls token
        if(lsToken !== null && lsToken !== 'undefined' && lsToken !== undefined) {
            RestService.token(lsToken)
            // is it valid?
            RestService.get('/user/self', {}, ()=>{
                // no, token invalid
                this.commit('clearToken')
            })
                .then(ans => {
                    // yes, token valid
                    this.commit('user', ans)
                    this.dispatch('fetchAllUserData')
                })
        }
        // no ls token
        else {
            this.commit('clearToken')
        }
    },

    register(context, data) {
        RestService.post('/registration', data)
    },

    login(context, data) {
        RestService.post('/user/auth', data)
            .then(ans => {
                RestService.token(ans.jwt_token)
                localStorage.setItem('token', ans.jwt_token)
                this.commit('user', ans)
                this.dispatch('fetchAllUserData')
            })
    },

    logout() {
        this.commit('clearUser')
        this.commit('clearToken')
        if (router.currentRoute.name !== 'home') {
            router.push('/')
        }
    },

    fetchAllUserData() {
        this.dispatch('fetchProjects')
    },
}


export default {
    state,
    getters,
    actions,
    mutations
}