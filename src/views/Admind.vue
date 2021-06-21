<template>
  <div class="from">
      <h3>:: Criação de boneco :: </h3>
      <from submit.prevent="submit">
          <span>Race:<a href=""></a>: </span>
          <input type="raça" v-model='race'>
          <br><br>
          <span> Classe:</span>           
          <input type="classe" v-model ='classe'>
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
            race:'',
            classe:''
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
