<template>
    <div class="notifications">
        <div class="notification" v-for="notification in notifications" :key="notification.id">
            <NotificationToast :id="notification.id" :text="notification.text" :type="notification.type" @cross-clicked="remove" />
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import NotificationToast from '@/components/NotificationToast'

export default {
    name: 'NotificationsArea',
    components: { NotificationToast },
    computed: {
        ...mapGetters(['notifications'])
    },
    methods: {
        remove(id) {
            this.$store.commit('notificationRemove', id)
        }
    }
}
</script>

<style scoped>

.notifications {
    position: fixed;
    bottom: 0; right: 0;
    z-index: 90;
}

</style>