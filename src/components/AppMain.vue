<script>
import axios from "axios";
import AppProject from "../pages/AppProject.vue";
import AppTechnology from "../pages/AppTechnology.vue";
export default {
    name: "AppMain",
    components: {
        AppProject,
        AppTechnology
    },
    data() {
        return {
            apiUrl: "http://localhost:8000/api/",
            projects: []
        }

    },
    methods: {
        getProject() {
            axios.get(this.apiUrl + "projects").then(response => {
                // console.log(response.data.results);
                this.projects = response.data.results;
                // this.store.projects = response.data.results;
            })
        },
    },
    mounted() {
        this.getProject();
    }

}

</script>
<template>
    <h1>Qualsiasi cosa</h1>
    <div class="container">

        <div class="card my-3" v-for="project, i in projects " :key="i">
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
            <a href="{{ project.link }}">{{ project.link }}</a>
        </div>
    </div>
</template>