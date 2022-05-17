<template>
    <div>
        <h2>Home /</h2>
        <div v-if="!user.id">
            You need to be logged in to use the dashboard.
        </div>
        <div class="test">Str in store is <b>{{ str }}</b> <a @click="newRandName">change</a></div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'HomeView',
    computed: {
        ...mapGetters(['str', 'user'])
    },
    methods: {
        newRandName() {
            let newStr = 'Area-' + Math.floor((Math.random() * 100))
            this.$store.commit('str', newStr)
            this.$store.commit('notification', `String changed to ${newStr}`)
        },
        logout() {
            this.$store.commit('user', {
                id: 0,
                name: '',
                surname: ''
            })
        }
    }
}
</script>

<style scoped>

.test {
    margin-top: 300px;
    color: grey;
}

</style>
