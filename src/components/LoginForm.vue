<template>
    <div>
        <h2>Login</h2>
        <div class="form-unit">
            <label for="email">Email</label>
            <input type="text" id="email" v-model="email">
        </div>
        <div class="form-unit">
            <label for="password">Password</label>
            <input type="text" id="password" v-model="password">
        </div>
        <div class="form-unit">
            <button @click="login()" class="dark extra-margin-top">Login</button>
        </div>
        <div class="form-unit or">
            or <router-link to="/register">register</router-link> or <router-link to="/">go home</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginForm',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login() {
            this.$store.dispatch('login', {
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