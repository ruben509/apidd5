<template>
      <div class="espaço1">List of monsters
          <button @click="carregaclasses">+</button>
        <div  class="cor2" v-for="(item,index) in resultados" :key="index">
            <h3>{{item.name}}</h3>
            <button @click="navega(item.index)">{{item.index}}</button>
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
    navega(Montro){
        this.$router.push('/Montros/'+Montro)
    },
    carregaclasses(){ 
      axios.get('https://www.dnd5eapi.co/api/monsters')
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
        flex-flow: row wrap;
        justify-items: center;
        font-size: 25px;
        background:rgb(153, 204, 255);
        padding: 20px;
        margin: 10px;
    }
</style>