<script>
import axios from "axios";

import ProjectCard from "../pages/ProjectCard.vue";
import { store } from "../data/store";

export default {
    name: "AppProjects",

    components: {
        ProjectCard
    },
    data() {
        return {
            store,
            projects: [],
            loading: false,
            loadingError: false,
            postsCurrentPage: 0,
            postsTotalPages: 0,
        }
    },
    methods: {
        getPostsPage(pageNumber) {
            this.loading = true
            let config = {
                params: {
                    page: (pageNumber)
                }
            };
            axios.get(this.store.apiUrl + "projects", config).then(response => {
                console.log(response.data);
                this.projects = response.data.results.data
                this.postsCurrentPage = response.data.results.current_page;
                this.postsTotalPages = response.data.results.last_page;
                this.loading = false
            }).catch(err => {
                this.loading = false;
                this.loadingError = err.message;
            });
        },

    },

    mounted() {
        this.getPostsPage(1)
    }

}



</script>

<template>
    <div class="container">
        <div class="card my-3" v-for="project, i in projects" :key="i">
            <ProjectCard :project="project" />

        </div>
    </div>

    <h1 v-if="loading"> LOADING</h1>

    <div v-if="!loading">
        <!-- <ProjectCard :project="project" v-for="project, i in projects" :key="i" /> -->
    </div>
    <a class="button" @click="this.postsCurrentPage > 1 && getPostsPage(this.postsCurrentPage - 1)">Pagina precedente</a>
    <a class="button" @click="this.postsCurrentPage && getPostsPage(pageNumber)" v-for="pageNumber, i in postsTotalPages"
        :key="i">{{
            pageNumber }}</a>
    <a class="button"
        @click="this.postsCurrentPage < this.postsTotalPages && getPostsPage(this.postsCurrentPage + 1)">Pagina
        successiva</a>
</template>