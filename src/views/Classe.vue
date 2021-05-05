<template>
  <div class="espaço">
        <!-- <button @click="carregainfo1">Info</button>
        <div v-for="(item,index) in this.changes" :key="index">
            <h3>{{item}}</h3>
            <button>{{item}}</button>
        </div>
        <button @click="carregainfo">classe</button>
        <div v-for="(item,index) in this.resultados" :key="index">
            <h3>{{item}}</h3>
            <button>{{item}}</button>
        </div> -->
       
    </div>
</template>

<script>
import axios from "axios"
export default {
 data(){
    return{
      changes:""

    }
  },
  methods:{
    carregainfo(ur){ 
      axios.get('https://www.dnd5eapi.co/api/classes/'+ur)
            .then(res=>{
              //this.changes= res.data.proficiency_choies.from
              console.log(this.res)
        
             })
         } 
        },
    created(){
        this.carregainfo(this.$router.params.id)
    }
}
    
</script>

<style>
      .espaço{
        padding: 20px;
        margin: 10px;
    }
</style>