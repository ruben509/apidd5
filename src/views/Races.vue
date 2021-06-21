<template>
    <div class="espaço1">List of races
        <button @click="carregaclasses">+</button>
        <div  class="cor2" v-for="(item,index) in resultados" :key="index">
            <h3>{{item.name}}</h3>
            <button @click="navega(item.index)">{{item.name}}</button>
        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
  
 data(){
    return{
      resultados:""
    }
  },
  methods:{
    navega(Race){
        this.$router.push('/Races/'+Race)
    },
    carregaclasses(){ 
      axios.get('https://www.dnd5eapi.co/api/races')
            .then(res=>{
              this.resultados= res.data.results
              console.log(this.resultados)
          })
        },
    mouted(){
        this.carregaclasses()
    }
  }
}
</script>

<style>
    .espaço1{
        
        display: flex;
        flex-flow: column wrap;
        justify-items: center;
        font-size: 25px;
        background:rgb(153, 204, 255);
        padding: 20px;
        margin: 10px;
    }
    
</style>