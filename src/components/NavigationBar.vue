<template>
    <nav>
        <router-link to="/">
            <div class="link" :class="{active: $route.name === 'home'}">
                <i class="material-icons icon">home</i>
                <p>Home</p>
            </div>
        </router-link>
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
    </nav>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'NavigationBar',
    computed: {
        ...mapGetters(['user'])
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
    padding: calc(var(--topbar-height) + var(--gutter)) 0 0 0;
    background: var(--color-nav);
    text-align: center;
    box-shadow: 0 0 35px rgba(0, 53, 132, 0.26);
}

.logo img {
    width: 75%;
    vertical-align: bottom;
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
    background: var(--color-blue);
    box-shadow: 0px 0px 20px rgba(1, 51, 126, 0.35);
}

.link.active * {
    color: white;
}

.link:hover:not(.active) {
    background: lightblue;
}

</style>