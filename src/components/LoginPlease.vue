<template>
    <div class="login-please">
        <div class="text">
            <i class="material-icons">favorite</i><i class="material-icons">close</i><i class="material-icons">smart_toy</i><br><br>

            You need to be logged in<br>
            to use the dashboard
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginPlease'
}
</script>

<style scoped>

.login-please {
    width: 100%;
    height: 70vh;
    display: grid;
    place-items: center;
    text-align: center;
}

.text, i {
    font-size: 60px;
    font-weight: 800;
    color: rgba(0, 0, 0, .15);
}

</style>