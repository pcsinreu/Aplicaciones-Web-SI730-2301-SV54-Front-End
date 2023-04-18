<template>

    <div class="grid">
        <div v-for="category in users" >
            <myComponent :name=category.name class="col" />
        </div>
    </div>
</template>

<script>
import myComponent from "@/components/my-component.vue";
import {UserServices} from "@/services/user-api.services";

export default {
    name: "list-component",
    components: {myComponent},
    data() {
        return{
            categories :[],
            users :null,
            userService : new UserServices()
        }
    },
    methods:{
        getAllUser: function (){
            this.userService.getUser().then(function (response) {
                console.log('response',response.data)
                this.users = response.data
        });
        }
    },
    mounted() {
        //invoco API
        this.getAllUser();
        //single responsability
        //this.categories = [{name:'nombre 1'},{name:'nombre 2'},{name:'nombre 3'},{name:'nombre 4'}]
    }
}
</script>

<style scoped>

.container-list {
    display: grid;
    grid-template-columns:1fr 1fr;
    grid-gap: 10px;
}

</style>