<template>
    <div>
        <h2>Home /</h2>
        <div v-if="!user.id">
            This is our dashboard. There's some open information here but the rest is for authorized only.
        </div>
        <div class="test">Str in store is <b>{{ str }}</b> <a @click="newRandName">change</a></div>
        <div>state.getters.user:</div>
        <pre>{{ user }}</pre>
        <div>state.getters.projects:</div>
        <pre>{{ projects }}</pre>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'HomeView',
    computed: {
        ...mapGetters(['str', 'user', 'projects'])
    },
    methods: {
        newRandName() {
            let newStr = 'Area-' + Math.floor((Math.random() * 100))
            this.$store.commit('str', newStr)
            this.$store.commit('notification', `String changed to ${newStr}`)
        },
    }
}
</script>

<style scoped>

.test {
    margin-top: 300px;
    color: grey;
}

</style>
