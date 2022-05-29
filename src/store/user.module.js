import RestService from '@/common/rest.service'
import Vue from 'vue'
import router from '@/router'

const state = {
    user: {},
    userCardShow: false,
    userCardContent: 'login',
}

const getters = {
    user() {
        return state.user
    },
    userCardShow() {
        return state.userCardShow
    },
    userCardContent() {
        return state.userCardContent
    }
}

const mutations = {
    user(context, data) {
        for (let n in data) {
            Vue.set(state.user, n, data[n])
        }
        // doesn't have RestService and LS setters here because we don't need it everytime (eg in case of fetchByToken)
    },

    userCardShow(context, data) {
        state.userCardShow = data
    },

    userCardContent(context, data) {
        state.userCardContent = data
    },

    clearToken() {
        state.user.token = ''
        RestService.token('')
        localStorage.removeItem('token')
    },

    clearUser() {
        for (let n in state.user) {
            Vue.delete(state.user, n)
        }
    },
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
        RestService.post('/registration', data, errorMessage => {
            this.commit('notification', {
                text: `Something went wrong. Server replied: ${errorMessage}`,
                type: 'error',
                timeout: 1000 * 60
            })
        })
            .then(ans => {
                if(ans === 'USER_EXISTS') {
                    this.commit('notification', {
                        text: 'This email has already been registered. Try something else.',
                        type: 'error',
                        timeout: 1000 * 60
                    })
                } else {
                    this.commit('notification', {
                        text: 'Email has been sent. Please follow the confirmation link inside to finish the registration.',
                        type: 'success',
                        timeout: 1000 * 60
                    })
                }
            })
    },

    login(context, data) {
        RestService.post('/user/auth', data, errorMessage => {
            errorMessage = errorMessage === 'INVALID_LOGIN' ? 'Invalid email or password. Try again.' : errorMessage
            this.commit('notification', {
                text: errorMessage,
                type: 'error'
            })
        })
            .then(ans => {
                if(ans) {
                    RestService.token(ans.jwt_token)
                    localStorage.setItem('token', ans.jwt_token)
                    this.commit('user', ans)
                    this.commit('userCardContent', 'userMenu')
                    this.commit('userCardShow', false)
                    this.commit('notification', {
                        text: 'You have logged in successfully',
                        type:'success'
                    })
                    this.dispatch('fetchAllUserData')
                    if(router.currentRoute.name !== 'projects') {
                        router.push('/projects')
                    }
                }
            })
    },

    logout() {
        this.commit('clearUser')
        this.commit('clearToken')
        if (router.currentRoute.name !== 'home') {
            router.push('/')
        }
        this.commit('userCardShow', false)
        this.commit('userCardContent', 'login')
        this.commit('notification', {
            text: 'You have logged out',
            type: 'success'
        })
    },

    updateUser(context, data) {
        let id = data.id
        delete(data.id) // we don't need to send the id both in request and in data
        RestService.put(`/user/${id}`, data)
            .then( () => {
                this.commit('notification', {
                    text: 'User data has been updated',
                    type: 'success'
                })
            })
    },

    fetchAllUserData() {
        this.dispatch('fetchProjects')
        // rest of the data to fetch will be here
    },
}


export default {
    state,
    getters,
    actions,
    mutations
}