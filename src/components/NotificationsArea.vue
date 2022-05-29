<template>
    <div class="notifications">
        <NotificationToast v-for="notification in notifications" :key="notification.id"
                           :id="notification.id" :text="notification.text" :type="notification.type"
                           @cross-clicked="remove"
        />
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
    z-index: 99;
}

</style>