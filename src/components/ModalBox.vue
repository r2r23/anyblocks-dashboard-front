<template>
    <div class="backdrop" @click="$emit('close-clicked')">
        <div class="modal" @click.stop>
            <i class="cross material-icons" @click="$emit('close-clicked')">close</i>
            <div class="sign" :class="{question: !sign || sign === 'question', check: sign === 'check'}"><i class="material-icons">{{ materialIconName }}</i></div>
            <div class="text"><slot name="text"></slot></div>
            <footer>
                <button v-if="cancel === true || cancel === undefined" class="passive" @click="$emit('close-clicked')">Cancel</button>
                <slot name="okbutton"></slot>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalBox',
    props: ['cancel', 'sign'],
    computed: {
        materialIconName() {
            if(this.sign === 'check') {
                return 'check_circle'
            }
            return 'help'
        }
    }
}
</script>

<style scoped>

.modal {
    position: fixed;
    top: 50%; left: 50%;
    z-index: 95;
    transform: translateX(-50%) translateY(-50%);
    width: 440px;
    min-height: 251px;
    padding: var(--gutter);
    background: white;
    border: 1px solid rgba(10, 54, 119, 0.2);
    border-radius: 10px;
    box-shadow: 0 15px 20px 3px rgba(0, 49, 121, 0.1);
}

.modal > * {
    text-align: center;
}

.cross {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 30px;
    color: lightgrey;
    cursor: pointer;
}

.sign i {
    font-size: 76px;
}

.sign.question i {
    color: #D8A093;
}

.sign.check i {
    color: #93d8ab;
}

.text {
    margin: 15px 0 30px 0;
}

button {
    width: 101px;
    padding: 10px 0;
}

button:not(:last-child) {
    margin-right: 20px;
}



</style>