<template>
    <div class="my-form">
        <div>Edit User {{id}}</div>
        <label for="name2">Name :</label>
         <pv-inputText v-model="name2" id="name2"></pv-inputText>
        <label for="username">Username :</label>
        <pv-inputText v-model="username" id="username"></pv-inputText>
        <pv-button label="Save" @click="editUser()"></pv-button>
    </div>
</template>

<script>
import {UserServices} from "@/services/user-api.services";

export default {
    name: "user-form",
    data(){
        return{
            id:0,
            name2: '',
            username:'',
            userService : new UserServices()
        }
    },
    methods:{
        editUser(){

            const body ={ 'name':this.name2 ,'username': this.username}

        }
    },
    mounted() {
        if(this.$route.params.id){
            this.id = this.$route.params.id;
            console.log('getting id ',this.$route.params.id)
            this.userService.getUserById(this.id).then((response)=>{

                this.name2 = response.data.name;
                this.username = response.data.username;
            })

        }
    }
}
</script>

<style scoped>

.my-form{
    display:flex;
    flex-direction: column;
    background-color: beige;
}

</style>