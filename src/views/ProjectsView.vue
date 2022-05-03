<template>
    <div class="projects-grid">
        <div v-for="(project, i) in projects" :key="i" class="pad project">
            <router-link :to="`projects/${project.id}`">
                <div class="folder">
                    <img src="@/assets/project-folder.png" alt="folder">
                    <span class="monogram">{{ monograms[i] }}</span>
                </div>
                <div class="name">{{ project.name }}</div>
            </router-link>
        </div>
        <div class="pad project">
            <router-link to="/project-new">
                <div class="folder">
                    <img src="@/assets/project-folder-new.png">
                </div>
                <div class="name">Add New Project</div>
            </router-link>
        </div>
    </div>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
    name: 'ProjectsView',
    data() {
        return {}
    },
    computed: {
        ...mapGetters(['projects']),
        monograms() {
            let result = []
            this.projects.forEach(project => {
                result.push(project.name.slice(0, 1).toUpperCase())
            })
            return result
        }
    }
}
</script>

<style scoped>

.projects-grid {
    display: grid;
    gap: var(--gutter);
    grid-template-columns: repeat(auto-fit, 400px);
}

.project {
    height: 340px; /* width is set in grid-template */
    display: grid;
    place-items: center;
}

.folder {
    position: relative;
}

.folder img {
    height: 200px;
}

.project:hover img {
    filter: saturate(70%);
}

.monogram {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-25%);
    font-size: 50px;
    font-weight: 700;
    color: white;
}

.name {
    text-align: center;
    color: var(--color-blue);
    font-weight: 600;
}

</style>