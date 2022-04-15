import Vue from "vue"
import Vuex from "vuex"

import main from './main.module'

let modules = {
    main
}

Vue.use(Vuex)

export default new Vuex.Store({
    modules
})
