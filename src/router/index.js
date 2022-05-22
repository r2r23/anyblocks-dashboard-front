import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '@/store'

import HomeView from '@/views/HomeView'
// import BareView from '@/views/BareView'
import ProjectsView from '@/views/ProjectsView'
import ProjectView from '@/views/ProjectView'
import ProjectNewView from '@/views/ProjectNewView'
import SettingsView from '@/views/SettingsView'
import TrackingView from '@/views/TrackingView'
import FeedbackView from '@/views/FeedbackView'
import BillingView from '@/views/BillingView'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/login',
        name: 'login',
        // component: BareView,
        component: HomeView,

    },
    {
        path: '/register',
        name: 'register',
        // component: BareView,
        component: HomeView,
    },
    {
        path: '/projects',
        name: 'projects',
        component: ProjectsView,
        meta: {
            auth: true
        }
    },
    {
        path: '/projects/:id',
        name: 'project',
        component: ProjectView,
        meta: {
            auth: true
        }
    },
    {
        path: '/project-new',
        name: 'project-new',
        component: ProjectNewView,
        meta: {
            auth: true
        }
    },
    {
        path: '/tracking',
        name: 'tracking',
        component: TrackingView,
        meta: {
            auth: true
        }
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
        component: FeedbackView,
        meta: {
            auth: true
        }
    },
    {
        path: '/billing',
        name: 'billing',
        component: BillingView,
        meta: {
            auth: true
        }
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


// need this old guard with next() because we run the old router
// router.beforeEach((to, from, next) => {
//     if (to.meta.auth && !store.getters.user.id) {
//         next({
//             path: '/',
//             query: {
//                 redirect: to.name,
//                 usercard: 1
//             }
//         })
//     } else {
//         next()
//     }
// })

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
