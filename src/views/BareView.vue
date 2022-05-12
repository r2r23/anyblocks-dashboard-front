<template>
    <div class="bare">
        <div class="pad" v-if="$route.name==='login'">
            <LoginForm/>
        </div>
        <div class="pad" v-if="$route.name==='register'">
            <RegisterForm/>
        </div>
    </div>
</template>

<script>
import LoginForm from '@/components/LoginForm'
import RegisterForm from '@/components/RegisterForm'

export default {
    name: 'BareView',
    components: {LoginForm, RegisterForm}
}
</script>

<style scoped>

.bare {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
    background: white;
    display: grid;
    place-items: center;
}

.pad {
    width: 500px;
}

</style>