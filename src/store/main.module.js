import Vue from 'vue'
import RestService from '@/common/rest.service'
import router from '@/router'

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
    str(context, data) {
        state.str = data
    },

    addProject(context, data) {
        state.projects.push(data)
    },

    updateProject(context, data) {
        // state.projects.forEach( project => {
        //     if(project.id === data.id) {
        //         for(let n in project) {
        //             project[n] = data[n]
        //         }
        //     }
        // })
        let project = state.projects.filter(p => p.id === data.id)[0]
        for(let n in project) {
            project[n] = data[n]
        }
    },

    projects(context, data) {
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
    createProject(context, data) {
        RestService.post('/projects', data)
            .then( ans => {
                if (ans) {
                    this.commit('addProject', ans)
                    this.commit('notification', 'Project created successfully')
                }
            })
    },

    fetchProjects() {
        RestService.get('/projects')
            .then( ans => {
                if (ans) {
                    this.commit('projects', ans)
                }
            })
    },

    updateProject(context, data) {
        RestService.put(`/project/${data.id}`, {
            name: data.name,
            description: data.description
        })
            .then( ans => {
                if(ans) {
                    this.commit('updateProject', data)
                    router.push('/projects')
                    this.commit('notification', 'Project has been updated')
                }
            })
    },

    regenerateApiKey() {
        RestService.post(`/generate_token`)
            .then( ans => {
                console.log(ans)
            })
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
