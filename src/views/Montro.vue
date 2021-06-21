<template>
  <div class="espaço">
     <div class="tamanho">Type
        <div class="cor2">
            <h3>{{this.changes.type}}</h3>
            <button @click="anotar(changes.type)">+</button>
        </div>
     </div>
    <div class="tamanho">Actions

        <div class="cor2" v-for="(item,index) in this.changes.actions" :key="index">
            <h3>{{item.name}}</h3>
                  <h3>{{item.index}}</h3>
                  <button @click="anotar(item.name)">+</button>
                  <div class="text"> <h3>{{item.desc}}</h3></div>
               </div>
        </div> 
     <div class="tamanho">Proficiencies
        <div class="cor2" v-for="(item,index) in this.changes.proficiencies" :key="index">
            <h3>{{item.proficiency.index}}</h3>
              <button @click="anotar(item.proficiency.index)">+</button>
        </div>

     </div>
      <div class="tamanho">Special abilities
        <div class="cor2" v-for="(item,index) in this.changes.special_abilities" :key="index">
            <h3>{{item.name}}</h3>
             <button @click="anotar(item.name)">+</button>
            proficiency
            <div class="text"> <h3>{{item.desc}}</h3></div>
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
        axios.get('https://www.dnd5eapi.co/api/monsters/'+ur)
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