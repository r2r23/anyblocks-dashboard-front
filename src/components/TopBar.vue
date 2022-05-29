<template>
    <div>
        <div class="topbar">
            <div class="logo"><img src="@/assets/anyblocks-logo-black.png"></div>
            <a class="menu" href="https://anyblocks.io">About</a>
            <a class="menu" href="https://docs.anyblocks.io" target="_blank">Docs</a>
            <span class="menu active">Dashboard</span>
            <a class="menu" href="#">Explorer</a>
            <div class="user-icon">
                <i v-if="!user.id" class="material-icons" @click="toggleUserCard()">account_circle</i>
                <div v-if="user.id" class="monogram" @click="toggleUserCard()">{{ monogram }}</div>
            </div>
        </div>

        <div class="backdrop" v-show="userCardShow" @click="toggleUserCard()">
            <div @click.stop="">
                <UserCard v-show="userCardShow">
                    <template #title>
                        <template v-if="userCardContent === 'login'">Login</template>
                        <template v-if="userCardContent === 'register'">Sign Up</template>
                        <template v-if="userCardContent === 'userMenu'">
                            <template v-if="user.fullName">Welcome,<br>{{ user.fullName }}!</template>
                            <template v-else>Welcome!</template>
                        </template>
                    </template>
                    <template #content>
                        <LoginForm v-if="userCardContent === 'login'"
                                   @finished="toggleUserCard()"
                        />
                        <RegisterForm v-if="userCardContent === 'register'"
                                      @finished="toggleUserCard()"
                        />
                        <UserMenu v-if="userCardContent === 'userMenu'"
                                  @finished="toggleUserCard()"
                        />
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
import UserMenu from '@/components/UserMenu'

export default {
    name: 'TopBar',
    components: {UserCard, LoginForm, RegisterForm, UserMenu},
    // data() {
    //     return {
    //     }
    // },
    mounted() {
        if(this.$route.query.usercard === '1' || this.$route.name === 'login') {
            this.$store.commit('userCardShow',true)
        }
        if(this.$route.name === 'register') {
            this.$store.commit('userCardContent', 'register')
            this.$store.commit('userCardShow',true)
        }
    },
    computed: {
        ...mapGetters(['user', 'userCardShow', 'userCardContent']),
        monogram() {
            let wordToUse = this.user.fullName ? this.user.fullName : this.user.email
            return wordToUse.slice(0, 1).toUpperCase()
        }
    },
    methods: {
        toggleUserCard() {
            this.$store.commit('userCardShow', !this.userCardShow)
        },
        logout() {
            this.$store.dispatch('logout')
        }
    },
    watch: {
        user: {
            deep: true,
            handler(newVal) {
                if(newVal.id) {
                    this.$store.commit('userCardContent', 'userMenu')
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
    z-index: 50;
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

.monogram {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: lightseagreen;
    color: white;
    font-size: 30px;
    font-weight: 600;
    cursor: pointer;
}

</style>