import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

import HomeView from '@/views/HomeView'
import BareView from '@/views/BareView'
import ProjectsView from '@/views/ProjectsView'
import SettingsView from '@/views/SettingsView'
import TrackingView from '@/views/TrackingView'
import FeedbackView from '@/views/FeedbackView'
import BillingView from '@/views/BillingView'
import DocsView from '@/views/DocsView'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/login',
        name: 'login',
        component: BareView,
        meta: {
            guest: true
        }
    },
    {
        path: '/register',
        name: 'register',
        component: BareView,
        meta: {
            guest: true
        }
    },
    {
        path: '/projects',
        name: 'projects',
        component: ProjectsView
    },
    {
        path: '/tracking',
        name: 'tracking',
        component: TrackingView
    },
    {
        path: '/settings',
        name: 'settings',
        component: SettingsView,
        meta: {
            auth: true
        }
    },
    {
        path: '/feedback',
        name: 'feedback',
        component: FeedbackView
    },
    {
        path: '/billing',
        name: 'billing',
        component: BillingView,
        meta: {
            auth: true
        }
    },
    {
        path: '/docs',
        name: 'docs',
        component: DocsView
    },
    {
        path: '/methods/:methodName',
        name: 'methods',
        component: DocsView
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.auth && !store.getters.user.id) {
        next({
            path: '/login',
            query: {redirect: to.name}
        })
    } else if (to.meta.guest && store.getters.user.id) {
        next({
            path: '/projects'
        })
    } else {
        next()
    }
})

// https://www.smashingmagazine.com/2020/10/authentication-in-vue-js/
// router.beforeEach((to, from, next) => {
//     if(to.matched.some(record => record.meta.auth)){
//         if (store.getters.user.id) {
//             next()
//             return
//         }
//         next('/login')
//     } else {
//         next()
//     }
// })

export default router
