<template>
    <div class="my-form">
        <label for="name2">Name :</label>
         <pv-inputText v-model="name2" id="name2"></pv-inputText>
        <label for="username">Username :</label>
        <pv-inputText v-model="username" id="username"></pv-inputText>
        <pv-button label="Save" @click="saveuser()"></pv-button>}
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