<template>
    <div class="my-form">
        <div>Edit User {{id}}</div>
        <label for="names">Name :</label>
         <pv-inputText v-model="names" id="name"></pv-inputText>
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
            names: '',
            username:'',
            userService : new UserServices()
        }
    },
    methods:{
        editUser(){
            //generar body formato correcto
            const body = { 'name':this.names ,'username': this.username}


            this.userService.putUser(body,this.id).then((response) =>{

                  if ( response.status === 200){
                      alert("user updated")

                      this.$router.push('/ListUser')
                  }
                  else{
                      alert("error updating user")
                  }
            })



        }
    },
    mounted() {
        if(this.$route.params.id){
            this.id = this.$route.params.id;
            console.log('getting id ',this.$route.params.id)

            this.userService.getUserById(this.id).then((response)=>{

                this.names = response.data.name;
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