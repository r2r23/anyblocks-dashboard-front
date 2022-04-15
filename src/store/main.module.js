const state = {
    name: 'def'
}

const getters = {
    name(){
        return state.name
    }
}

const mutations = {
    name(state, data) {
        state.name = data
    }
}

const actions = {}

export default {
    state,
    getters,
    actions,
    mutations
}
