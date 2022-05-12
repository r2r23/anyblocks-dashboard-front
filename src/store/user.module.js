import RestService from "@/common/rest.service"

const state = {
    token: null,
    user: {},
}

const getters = {
    user() {
        return state.user
    },
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

    // login(context, data) {
    //     RestService.post('/auth', data)
    //         .then(user => {
    //             this.commit('user', user)
    //         })
    // },
    //
    // register(context, data) {
    //     RestService.post('/user', data)
    //         .then( () => {
    //             this.commit('notification', 'Account has been registered. You may login now')
    //
    //             // push route here from registerto login
    //         })
    // },
}


export default {
    state,
    getters,
    actions,
    mutations
}