import { createRouter, createWebHistory} from "vue-router";

import AppHome from './pages/AppHome.vue';
import AppProjects from './pages/AppProjects.vue';
import AppTechnology from './pages/AppTechnology.vue';
import ProjectCard from './pages/ProjectCard.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: "/",
            name: "home",
            component: AppHome
        },
        {
            path: "/proj",
            name: "proj",
            component: AppProjects
        },
        {
            path: "/tech",
            name: "tech",
            component: AppTechnology
        },
        {
            path: "/proj/:id",
            name: "single-proj",
            component: ProjectCard
        },
    ]
});

export {router};