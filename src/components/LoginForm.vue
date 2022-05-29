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
            <button @click="login()" class="dark extra-margin-top">Login</button>
        </div>
        <div class="form-unit or">
            Don't have an account yet? <a @click="switchToRegister()">Sign up!</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginForm',
    data() {
        return {
            email: '',
            password: '',
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
        login() {
            // validation
            if(!this.email || !this.password) {
                this.$store.commit('notification', {
                    text: 'Both fields please.',
                    type: 'error'
                })
                return
            }

            // dispatch
            this.$store.dispatch('login', {
                email: this.email,
                password: this.password
            })
        },
        switchToRegister() {
            this.$store.commit('userCardContent', 'register')
        }
    }
}
</script>

<style scoped>

</style>