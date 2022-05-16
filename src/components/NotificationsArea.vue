<template>
    <div class="notifications">
        <div class="notification" v-for="notification in notifications" :key="notification.id">
            {{ notification.text }}
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: "NotificationsArea",
    computed: {
        ...mapGetters(['notifications'])
    }
}
</script>

<style scoped>

.notifications {
    position: fixed;
    bottom: 0; right: 0;
    z-index: 90;
}

.notification {
    margin-top: 2px;
    width: 400px;
    background: cyan;
    padding: 20px;
}

</style>