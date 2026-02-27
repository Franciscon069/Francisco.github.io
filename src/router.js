import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"
import App from "./App.vue"
import Info from "./components/Info.vue"

const routes = [
{
    path: '/',
    name: 'App',
    component:App,
},
{
    path:'/informacion',
    name:'Info',
    component:Info
}
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;