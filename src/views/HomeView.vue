<template>
    <div>
        <div>You've found a secret page!</div>
        <div>We test stuff here.</div>
        <div>Name in store is <b>{{ name }}</b></div>
        <div><button @click="newRandName()">Change name</button></div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'HomeView',
    computed: {
        ...mapGetters(['name'])
    },
    methods: {
        newRandName() {
            let newName = 'Area-' + Math.floor((Math.random() * 100))
            this.$store.commit('name', newName)
        }
    }
}
</script>
