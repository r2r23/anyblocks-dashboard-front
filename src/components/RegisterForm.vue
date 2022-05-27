<template>
    <div class="cool-card">
        <div v-if="!registrationDispatched">
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
                Already have an account? <a @click="$emit('change-content', 'login')">Log in!</a>
            </div>
        </div>

        <div v-if="registrationDispatched" class="confirmation">
            Registration successful, email has been sent. <a @click="$emit('change-content', 'login')">Login</a>
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
            registrationDispatched: false
        }
    },
    methods: {
        register() {
            if(this.email && this.password && this.password2) {
                if(this.password === this.password2) {
                    this.$store.dispatch('register', {
                        email: this.email,
                        password: this.password
                    })
                    this.registrationDispatched = true
                } else {
                    this.$store.commit('notificationError', `Passwords should match`)
                }
            } else {
                this.$store.commit('notificationError', `Fill all fields pls`)
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
    font-size: 12px;
    color: white;
}

.or a {
    font-size: inherit;
    text-decoration: underline;
}

.confirmation {
    font-size: 18px;
    color: white;
}

</style>