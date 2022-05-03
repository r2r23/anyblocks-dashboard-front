<template>
    <div>
        <h2>Register</h2>
        <div class="form-unit">
            <label for="email">Email</label>
            <input type="text" id="email" v-model="email">
        </div>
        <div class="form-unit">
            <label for="password">Password</label>
            <input type="text" id="password" v-model="password">
        </div>
        <div class="form-unit">
            <button @click="register()" class="dark extra-margin-top">Register</button>
        </div>
        <div class="form-unit or">
            or <router-link to="/login">Login</router-link> or <router-link to="/">go home</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RegisterForm',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        register() {
            this.$store.dispatch('register', {
                email: this.email,
                password: this.password
            })
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