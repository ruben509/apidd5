<template>
  <div class="from">
      <h3>:: Login :: </h3>
      <from submit.prevent="submit">
          <span>Email: </span>
          <input type="email" v-model='email'>
          <br><br>
          <span> Senha:</span>           
          <input type="password" v-model='password'>
          <br><br>
          <button type="submit">Entar </button> 
      </from>
  </div>
</template>

<script>
import axios from "axios"
export default {
    data(){
        return {
            email:'',
            password:''
        }
    },
    methods:{
        submit(){
            axios-post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCe-2EqEzbpJmKKL_fNIfIFRu-8wE-ogFI'
            ,{
                email:ths.email,
                passaword:this.password,
                returnSecureToken:true
            })
                .then(
                    res=> console.log(res)
                )
                .catch(
                    res => console.log(res)
                )
        }
    }
}
</script>

<style>
    .from {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

    }
</style>