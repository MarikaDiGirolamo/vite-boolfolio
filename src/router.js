import { createRouter, createWebHistory} from "vue-router";

import AppProject from './pages/AppProject.vue';
import AppTechnology from './pages/AppTechnology.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: "/",
            name: "AppProject",
            component: AppProject
        },
        {
            path: "/tech",
            name: "AppTechnology",
            component: AppTechnology
        }
    ]
});

export {router};