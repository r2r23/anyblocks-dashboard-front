import RestService from '@/common/rest.service'
import router from '@/router'

const state = {
    projects: []
}

const getters = {
    projects() {
        return state.projects
    },
}

const mutations = {
    setProjects(context, data) {
        state.projects = data
    },

    addProject(context, data) {
        state.projects.push(data)
    },

    updateProject(context, data) {
        state.projects.forEach( project => {
            if(project.id === data.id) {
                for(let n in project) {
                    project[n] = data[n]
                }
            }
        })
    }
}

const actions = {
    createProject(context, data) {
        RestService.post('/projects', data)
            .then( ans => {
                if (ans) {
                    this.commit('addProject', ans)
                    this.commit('notificationSuccess', 'Project created successfully')
                }
            })
    },

    fetchProjects() {
        RestService.get('/projects')
            .then( ans => {
                if (ans) {
                    this.commit('setProjects', ans)
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
                    this.commit('notificationSuccess', 'Project has been updated')
                }
            })
    },

    regenerateApiKey(context, id) {
        RestService.post(`/project/${id}/generate_token`)
            .then( ans => {
                this.commit('updateProject', ans)
                this.commit('notificationSuccess', 'New key for this project has been set')
            })
    },

    deleteProject(context, id) {
        RestService.delete(`/project/${id}`)
            .then( ans => {
                if(ans) {
                    router.push('/projects')
                    let filteredProjects = state.projects.filter(p => p.id !== id)
                    this.commit('setProjects', filteredProjects)
                    this.commit('notificationSuccess', 'Project has been successfully deleted')
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