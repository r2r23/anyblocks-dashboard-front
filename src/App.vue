<template>
    <div id="app">

        <i class="material-icons hamburger" @click="toggleNav()">menu</i>

        <NavigationBar v-show="navVisible"/>

        <main :class="{'full-width': !navVisible}">
            <template v-if="user.id || $route.name === 'home'">
                <router-view/>
            </template>
            <template v-else>
                <LoginPlease/>
            </template>
        </main>

<!--        <TopBar />-->

        <NotificationsArea />
    </div>
</template>

<script>
import {isMobile} from '@/common/helpers'
import {mapGetters} from 'vuex'

import NavigationBar from '@/components/NavigationBar'
import NotificationsArea from '@/components/NotificationsArea'
// import TopBar from '@/components/TopBar'
import LoginPlease from '@/components/LoginPlease'
// import ModalBox from '@/components/ModalBox'

export default {
    name: 'App',
    components: {
        NavigationBar, NotificationsArea, LoginPlease
    },
    mounted(){
        this.$store.dispatch('appInit')
    },
    data() {
        return {
            isMobile: isMobile(),
            isDesktop: !isMobile(),
            navVisible: true,
        }
    },
    computed: {
        ...mapGetters(['user'])
    },
    methods: {
        toggleNav() {
            this.navVisible = !this.navVisible
        }
    },
    // watch: {
    //     '$route': {
    //         deep: true,
    //         handler(newVal) {
    //             console.log(newVal)
    //         }
    //     }
    // }
}
</script>

<style src="../src/css/forms.css"></style>
<style src="../src/css/forms-cool-card.css"></style>

<style>

/* ===================== GENERAL =============================================================== */

@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=PT+Mono&display=swap');

:root {
    --gutter: 40px;
    --nav-width: 150px;
    --topbar-height: 82px;
    --color-bg: #f4f8fb;
    --color-nav: #ebf0f4;
    --color-text: #333333;
    --color-blue: #005c85;
    --color-yellow: #FD8517;
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

a {
    color: var(--color-yellow);
    font-weight: 600;
    cursor: pointer;
}

h1, h2, h3 {
    margin-bottom: calc(var(--gutter) / 2);
    font-weight: 700;
}

h1 {
    font-size: 24px;
}

h2 {
    font-size: 22px;
}

h3 {
    margin-top: calc(var(--gutter) / 2);
    font-size: 14px;
    text-transform: uppercase;
    color: var(--color-yellow);
}

/*a, a span, a div, a p {*/
/*    color: var(--color-green);*/
/*    font-weight: 600;*/
/*}*/

b {
    font-weight: 700;
}

.cursor-pointer {
    cursor: pointer;
}

.mono {
    font-family: 'PT Mono', 'Courier New', monospace;
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
    margin: var(--topbar-height) 0 0 var(--nav-width);
    padding: var(--gutter);
    /*border: 2px dashed red;*/
}

main.full-width {
    margin: var(--topbar-height) 0 0 0;
}


.pad {
    border-radius: 10px;
    background: white;
    border: 1px solid rgba(10, 54, 119, 0.2);
    padding: var(--gutter);
    box-shadow: 0px 0px 20px rgba(0, 53, 132, 0.06);
}

</style>
