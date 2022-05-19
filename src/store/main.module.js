import Vue from 'vue'
import router from '@/router/index.js'
import RestService from "@/common/rest.service";

const state = {
    str: 'def',
    notifications: [],
    notificationId: 0,
    projects: []
}

const getters = {
    str() {
        return state.str
    },

    projects() {
        return state.projects
    },

    notifications() {
        return state.notifications
    }
}

const mutations = {
    str(state, data) {
        state.str = data
    },

    project(state, data) {
        state.projects.push(data)
    },

    projects(state, data) {
        state.projects = data
    },

    notification(context, val) {
        let id = state.notificationId++,
            notification = {
                type: 'success',
                text: val,
                id
            }
        state.notifications.push(notification)

        setTimeout(() => {
            this.commit('notificationRemove', id)
        }, 5000)
    },

    notificationRemove(context, id) {
        for(let n in state.notifications) {
            if (state.notifications[n].id === id) {
                state.notifications.splice(n, 1)
                break
            }
        }
        Vue.set(state, 'notifications', state.notifications)
    },
}

const actions = {
    appInit() {
        this.dispatch('fetchProjects')
    },

    fetchProjects() {
        RestService.get('/projects')
            .then( ans => {
                if (ans) {
                    this.commit('projects', ans)
                }
            })
    },

    login(state, data) {
        if (data.email && data.password) {
            this.commit('user', {
                id: 1,
                name: 'Michael',
                surname: 'Fox',
                email: 'michael.alexander.fox@gmail.com'
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
    },

    addProject(state, data) {
        this.commit('project', data)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
