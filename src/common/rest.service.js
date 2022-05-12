import Vue from "vue"
import axios from "axios"
import VueAxios from "vue-axios"

import {
    REST_ENDPOINT
} from "@/common/config"

Vue.use(VueAxios, axios)
Vue.axios.defaults.baseURL = REST_ENDPOINT

let token = '';
let errorCb = null;

export const RestService = {
    token(tok) {
        token = tok || ''
    },

    err(cb) {
        errorCb = cb
    },

    query(resource, params) {
        return Vue.axios.get(resource, params).catch(error => {
            console.log(`RestService ${error}`)
        })
    },

    get(resource, params, onError = null) {
        return new Promise(resolve => {
            // console.log('GET: '+resource)

            Vue.axios.get(`${resource}`, {
                params,
                headers: {
                    Authorization: token
                }
            })
                .then(ret => {
                    if (ret.data.error) {
                        if (errorCb !== null) {
                            errorCb(ret.data.error)
                        }
                        if (onError !== null) {
                            onError(ret.data.error)
                        }

                        if (ret.data.error === 'SERVER_ERROR') {
                            throw new Error(`Server error on request GET `+resource)
                        }
                        return
                    }

                    resolve(ret.data.data)
                })
                .catch(error => {
                    console.log(`RestService ${error}`)
                })
        })
    },

    post(resource, params, onError = null) {
        return new Promise(resolve => {
            // console.log('POST: '+resource, params)

            return Vue.axios.post(`${resource}`, params, {
                headers: {
                    Authorization: token
                }
            })
                .then(ret => {
                    if (ret.data.error) {
                        if (errorCb !== null) {
                            errorCb(ret.data.error)
                        }
                        if (onError !== null) {
                            onError(ret.data.error)
                        }

                        if (ret.data.error === 'SERVER_ERROR') {
                            throw new Error(`Server error on request POST `+resource)
                        }
                        return
                    }

                    resolve(ret.data.data)
                })
                .catch(error => {
                    console.log(`RestService ${error}`)
                })
        })
    },

    put(resource, params, onError = null) {
        return new Promise(resolve => {
            // console.log('PUT: '+resource, params)

            return Vue.axios.put(`${resource}`, params, {
                headers: {
                    Authorization: token
                }
            })
                .then(ret => {
                    if (ret.data.error) {
                        if (errorCb !== null) {
                            errorCb(ret.data.error)
                        }
                        if (onError !== null) {
                            onError(ret.data.error)
                        }

                        if (ret.data.error === 'SERVER_ERROR') {
                            throw new Error(`Server error on request PUT `+resource)
                        }
                        return
                    }

                    resolve(ret.data.data)
                })
                .catch(error => {
                    console.log(`RestService ${error}`)
                })
        })
    },

    delete(resource, onError = null) {
        return new Promise(resolve => {
            // console.log('DELETE: '+resource)

            return Vue.axios.delete(`${resource}`, {
                headers: {
                    Authorization: token
                }
            })
                .then(ret => {
                    if (ret.data.error) {
                        if (errorCb !== null) {
                            errorCb(ret.data.error)
                        }
                        if (onError !== null) {
                            onError(ret.data.error)
                        }

                        if (ret.data.error === 'SERVER_ERROR') {
                            throw new Error(`Server error on request DELETE `+resource)
                        }
                        return
                    }

                    resolve(ret.data.data)
                })
                .catch(error => {
                    console.log(`RestService ${error}`)
                })
        })
    }
}

export default RestService
