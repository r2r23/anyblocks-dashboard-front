<template>
    <div class="cool-card">
        <div class="form-unit">
            <label for="email">Email</label>
            <input type="text" id="email" v-model="email">
        </div>
        <div class="form-unit">
            <label for="password">Password</label>
            <input :type="passwordFieldType" id="password" v-model="password">
            <i class="material-icons" @mousedown="showPass" @mouseup="hidePass">visibility</i>
        </div>
        <div class="form-unit">
            <label for="password2">Confirm Password</label>
            <input :type="passwordFieldType" id="password2" v-model="password2">
            <i class="material-icons" @mousedown="showPass" @mouseup="hidePass">visibility</i>
        </div>
        <div class="form-unit">
            <button @click="register()" class="dark extra-margin-top">Register</button>
        </div>
        <div class="form-unit or">
            Already have an account? <a @click="switchToLogin()">Log in!</a>
        </div>
    </div>
</template>

<script>
// import {mapGetters} from 'vuex'

export default {
    name: 'RegisterForm',
    data() {
        return {
            email: '',
            password: '',
            password2: '',
            passwordFieldType: 'password'
        }
    },
    methods: {
        showPass() {
            this.passwordFieldType = 'text'
        },
        hidePass() {
            this.passwordFieldType = 'password'
        },
        register() {
            // validation ("flat is better than nested")

            // email & password regexes
            const regexEmail = new RegExp(/\S+@\S+\.\S+/)
            const regexPasswordLower = new RegExp(/[a-z]/)
            const regexPasswordUpper = new RegExp(/[A-Z]/)
            const regexPasswordDigits = new RegExp(/[0-9]/)

            if(!regexEmail.test(this.email.trim())) {
                this.$store.commit('notification', {
                    text: "Hmm... Doesn't look like an email. Try again pls.",
                    type: 'error',
                    timeout: 1000 * 20
                })
                return
            }

            if(!regexPasswordLower.test(this.password) || !regexPasswordUpper.test(this.password) || !regexPasswordDigits.test(this.password)) {
                this.$store.commit('notification', {
                    text: "Come on, you can do better than that! Strong password is at least lowercase, uppercase and digits.",
                    type: 'error',
                    timeout: 1000 * 20
                })
                return
            }

            // all fields
            if(!this.email || !this.password || !this.password2) {
                this.$store.commit('notification', {
                    text: "All fields are required.",
                    type: 'error',
                    timeout: 1000 * 20
                })
                return
            }

            // passwords mismatch
            if(this.password !== this.password2) {
                this.$store.commit('notification', {
                    text: "Passwords should match.",
                    type: 'error',
                    timeout: 1000 * 20
                })
                return
            }

            // all good
            this.$store.dispatch('register', {
                email: this.email,
                password: this.password
            })


        },
        switchToLogin(){
            this.$store.commit('userCardContent', 'login')
        }
    }
}
</script>

<style scoped>

</style>