import { createRouter, createWebHistory} from "vue-router";

import AppProject from './pages/AppProject.vue';
import AppTechnology from './pages/AppTechnology.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: "/",
            name: "Project",
            component: AppProject
        },
        {
            path: "/tech",
            name: "Technology",
            component: AppTechnology
        }
    ]
});

export {router};