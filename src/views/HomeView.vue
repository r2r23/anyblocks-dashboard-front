<template>
    <div>
        <h2>Root</h2>
        <div>Str in store is <b>{{ str }}</b></div>
        <div><button @click="newRandName()">Change name</button></div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'HomeView',
    computed: {
        ...mapGetters(['str'])
    },
    methods: {
        newRandName() {
            let newStr = 'Area-' + Math.floor((Math.random() * 100))
            this.$store.commit('str', newStr)
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

</style>
