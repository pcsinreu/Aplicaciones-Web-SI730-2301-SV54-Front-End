import Home from '../src/components/Home.vue'
import FormData from "@/components/form-data.component.vue";
import ListComponent from "@/components/list-component.vue";
import NotFound from "@/components/NotFound.vue";
import {createRouter,createWebHashHistory}    from 'vue-router'
import UserForm from "@/components/user-form.vue";
import ListUser from "@/components/list-user.vue";

const routes = [
    {path:'/',component:Home },
    {path:'/AddTutorial/:id',component:FormData },
    {path:'/AddUser',component:UserForm },
    {path:'/User/:id',component:UserForm,name: 'user', },
    {path:'/ListComponent',component:ListComponent },
    {path:'/ListUser',component:ListUser },
    {path:'/:catchAll(.*)', component: NotFound}
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default  router;