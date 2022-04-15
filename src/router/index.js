import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '@/views/HomeView'
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
        component: SettingsView
    },
    {
        path: '/feedback',
        name: 'feedback',
        component: FeedbackView
    },
    {
        path: '/billing',
        name: 'billing',
        component: BillingView
    },
    {
        path: '/docs',
        name: 'docs',
        component: DocsView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
