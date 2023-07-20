<script>
import { store } from '../data/store';
export default {
    name: " ProjectCard",
    props: {
        project: Object
    },
    data() {
        return {
            store,
            projects: {}
        }
    },
    methods: {

    },

    mounted() {


    }
}

</script>

<template>
    <h1>{{ project.title }}</h1>
    <h3>Description: {{ project.content }}</h3>
    <div v-if="project.technologies">
        <h4>Technology:</h4>
        <span v-for="technology, i in project.technologies" :key="i">{{
            technology.name }}&nbsp;</span>
    </div>
    <div v-else>
        <span>Nessuna tecnologia selezionata</span>

    </div>
    <h4>Link:</h4>
    <h4 v-if="project.link"> link: <a :href="project.link"> {{ project.link }} </a>
    </h4>

    <!-- <router-link :to="{ name: 'single-proj', params: { id: proj.id } }" class="navLink"><button>Prew</button></router-link> -->
</template>
