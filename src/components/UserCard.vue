<template>
    <div class="user-card">
        <div class="left-part">
            <div class="title">
                <img src="@/assets/anyblocks-logo-black-sign.png">
                <h2><slot name="title"></slot></h2>
            </div>
        </div>
        <div class="right-part">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>


export default {
    name: 'UserCard'
}
</script>

<style scoped>

.user-card {
    position: fixed;
    top: 100px; right: 100px;
    width: 550px;
    min-height: 300px;
    background: linear-gradient(319.49deg, #003484 36.16%, rgba(71, 132, 157, 0.988823) 62.76%, rgba(221, 245, 255, 0.97) 96.09%);
    box-shadow: 0 32px 40px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.left-part {
    place-self: center center;
}

.title {
    text-align: center;
}

.title h2 {
    font-size: 30px;
    font-weight: 500;
    color: white;
}

.title img {
    width: 114px;
    mix-blend-mode: luminosity;
}

.right-part {
    padding: var(--gutter) var(--gutter) var(--gutter) 0;
}

</style>