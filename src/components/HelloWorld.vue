<template>
  <div class="espaço1">
    
    <div class="Titulo">
       Welcome to Your Adventures Dungeons and Dragons 5e Adventures
    </div>
  </div>

</template>

<script>
import axios from "axios"
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      resultados:"",
      date:""
    }
  },
  methods:{
  
  }
  
}
</script>

<style scoped>
  .espaço1{
        display: flex;
        flex-flow: column wrap;
        justify-items: center;
        font-size: 25px;
        background:rgb(153, 204, 255);
        padding: 20px;
        margin: 10px;
    }
.Titulo{
  color: rgb(0%,0%,0%);
  font-size: 35px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
