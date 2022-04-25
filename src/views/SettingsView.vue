<template>
    <div class="settings">
        <div class="pad">
            <h2>General</h2>
            <div class="form-unit">
                <label>Name</label>
                <input type="text" v-model="name">
            </div>
            <div class="form-unit">
                <label>Email</label>
                <input type="text" v-model="email">
            </div>
            <div class="form-unit">
                <label>Password</label>
                <input type="text" v-model="password">
            </div>
            <div class="form-unit">
                <button class="extra-margin-top">Save</button>
            </div>
        </div>

        <div class="pad">
            <h2>2FA Secret</h2>
            <div>1245-7653-4556-3365</div>
            <div><img :src="'https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=ZZZZZZZZZZZZZZZzz'"></div>
            <h2>2FA Activation</h2>
            <div class="form-unit">
                <label>One-time password</label>
                <input type="text" v-model="otp">
            </div>
            <div class="form-unit">
                <button class="color1">Activate</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SettingsView',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            otp: '',
        }
    }
}
</script>

<style scoped>

.settings {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--gutter);
    align-items: start;
}

</style>