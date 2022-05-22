<template>
    <div class="topbar">
        <button v-show="user.id" @click="logout()">logout</button>
        User: {{ user.email || 'guest' }}
        <button @click="toggleUserCard()">User</button>

        <UserCard v-show="showUserCard">
            <template #title>
                <template v-if="userCardContent === 'login'">Login</template>
                <template v-if="userCardContent === 'register'">Register</template>
            </template>
            <template #content>
                <LoginForm v-if="userCardContent === 'login'" @finished="toggleUserCard()" @change-content="changeContent" />
                <RegisterForm v-if="userCardContent === 'register'" @finished="toggleUserCard()" @change-content="changeContent" />
            </template>
        </UserCard>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

import UserCard from '@/components/UserCard'
import LoginForm from '@/components/LoginForm'
import RegisterForm from '@/components/RegisterForm'

export default {
    name: 'TopBar',
    components: {UserCard, LoginForm, RegisterForm},
    data() {
        return {
            userCardContent: 'login',
            showUserCard: false,
            title: 'Login'
        }
    },
    mounted(){
        if (this.$route.query.usercard === '1' || this.$route.name === 'login') {
            this.showUserCard = true
        }
        if (this.$route.name === 'register') {
            this.showUserCard = true
            this.userCardContent = 'register'
        }
    },
    computed: {
        ...mapGetters(['user'])
    },
    methods: {
        toggleUserCard() {
            this.showUserCard = !this.showUserCard
        },
        changeContent(newValue){
            this.userCardContent = newValue
        },
        logout() {
            this.$store.dispatch('logout')
        }
    }
}
</script>

<style scoped>

.topbar {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 90;
    height: var(--topbar-height);
    background: var(--color-nav);
    box-shadow: 0 0 35px rgba(0, 53, 132, 0.26);

    /* temp*/
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

</style>