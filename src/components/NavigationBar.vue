<template>
    <nav>

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
                <div class="link" :class="{active: $route.name === 'docs' || $route.name === 'methods'}">
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
</template>

<script>
export default {
    name: 'NavigationBar'
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