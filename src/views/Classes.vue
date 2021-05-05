<template>
    <div class="espaço">
        <button @click="carregaclasses">clases</button>
        <div v-for="(item,index) in resultados" :key="index">
            <h3>{{item}}</h3>
            <button @click="navega(item.index)">{{item.index}}</button>
        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
 data(){
    return{
      resultados:[]
    }
  },
  methods:{
    navega(Classe){
        this.$router.push('/Classes/'+Classe)
    },
    carregaclasses(){ 
      axios.get('https://www.dnd5eapi.co/api/classes')
            .then(res=>{
              this.resultados= res.data.results
              console.log(this.resultados)
          })
        },
    carregainfo(){
        axios.get('https://www.dnd5eapi.co/api/classes/barbarian')
            .then(res=>{
              this.resultados= res.data.info
              console.log(this.resultados)
          })
        },
    mouted(){
        this.carregainfo()
    }
  }
}
</script>

<style>
    .espaço{
        padding: 20px;
        margin: 10px;
    }
</style>