import { defineStore } from "pinia"

export const useCouterStore = defineStore('counter',{
    state: ()=>({count:0}),
    actions:{
        increment(){
            this.count++
        }
    },
    getters:{
        getDoubleCount(state){
            return state.count * 2;
        }
    }
})