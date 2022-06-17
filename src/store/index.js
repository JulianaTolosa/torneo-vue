import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

import faseGruposStore from './modules/fase-grupos.store';
export default new Vuex.Store({
  strict: true,
  state: {
    modoEdicion: false,
    keyModoAdmin: "modoAdmin"
  },
  getters: {
  },
  mutations: {
    setearModoEdicion(state, pModoEdicion){
      state.modoEdicion = pModoEdicion;
     if(pModoEdicion){
      localStorage.setItem(state.keyModoAdmin,"");
     }else{
       localStorage.removeItem(state.keyModoAdmin);
     }
    },
    intentoSetearModoEdicionDesdeLocalStorage(state){
      const result = localStorage.getItem(state.keyModoAdmin);
      // if (result != null){
      //   state.modoEdicion = true;
      // }
      state.modoEdicion = (result != null);
    }
  },
  actions: {
      setearModoEdicion({commit}, pModoEdicion){
          commit("setearModoEdicion", pModoEdicion);
       },
       
      intentoSetearModoEdicionDesdeLocalStorage({commit}){
        commit("intentoSetearModoEdicionDesdeLocalStorage");
      }
  },
  modules: {
    faseGruposStore
  }
})
