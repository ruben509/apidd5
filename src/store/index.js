import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favoritos:[]
  },
  mutations: {
    anotar(state, item){
      state.favoritos = [item,...state.favoritos]
    },
    desmarcaAnotação(state, index){
      state.favoritos.splice(index,1)
    }
  },
  actions: {
  },
  modules: {
  }
})
