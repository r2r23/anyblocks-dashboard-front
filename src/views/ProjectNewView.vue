<template>
    <div>
        <h2>New Project</h2>
        <div class="project-pads-grid">
            <div class="pad">
                <div class="form-unit">
                    <label>Name</label>
                    <input type="text" v-model="project.name">
                </div>
                <div class="form-unit">
                    <label>Description</label>
                    <textarea v-model="project.description"></textarea>
                </div>
                <div class="form-unit">
                    <button @click="createProject">Create Project</button>
                </div>
            </div>
            <div class="pad">
                <div class="form-unit">
                    <label>Project's API key</label>
                    <textarea v-model="project.key" class="key mono" readonly="readonly"></textarea>
                </div>
                <div class="form-unit">
                    <button @click="regenerate()">Generate New Key</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'ProjectNewView',
    mounted() {
        this.regenerate()
    },
    data() {
        return {
            project: {
                name: '',
                description: '',
                key: '',
            }
        }
    },
    computed: {
        ...mapGetters(['projects'])
    },
    methods: {
        createProject(){
            this.$store.dispatch('createProject', {
                name: this.project.name
            })
            this.$router.push('/projects')
        },
        regenerate(){
            this.project.key = '0x' + Math.floor(Math.random() * 1000000000).toString(16)
        }
    }
}
</script>

<style scoped>

.project-pads-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--gutter);
    align-items: start;
}

textarea.key {
    height: 80px;
}

</style>