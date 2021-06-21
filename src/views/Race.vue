<template>
  <div class="espaço">
       <div class="tamanho">Alignment
        <div class="cor2">
            <h3>{{this.changes.alignment}}</h3>
            <button @click="anotar(changes.alignment)">+</button>
        </div>
     
      <div class="tamanho">Age
          <div class="cor2">
            <h3>{{this.changes.age}}</h3>
            <button @click="anotar(changes.age)">+</button>
        </div>
      </div>
        <div class="tamanho">Traits
        <div class="cor2" v-for="(item,index) in this.changes.traits" :key="index">
            <h3>{{item.name}}</h3>
            <button @click="anotar(item.name)">+</button>
        </div>
      </div>
       
      <div class="tamanho">Languages

        <div class="cor2" v-for="(item,index) in this.changes.languages" :key="index">
            <h3>{{item.name}}</h3>
            <button @click="anotar(item.name)">+</button>
        </div>
      </div>
    </div>
     <app-card class="favoritos" cor="rgb(102, 0, 255)">
           <p>Anotaçoes</p>
          <div class="cor2" v-for="(item,index) in $store.state.favoritos" :key="index">
            <div>
                <h3>{{item}}</h3>
                <button @click="desmarcaAnotação(index)"> remover</button>
            </div>
          </div>

        </app-card>
  </div>

</template>

<script>
import axios from "axios"
import appCard from '@/components/app-card.vue'
export default {
  components: {
      appCard
    },
 data(){
    return{
      changes:"",
      favoritos:[]
    }
  },
  methods:{
      anotar(item){
       //this.favoritos.unshift(item)
       this.$store.commit('anotar', item)
     },
     desmarcaAnotação(index){
        this.$store.commit('desmarcaAnotação',index)
        //this.favoritos.splice(index,1)
     },
     carregaclasses(ur){
        axios.get('https://www.dnd5eapi.co/api/races/'+ur)
            .then(res=>{
              this.changes= res.data
              console.log(this.changes)
          })
        }
   
    },
     mounted(){
       //console.log(this.$route.params.id)
        this.carregaclasses(this.$route.params.id)
     }
  }
  

    
</script>

<style>
     .espaço{ 
        display: flex;
        font-size: 25px;
        background:rgb(153, 204, 255);
        padding: 20px;
        margin: 10px;
    }
      .tamanho{
        padding: 20px;
        margin: 10px;
        color: black;
        font-size: 35px;


      }
      .favoritos{
        max-width: 130px;
        font-weight: 700;
        color: white;
      }
      
</style>