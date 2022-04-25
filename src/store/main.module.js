// import Vue from 'vue'
import router from '@/router/index.js'

const state = {
    str: 'def',
    user: {
        id: 0,
        name: '',
        surname: ''
    },
    projects: []
}

const getters = {
    str() {
        return state.str
    },

    user() {
        return state.user
    },

    projects() {
        return state.projects
    }
}

const mutations = {
    str(state, data) {
        state.str = data
    },

    user(state, data) {
        state.user = data
    },

    projects(state, data) {
        state.projects = data
        // Vue.set(state, 'projects', data)
    }
}

const actions = {
    appInit() {
        // console.log('app init')
        let loadedProjects = [
            {
                id: 1,
                name: 'My test project',
                description: 'tratata',
                key: 'jejeyf7w9ejf37ec83j4bejdf7f9394hfhr748ehd85h6bfkw94thfk'
            },
            {
                id: 2,
                name: 'Wallet 4.0',
                description: 'bla-bla-bla wallet',
                key: '2j2i4iktjf78274bdjfowr8592h4nbrhf8fhfnfmowoqhq7e0trje7wnf64t0'
            },
        ]
        setTimeout( () => {
            this.commit('projects', loadedProjects)
        }, 3000)

    },

    register(state, data) {
        if (data.email && data.password) {
            this.commit('user', {
                id: 1,
                name: 'Michael',
                surname: 'Fox'
            })
            router.push('/projects')
        } else {
            alert('both fields please')
        }
    },

    login(state, data) {
        if (data.email && data.password) {
            this.commit('user', {
                id: 1,
                name: 'Michael',
                surname: 'Fox'
            })
            router.push(router.currentRoute.query.redirect)
        } else {
            alert('both fields please')
        }
    },

    logout() {
        this.commit('user', {
            id: 0,
            name: '',
            surname: ''
        })
        if (router.currentRoute.path !== '/') {
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
