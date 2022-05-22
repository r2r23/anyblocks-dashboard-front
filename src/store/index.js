import Vue from 'vue'
import Vuex from 'vuex'

import main from './main.module'
import user from './user.module'
import projects from './projects.module'

let modules = {
    main,
    user,
    projects
}

Vue.use(Vuex)

export default new Vuex.Store({
    modules
})