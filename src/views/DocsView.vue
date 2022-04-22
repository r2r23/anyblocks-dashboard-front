<template>
    <div>
        <div class="list">

            <h2>Methods</h2>

            <h3>Fullnode JSON-RPC methods</h3>
            <ul>
                <li class="method" v-for="method in methodsFn" :key="method.name">
                    <router-link :to="`/methods/${method.name}`" :class="{active: method.name===$route.params.methodName}">{{ method.name }}()</router-link>
                </li>
            </ul>

            <h3>Our proud API methods</h3>
            <ul>
                <li class="method" v-for="method in methodsApi" :key="method.name">
                    {{ method.name }}()
                </li>
            </ul>
        </div>

        <div class="description" v-if="$route.params.methodName">
            <h2>Method {{getMethodByName($route.params.methodName).name}}()</h2>
        </div>

        <div class="examples">

        </div>
    </div>
</template>

<script>
export default {
    name: 'DocsView',
    data() {
        return {
            methods: [
                {name: 'getStuff', badge: '', type: 'fn', requests: 1},
                {name: 'getFoo', badge: 'hot', type: 'fn', requests: 4},
                {name: 'getBar', badge: '', type: 'fn', requests: 1},
                {name: 'getBlockStuff', badge: '', type: 'fn', requests: 2},
                {name: 'getMoreStuff', badge: '', type: 'fn', requests: 1},
                {name: 'getFuckingEverything', badge: 'hot', type: 'fn', requests: 6},

                {name: 'getCoolStuff', badge: 'new', type: 'api', requests: 2},
                {name: 'getEvenCoolerStuff', badge: '', type: 'api', requests: 1},
            ]
        }
    },
    computed: {
        methodsFn() {
            return this.methods.filter(x=>x.type==='fn')
        },
        methodsApi() {
            return this.methods.filter(x=>x.type==='api')
        }
    },
    methods: {
        getMethodByName(name) {
            return this.methods.filter(x=>x.name===name)[0]
        }
    }

}
</script>

<style scoped>

.list {
    position: fixed;
    left: var(--nav-width);
    top: 0; bottom: 0;
    z-index: 0;
    width: 400px;
    background: var(--color-nav);
    padding: var(--gutter);
    box-shadow: 0px 0px 35px rgba(0, 53, 132, 0.26);
    animation-name: intro;
    animation-duration: 500ms;
    animation-timing-function: ease-in-out;
}

.active {
    font-weight: 700;
}

@keyframes intro {
    0%   {transform: translateX(-600px)}
    100% {transform: translateX(0)}
}

.description {
    margin-left: 400px;
    border: 2px dotted red;
}

</style>