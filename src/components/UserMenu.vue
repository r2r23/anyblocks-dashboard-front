<template>
    <ul>
        <li class="title"><h5>{{ user.email }}</h5></li>
        <li class="link" @click="goTo('projects')">Projects</li>
        <li class="link" @click="goTo('Settings')">Settings</li>
        <li class="link" @click="logout()">Logout</li>
    </ul>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'UserMenu',
    computed: {
        ...mapGetters(['user'])
    },
    methods: {
        goTo(path) {
            this.$router.push(path)
            this.$store.commit('userCardShow', false)
        },
        logout() {
            this.$store.dispatch('logout')
        }
    }
}
</script>

<style scoped>

li {
    margin-bottom: 10px;
    text-align: right;
}

</style>