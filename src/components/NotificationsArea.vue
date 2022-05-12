<template>
    <div class="notifications">
        <div v-for="notification in notifications" :key="notification.id" class="notification">
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
}

.notification {
    width: 400px;
    height: 200px;
    background: pink;
}

</style>