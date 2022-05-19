import RestService from '@/common/rest.service'
import Vue from 'vue'

const state = {
    token: null,
    user: {},
    registrationSuccessful: false
}

const getters = {
    user() {``
        return state.user
    },

    registrationSuccessful() {
        return state.registrationSuccessful
    }
}

const mutations = {
    token(context, token) {
        RestService.token(token)
        localStorage.setItem('token', token)
        state.token = token
    },

    user(context, user) {
        for (let n in user) {
            Vue.set(state.user, n, user[n])
        }

        this.commit('token', user.jwt_token)
    },

    registrationSuccessful(context, val) {
        state.registrationSuccessful = val
    }
}

const actions = {
    appInit() {
        if (state.token === undefined || state.token === 'undefined' || state.token === null || state.token === 'null') {
            localStorage.removeItem('token')
        } else {
            RestService.token(state.token)
            RestService.get('/user', {}, () => {
                localStorage.removeItem('token')
                RestService.token('')
            })
                .then(user => {
                    if (!user) {
                        localStorage.removeItem('token')
                        return
                    }
                    this.commit('user', user)
                })
        }
    },

    login(context, data) {
        RestService.post('/user/auth', data)
            .then(user => {
                this.commit('user', user)
            })
    },

    register(context, data) {
        RestService.post('/registration', data)
            .then( () => {
                console.log('then fired')
                this.commit('registrationSuccessful', true)
            })
    },

    createProject(context, data) {
        RestService.post('/projects', data)
            .then( ans => {
                if (ans) {
                    this.commit('notification', 'Project created successfully')
                }
            })
    }
}


export default {
    state,
    getters,
    actions,
    mutations
}