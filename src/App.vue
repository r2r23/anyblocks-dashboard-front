<template>
    <div id="app">

        <i class="material-icons hamburger" @click="toggleNav()">menu</i>

        <nav v-show="navVisible">

            <h1>anyBlocks</h1>

            <div class="user">
                <div class="pic"><i class="material-icons">account_circle</i></div>
                <div class="name">Benedict<br>Cumberbatch</div>
            </div>

            <div>
                <router-link to="/projects">
                    <div class="link" :class="{active: $route.name === 'projects'}">
                        <i class="material-icons">view_module</i>
                        <p>Projects</p>
                    </div>
                </router-link>
                <router-link to="/tracking">
                    <div class="link" :class="{active: $route.name === 'tracking'}">
                        <i class="material-icons">query_stats</i>
                        <p>Tracking</p>
                    </div>
                </router-link>
                <router-link to="/settings">
                    <div class="link" :class="{active: $route.name === 'settings'}">
                        <i class="material-icons">settings</i>
                        <p>Settings</p>
                    </div>
                </router-link>
                <router-link to="/billing">
                    <div class="link" :class="{active: $route.name === 'billing'}">
                        <i class="material-icons">receipt</i>
                        <p>Billing</p>
                    </div>
                </router-link>
                <router-link to="/docs">
                    <div class="link" :class="{active: $route.name === 'docs'}">
                        <i class="material-icons">list</i>
                        <p>Docs</p>
                    </div>
                </router-link>
                <router-link to="/feedback">
                    <div class="link" :class="{active: $route.name === 'feedback'}">
                        <i class="material-icons">reviews</i>
                        <p>Feedback</p>
                    </div>
                </router-link>
            </div>

        </nav>

        <main :class="{'full-width': !navVisible}">
            <router-view/>
        </main>

    </div>
</template>

<script>
import {isMobile} from '@/common/helpers'

export default {
    name: 'App',
    data() {
        return {
            isMobile: isMobile(),
            isDesktop: !isMobile(),
            navVisible: true,
        }
    },
    methods: {
        toggleNav() {
            this.navVisible = !this.navVisible
        }
    }
}
</script>

<style src="../src/css/forms.css"></style>
<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap');

:root {
    --gutter: 40px;
    --navWidth: 150px;
    --color-bg: #f4f8fb;
    --color-nav: #ebf0f4;
    --color-text: #333333;
    --color-sel: #005c85;
    --color1: #292EA9;
    --color2: #FD8517;
;
}

html {
    background: var(--color-bg);
    font-size: 18px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    font-size: 18px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    line-height: 150%;
    list-style-type: none;
    text-decoration: none;
    color: var(--color-text);
}

h1, h2 {
    margin-bottom: calc(var(--gutter) / 2);
    font-weight: 700;
}

h1 {
    font-size: 24px;
}

h2 {
    font-size: 22px;
}

b {
    font-weight: 700;
}

#app {

}

.hamburger {
    position: fixed;
    top: var(--gutter);
    left: var(--gutter);
    z-index: 10;
    background: lightgrey;
    padding: 10px;
    opacity: 0;
    border-radius: 5px;
    font-size: 30px;
    cursor: pointer;
    transition: all 300ms ease-in-out;
}

.hamburger:hover {
    opacity: 1;
}

nav {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    width: var(--navWidth);
    padding: var(--gutter) 0;
    background: var(--color-nav);
    text-align: center;
    box-shadow: 0px 0px 35px rgba(0, 53, 132, 0.26);
}

.user {
    margin: 20px 0 50px 0;
}

.user .pic i {
    font-size: 80px;
}

.user .name {
    font-weight: 600;
}

.link {
    padding: 15px 0;
}

.link i {
    font-size: 30px;
}

.link p {
    font-weight: 600;
}

.link.active {
    background: var(--color-sel);
    box-shadow: 0px 0px 20px rgba(1, 51, 126, 0.35);
}

.link.active * {
    color: white;
}

.link:hover:not(.active) {
    background: lightblue;
}

main {
    margin-left: var(--navWidth);
    padding: var(--gutter);
    /*border: 2px dashed red;*/
}

main.full-width {
    margin: 0;
}

.pad {
    border-radius: 10px;
    background: white;
    border: 1px solid rgba(10, 54, 119, 0.2);
    padding: var(--gutter);
    box-shadow: 0px 0px 20px rgba(0, 53, 132, 0.06);
}

</style>
