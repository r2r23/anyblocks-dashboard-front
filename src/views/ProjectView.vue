<template>
    <div>
        <h2>Project: {{ project.name }}</h2>
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
                    <button @click="save()">Save</button>
                </div>
            </div>
            <div class="pad">
                <div class="form-unit">
                    <label>Project's API key</label>
                    <textarea v-model="project.key" class="key mono" readonly="readonly"></textarea>
                </div>
                <div class="form-unit">
                    <button @click="generate()">Generate New Key</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'ProjectView',
    data() {
        return {
            project: {
                id: '',
                name: '',
                description: '',
                key: '',
            }
        }
    },
    computed: {
        ...mapGetters(['projects']),
    },
    methods: {
        save(){

        },
        generate(){

        }
    },
    watch: {
        projects: {
            deep: true,
            immediate: true,
            handler(newVal) {
                let projectInStore = newVal.filter(p => p.id === parseInt(this.$route.params.id))[0]
                for (let n in projectInStore) {
                    this.project[n] = projectInStore[n]
                }
            }
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