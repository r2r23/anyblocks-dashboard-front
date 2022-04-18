<template>
    <div id="app">

        <i class="material-icons hamburger" @click="toggleNav()">menu</i>

        <NavigationBar v-show="navVisible"/>

        <main :class="{'full-width': !navVisible}" v-if="user.id">
            <router-view/>
        </main>

        <ModalBox v-if="modalLoginNeeded" @close-clicked="modalLoginNeeded=false">
            <template v-slot:title>Login</template>
            <template v-slot:icon><i class="material-icons">account_circle</i></template>
            <template v-slot:text>This is page is for registered users only. Please login or sign up.</template>
            <template v-slot:footer>
                <button @click="goLogin()">Settings</button>
                <button @click="goRegister()">Docs</button>
            </template>
        </ModalBox>
    </div>
</template>

<script>
import {isMobile} from '@/common/helpers'

import NavigationBar from '@/components/NavigationBar'
import ModalBox from '@/components/ModalBox'

export default {
    name: 'App',
    components: {
        NavigationBar, ModalBox
    },
    data() {
        return {
            user: {
                id: true
            },
            isMobile: isMobile(),
            isDesktop: !isMobile(),
            navVisible: true,
            modalLoginNeeded: true,
        }
    },
    methods: {
        toggleNav() {
            this.navVisible = !this.navVisible
        },
        goRegister() {
            this.$router.push('docs')
            this.modalLoginNeeded = false
        },
        goLogin() {
            this.$router.push('settings')
            this.modalLoginNeeded = false
        }
    }
}
</script>

<style src="../src/css/forms.css"></style>

<style>

/* ===================== GENERAL =============================================================== */

@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap');

:root {
    --gutter: 40px;
    --navWidth: 150px;
    --color-bg: #f4f8fb;
    --color-nav: #ebf0f4;
    --color-text: #333333;
    --color-green: #005c85;
    --color-yellow: #FD8517;;
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

.cursor-pointer {
    cursor: pointer;
}

/* ===================== MAIN PAGE =============================================================== */

#app {

}

.hamburger {
    position: fixed;
    top: calc(var(--gutter) / 2);
    left: calc(var(--gutter) / 2);
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
