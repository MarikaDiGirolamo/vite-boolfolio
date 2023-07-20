<script>
import { store } from '../data/store';
export default {
    name: " AppHeader",
    data() {
        return {
            store,
            // navLinks: [
            //     { label: "Home", name: "home" },
            //     { label: "Projects", name: "proj" },
            //     { label: "Tech", name: "tech" },
            // ]
        }
    },
    methods: {

    },

    mounted() {


    }
}

</script>

<template>
    <div class="container-fluid fixed-top px-5">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Portfolio X</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                        <a class="nav-link" href="/proj">Project</a>
                        <!-- <a class="nav-link" href="/proj/:id">Details</a> -->
                        <a class="nav-link" href="/tech">Tech</a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>