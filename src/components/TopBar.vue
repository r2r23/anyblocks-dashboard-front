<template>
    <div>
        <div class="topbar">
            <div class="logo"><img src="@/assets/anyblocks-logo-black.png"></div>
            <a class="menu" href="#">Home</a>
            <a class="menu" href="https://docs.anyblocks.io" target="_blank">Docs</a>
            <span class="menu active">Dashboard</span>
            <a class="menu" href="#">Explorer</a>
            <div class="user-icon">
                <i class="material-icons" :class="{active: user.id}" @click="toggleUserCard()">account_circle</i>
            </div>
        </div>

        <div class="user-card-backdrop" v-show="showUserCard" @click="toggleUserCard()">
            <div @click.stop="">
                <UserCard v-show="showUserCard">
                    <template #title>
                        <template v-if="userCardContent === 'login'">Login</template>
                        <template v-if="userCardContent === 'register'">Register</template>
                        <template v-if="userCardContent === 'userData'">Welcome!</template>
                    </template>
                    <template #content>
                        <LoginForm v-if="userCardContent === 'login'"
                                   @finished="toggleUserCard()"
                                   @change-content="changeContent"
                        />
                        <RegisterForm v-if="userCardContent === 'register'"
                                      @finished="toggleUserCard()"
                                      @change-content="changeContent"
                        />
                        <div v-if="userCardContent === 'userData'" class="user-data">
                            User: {{ user.email }}
                            <button @click="logout()">logout</button>
                        </div>
                    </template>
                </UserCard>
            </div>
        </div>
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
    mounted() {
        if(this.$route.query.usercard === '1' || this.$route.name === 'login') {
            this.showUserCard = true
        }
        if(this.$route.name === 'register') {
            this.userCardContent = 'register'
            this.showUserCard = true
        }
    },
    computed: {
        ...mapGetters(['user'])
    },
    methods: {
        toggleUserCard() {
            this.showUserCard = !this.showUserCard
        },
        changeContent(newValue) {
            this.userCardContent = newValue
        },
        logout() {
            this.$store.dispatch('logout')
            this.userCardContent = 'login'
            this.showUserCard = false
        }
    },
    watch: {
        user: {
            deep: true,
            handler(newVal) {
                if(newVal.id) {
                    this.userCardContent = 'userData'
                }
            }
        }
    }
}
</script>

<style scoped>

.topbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 90;
    height: var(--topbar-height);
    background: var(--color-nav);
    box-shadow: 0 0 35px rgba(0, 53, 132, 0.26);

    padding: 0 calc(var(--nav-width) + var(--gutter));
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    place-items: center;
}

.logo img {
    height: 40px;
    vertical-align: bottom;
}

.menu {
    font-weight: 400;
    color: grey;
}

.menu.active {
    font-weight: 500;
    color: black;
}

.user-icon {
    display: flex;
    align-items: center;
}

.user-icon i {
    font-size: 54px;
    color: grey;
    cursor: pointer;
}

.user-icon i.active {
    color: lightgreen;
}

.user-card-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 95;
    background: rgba(0, 0, 0, .2);
}

</style>