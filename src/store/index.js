import Vue from "vue"
import Vuex from "vuex"

import main from './main.module'
import user from './user.module'

let modules = {
    main,
    user
}

Vue.use(Vuex)

export default new Vuex.Store({
    modules
})
