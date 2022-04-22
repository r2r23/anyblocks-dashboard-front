import router from '@/router/index.js'

const state = {
    str: 'def',
    user: {
        id: 0,
        name: '',
        surname: ''
    }
}

const getters = {
    str(){
        return state.str
    },

    user() {
        return state.user
    }
}

const mutations = {
    str(state, data) {
        state.str = data
    },

    user(state, data) {
        state.user = data
    }
}

const actions = {
    register(state, data){
        if(data.email && data.password) {
            this.commit('user', {
                id: 1,
                name: 'Michael',
                surname: 'Fox'
            })
            router.push('/projects')
        }
        else {
            alert('both fields please')
        }
    },

    login(state, data) {
        if(data.email && data.password) {
            this.commit('user', {
                id: 1,
                name: 'Michael',
                surname: 'Fox'
            })
            router.push(router.currentRoute.query.redirect)
        }
        else {
            alert('both fields please')
        }
    },

    logout() {
        this.commit('user', {
            id: 0,
            name: '',
            surname: ''
        })
        if(router.currentRoute.path !== '/') {
            router.push('/')
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
