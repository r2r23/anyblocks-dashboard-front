<template>
    <div class="settings">
        <div class="pad">
            <h2>Settings for "{{userHere.email}}"</h2>
            <div class="form-unit">
                <label>Name</label>
                <input type="text" v-model="userHere.fullName">
            </div>
            <div class="form-unit">
                <label>Company</label>
                <input type="text" v-model="userHere.companyName">
            </div>
            <div class="form-unit">
                <label>New Password</label>
                <input type="password" v-model="newPassword">
            </div>
            <div class="form-unit">
                <label>Confirm New Password</label>
                <input type="password" v-model="newPassword2">
            </div>
            <div class="form-unit">
                <button class="extra-margin-top" @click="save()">Save</button>
            </div>
        </div>

        <div class="pad">
            <h2>2FA Secret</h2>
            <div>1245-7653-4556-3365</div>
            <div><img :src="'https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=ZZZZZZZZZZZZZZZzz'"></div>
            <h2>2FA Activation</h2>
            <div class="form-unit">
                <label>One-time password</label>
                <input type="text" v-model="userHere.otp">
            </div>
            <div class="form-unit">
                <button class="color1">Activate</button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'SettingsView',
    data() {
        return {
            userHere: {
                id: '',
                email: '',
                fullName: '',
                companyName: '',
            },
            newPassword: '',
            newPassword2: ''
        }
    },
    computed: {
        ...mapGetters(['user'])
    },
    methods: {
        save(){
            // validation
            if(this.newPassword && this.newPassword !== this.newPassword2) {
                this.$store.commit('notification', {
                    text: 'Passwords should match.',
                    type: 'error'
                })
                return
            }

            // prepare data to send
            let dataToSend = {
                id: this.userHere.id,
                fullName: this.userHere.fullName,
                companyName: this.userHere.companyName
            }

            // add password if filled
            if(this.newPassword) {
                dataToSend.password = this.newPassword
            }

            // dispatch
            this.$store.dispatch('updateUser', dataToSend)
        }
    },
    watch: {
        user: {
            deep: true,
            immediate: true,
            handler(newVal) {
                this.userHere = newVal
            }
        }
    }
}
</script>

<style scoped>

.settings {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--gutter);
    align-items: start;
}

</style>