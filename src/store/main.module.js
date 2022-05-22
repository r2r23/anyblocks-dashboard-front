import Vue from 'vue'

const state = {
    str: 'def',
    notifications: [],
    notificationId: 0
}

const getters = {
    str() {
        return state.str
    },

    notifications() {
        return state.notifications
    }
}

const mutations = {
    str(context, data) {
        state.str = data
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

}

export default {
    state,
    getters,
    actions,
    mutations
}