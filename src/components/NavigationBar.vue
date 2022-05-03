<template>
    <nav>

        <template v-if="!user.id">
            <div class="logo">
                <router-link to="/">
                    <img src="@/assets/anyblocks-logo-black-sign.png"><br>
                    <img src="@/assets/anyblocks-logo-black-text.png">
                </router-link>
            </div>
            <div class="service">
                <router-link to="/login?redirect=projects">login</router-link>
                /
                <router-link to="/register">sign up</router-link>
            </div>
        </template>

        <template v-if="user.id">
            <div class="logo">
                <router-link to="/"><img src="@/assets/anyblocks-logo-black.png"></router-link>
            </div>
            <div class="user">
                <div class="pic"><i class="material-icons">account_circle</i></div>
                <div class="name" v-if="user.id">
                    {{ user.name }} {{ user.surname }}
                </div>
            </div>
            <div class="service" @click="logout()"><span class="cursor-pointer">logout</span></div>
        </template>

        <div>
            <router-link to="/projects">
                <div class="link" :class="{active: $route.name.indexOf('project') > -1}">
                    <i class="material-icons icon">view_module</i>
                    <p>Projects</p>
                </div>
            </router-link>
            <router-link to="/tracking">
                <div class="link" :class="{active: $route.name === 'tracking'}">
                    <i class="material-icons icon">query_stats</i>
                    <p>Tracking</p>
                </div>
            </router-link>
            <router-link to="/settings">
                <div class="link" :class="{active: $route.name === 'settings'}">
                    <i class="material-icons icon">settings</i>
                    <p>Settings</p>
<!--                    <i v-if="!user.id" class="material-icons lock">lock</i>-->
                </div>
            </router-link>
            <router-link to="/billing">
                <div class="link" :class="{active: $route.name === 'billing'}">
                    <i class="material-icons icon">receipt</i>
                    <p>Billing</p>
                </div>
            </router-link>
            <a href="https://developer.bitcoin.org/reference/rpc/generateblock.html" target="_blank">
                <div class="link" :class="{active: $route.name === 'docs' || $route.name === 'methods'}">
                    <i class="material-icons icon">list</i>
                    <p>Docs</p>
                </div>
            </a>
            <router-link to="/feedback">
                <div class="link" :class="{active: $route.name === 'feedback'}">
                    <i class="material-icons icon">reviews</i>
                    <p>Feedback</p>
                </div>
            </router-link>
        </div>

    </nav>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'NavigationBar',
    computed: {
        ...mapGetters(['user'])
    },
    methods: {
        logout() {
            this.$store.dispatch('logout')
        }
    }
}
</script>

<style scoped>

nav {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    width: var(--nav-width);
    padding: calc(var(--gutter) / 2) 0;
    background: var(--color-nav);
    text-align: center;
    box-shadow: 0px 0px 35px rgba(0, 53, 132, 0.26);
}

.logo {
    text-align: center;
    margin-bottom: calc(var(--gutter) / 2);
}

.logo img {
    width: 75%;
    vertical-align: bottom;
}

.service {
    margin-bottom: var(--gutter);
}

.user {
    /*margin: 20px 0 50px 0;*/
}

.user .pic i {
    font-size: 80px;
}

.user .name {
    font-weight: 600;
}

.link {
    padding: 15px 0;
    position: relative;
}

.link i.icon {
    font-size: 30px;
}

.link p {
    font-weight: 600;
}

.link i.lock {
    position: absolute;
    top: 20px; right: 20px;
    color: red;
    font-size: 44px;
}

.link.active {
    background: var(--color-green);
    box-shadow: 0px 0px 20px rgba(1, 51, 126, 0.35);
}

.link.active * {
    color: white;
}

.link:hover:not(.active) {
    background: lightblue;
}

</style>