<template>
    <div class="espaço5">
         <app-card class="favoritos" cor="rgb(102, 0, 255)">
           <p>Anotaçoes</p>
          <div class="cor2" v-for="(item,index) in $store.state.favoritos" :key="index">
            <div>
                <h3>{{item}}</h3>
                <button @click="desmarcaAnotação(index)">remover</button>
            </div>
          </div>
        </app-card>
        List of proficiencies
        <button class="butao" @click="carregaclasses">+</button>
        <div  class="cor2" v-for="(item,index) in resultados" :key="index">
            <h3>{{item.name}}</h3>
            <button @click="navega(item.index)">{{item.name}}</button>
        </div>
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
      resultados:""
    }
  },
  methods:{
    navega(Proficiencie){
        this.$router.push('/Proficiencies/'+Proficiencie)
    },
    desmarcaAnotação(index){
        this.$store.commit('desmarcaAnotação',index)
        //this.favoritos.splice(index,1)
     },
    carregaclasses(){ 
      axios.get('https://www.dnd5eapi.co/api/proficiencies')
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
    .butao{
      height: 30px;
      width: 30px;
    }
    .favoritos{
        max-width: 180px;
        font-weight: 700;
        color: white;
      }
</style>