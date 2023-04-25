<template>
    <div class="my-form">
        <div>Create new User</div>
        <label for="name2">Name :</label>
        <pv-inputText v-model="name2" id="name2"></pv-inputText>
        <label for="username">Username :</label>
        <pv-inputText v-model="username" id="username"></pv-inputText>
        <pv-button label="Save" @click="saveuser()"></pv-button>
    </div>

</template>

<script>
import {UserServices} from "@/services/user-api.services";
export default {
    name: "new-user-form",
    methods:{

        saveuser(){

            const body ={ 'name':this.name2 ,'username': this.username}
            //const body ={ this.name ,this.username}

            this.userService.postUser(body).then((response)=>{
                if( response.status === 201){
                    alert('Created')
                    this.$router.push('/')
                }
                else{
                    alert('Error creating user')
                }

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