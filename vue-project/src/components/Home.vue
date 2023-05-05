<template>

    <div class="form-user">
        <div class="input-control">
          <label class="label-input">User : </label>
          <pv-inputText v-model="username"></pv-inputText>
        </div>
        <p/>
        <div  class="input-control">
          <label class="label-input">Pass : </label>
          <pv-inputText  v-model="password"></pv-inputText>
        </div>
        <p/>
        <pv-button label="login" @click="loginUser()" />
    </div>

</template>

<script>
export default {
  name: "Home",
  data(){
      return{
          username:'',
          password:''
      }
  },
  methods:{
      loginUser(){

       console.log('login')
      }
  }
}
</script>

<style scoped>
.form-user{
    padding: 10px;
}
.label-input{
    width: 250px;
}

.input-control{
    margin-bottom: 20px;
}

</style>