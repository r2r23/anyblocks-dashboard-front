<template>
    <div class="backdrop"
         @click="$emit('close-clicked')"
    >
        <div class="modal" @click.stop="">
            <header>
                <h2><slot name="title"></slot></h2>
            </header>
            <div class="body">
                <div class="icon"><slot name="icon"></slot></div>
                <div class="text"><slot name="text"></slot></div>
            </div>
            <footer>
                <slot name="footer"></slot>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalBox',
}
</script>

<style scoped>

.backdrop {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: 100;
    display: grid;
    place-items: center;
    background: rgba(0, 0, 0, .3);
    backdrop-filter: blur(4px);
}

.modal {
    max-width: 600px;
    min-height: 200px;
    padding: var(--gutter);
    display: grid;
    grid-template-rows: auto 1fr auto;
    background: white;
    border-radius: 5px;
}

header {
    margin-bottom: 0 !important; /* override for cases when modal is inside pad (eg FlexibleStaking -> TopCompanies -> Modal) */
}

.body {
    display: grid;
    grid-template-columns: auto 1fr;
    overflow: auto;
}

.body .icon i {
    margin-right: var(--gutter);
    font-size: 90px;
    color: var(--green);
}

.body .icon i.error {
    color: var(--red);
}

footer {
    padding-top: calc(var(--gutter) / 2);
    display: flex;
    justify-content: flex-end;
}

footer button:last-child {
    margin-left: 16px;
}

/* mobile */

#app.mobile .modal-container {
    width: 100%;
    max-width: 100%;
    height: 100vh;
    max-height: 100vh;
}

#app.mobile .modal-container .body {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
}

#app.mobile .modal-container header,
#app.mobile .modal-container footer {
    background: blue;
}

</style>