<template>
    <div>
        <h2>Register</h2>

        <template v-if="!registrationSuccessful">
            <div class="form-unit">
                <label for="email">Email</label>
                <input type="text" id="email" v-model="email">
            </div>
            <div class="form-unit">
                <label for="password">Password</label>
                <input type="text" id="password" v-model="password">
            </div>
            <div class="form-unit">
                <label for="password2">Password Again</label>
                <input type="text" id="password2" v-model="password2">
            </div>
            <div class="form-unit">
                <button @click="register()" class="dark extra-margin-top">Register</button>
            </div>
            <div class="form-unit or">
                or <router-link to="/login">Login</router-link> or <router-link to="/">go home</router-link>
            </div>
        </template>

        <div v-if="registrationSuccessful">
            Registration successful, email has been sent. <router-link to="/">go home</router-link>
        </div>

    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'RegisterForm',
    data() {
        return {
            email: '',
            password: '',
            password2: '',
            registrationDispatched: false
        }
    },
    computed: {
        ...mapGetters(['registrationSuccessful'])
    },
    methods: {
        register() {
            if(this.email && this.password && this.password2) {
                if(this.password === this.password2) {
                    this.$store.dispatch('register', {
                        email: this.email,
                        password: this.password
                    })
                } else {
                    this.$store.commit('notification', `Passwords should match`)
                }
            } else {
                this.$store.commit('notification', `Fill all fields pls`)
            }

        }
    }
}
</script>

<style scoped>

button {
    width: 100%;
}

.or {
    text-align: center;
}

</style>