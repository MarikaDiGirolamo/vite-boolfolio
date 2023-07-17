<script>
import axios from "axios";
export default {
    name: "AppMain",
    data() {
        return {
            apiUrl: "http://localhost:8000/api/",
            projects: []
        }

    },
    methods: {

    },
    mounted() {
        axios.get(this.apiUrl + "projects").then(response => {
            console.log(response.data.results);
            this.projects = response.data.results;
        })
    }
}

</script>
<template>
    <div class="container">

        <div class="card" v-for="project in projects">
            <h1>{{ project.title }}</h1>
            <h3>Description: {{ project.content }}</h3>
            <h4>Technology:
                <span v-if="project.technology" v-for="technology in project.technologies">{{
                    technologies.name }}&nbsp;</span>
                <span v-else>Nessuna tecnologia selezionata</span>
            </h4>
            <h4>Link:</h4>
            <a href="">{{ project.link }}</a>
        </div>
    </div>
</template>