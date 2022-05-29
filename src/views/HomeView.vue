<template>
    <div>
        <h2>Home</h2>
        <div>
            This is your API dashboard. There's some open information here but the most part is for logged in only.
        </div>

        <div class="test">Tests start here</div>

        <div>Str in store is <b>{{ str }}</b> <a @click="newRandName">change</a></div>

        <div><a @click="modalTestShow=true">Trigger</a> test modal</div>

        <div>state.getters.user:</div>
        <pre>{{ user }}</pre>
        <div>state.getters.projects:</div>
        <pre>{{ projects }}</pre>

        <ModalBox v-show="modalTestShow" @close-clicked="modalTestShow=false">
            <template #text>Wanna see an alert? It's not like it's something extraordinary, but I bet you haven't seen one in a while.</template>
            <template #okbutton>
                <button @click="showAlert()">Go on</button>
            </template>
        </ModalBox>

        <ModalBox :cancel="false" :sign="'check'" v-show="modalEmailConfirmedShow" @close-clicked="modalEmailConfirmedShow=false">
            <template #text>Your email has been confirmed.<br>Now log in and start building something amazing!</template>
            <template #okbutton>
                <button @click="modalEmailConfirmedShow=false">I will</button>
            </template>
        </ModalBox>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import ModalBox from '@/components/ModalBox'

export default {
    name: 'HomeView',
    components: {ModalBox},
    mounted() {
        console.log(this.$route)
        if(this.$route.name === 'email-confirmed') {
            this.modalEmailConfirmedShow = true
        }
    },
    data() {
        return {
            modalTestShow: false,
            modalEmailConfirmedShow: false,
        }
    },
    computed: {
        ...mapGetters(['str', 'user', 'projects'])
    },
    methods: {
        newRandName() {
            let newStr = 'Area-' + Math.floor((Math.random() * 100))
            this.$store.commit('str', newStr)
            this.$store.commit('notification', {
                text: `String changed to ${newStr}`,
                type: 'info',
                // timeout: 1000 * 100
            })
        },
        showAlert() {
            alert('There you go.')
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
