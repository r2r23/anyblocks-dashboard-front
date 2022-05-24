<template>
    <div class="notification" :class="type">
        <div class="liner"></div>
        <i class="icon material-icons">{{ iconName[type] }}</i>
        <div class="body">
            <div class="title">{{ type.slice(0,1).toUpperCase() + type.slice(1) }}</div>
            <div class="text">{{ text }}</div>
        </div>
        <div class="cross"><i class="material-icons" @click="$emit('cross-clicked', id)">close</i></div>
    </div>
</template>

<script>
export default {
    name: 'NotificationToast',
    props: ['id', 'text', 'type'],
    data() {
        return {
            iconName: {
                info: 'info',
                success: 'check_circle',
                error: 'error'
            }
        }
    }
}
</script>

<style scoped>

.notification {
    margin: 15px;
    width: 444px;
    min-height: 116px;
    border: 1px solid rgba(10, 54, 119, 0.2);
    box-shadow: 0 2px 50px 8px rgba(0, 53, 132, 0.06);
    border-radius: 15px;
    display: grid;
    grid-template-columns: 13px 105px 1fr 57px;
    --neutral: rgba(50, 130, 204, 1);
    --good: rgba(59, 173, 71, 1);
    --bad: rgba(197, 81, 74, 1);
}

.liner {
    border-radius: 15px 0 0 15px;
    align-self: stretch;
}

.icon {
    place-self: center;
    font-size: 50px;
}

.body {
    margin: 30px 0;
    padding: 0 0 0 30px;
    border-left: 1px solid rgba(0, 92, 132, 0.1);
}

.title {
    font-size: 22px;
    font-weight: 600;
}

.text {
    font-size: 16px;
    font-weight: 400;
    color: rgba(0, 0, 0, .4);
}

.cross {
    place-self: center;
}

.cross i {
    font-size: 30px;
    color: rgba(0, 0, 0, .2);
    cursor: pointer;
}

/* the good, the bad, the ugly */

.notification.info {
    background: linear-gradient(273.8deg, rgba(193, 216, 237, 0.56) 2.28%, rgba(255, 255, 255, 0.56) 98.73%);
}

.notification.info .liner {
    background: var(--neutral);
}

.notification.info .icon {
    color: var(--neutral);
}

.notification.success {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), linear-gradient(274.02deg, rgba(214, 247, 219, 0.9) 0%, rgba(255, 255, 255, 0.9) 97.26%);
}

.notification.success .liner {
    background: var(--good);
}

.notification.success .icon {
    color: var(--good);
}

.notification.error {
    background: linear-gradient(273.84deg, rgba(254, 227, 225, 0.72) 1.22%, rgba(255, 255, 255, 0.72) 98.31%);
}

.notification.error .liner {
    background: var(--bad);
}

.notification.error .icon {
    color: var(--bad);
}

</style>