<template>
    <div class="espaço1"> List of Classes
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
    .espaço{
        font-size: 25px;
        background:rgb(153, 204, 255);
        padding: 20px;
        margin: 10px;
    }
    .cor2{
      display: flex;
      flex-flow:column ;
      align-items: center;
      padding: 10px;
      margin: 2px;
      font-size: 15px;
      background:rgb(0, 102, 204)
    }
</style>