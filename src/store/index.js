import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        personajes:[]
    },
    mutations:{
        _verPersonajes(state,personaje){
            state.personajes=personaje
        }
    },
    actions:{
        async verPersonajes(context){
            let response = await axios.get("https://rickandmortyapi.com/api/character")
            context.commit("_verPersonajes",response.data.results)
            console.log(response);
        }
    },
    getters:{
       getPersonajes: (state)=>{
           return state.personajes
       }
    }
});