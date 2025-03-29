import { createStore } from "vuex";
import axios from 'axios'

export default createStore({
    state:{
        users:[]
    },
    /*
     ** MUTATIONS(동기 처리)  // state 변수 값 변경을 시키는 함수를 만듦 (setter함수)
     */
    mutations:{
        setUsers(state, users) {
            state.users = users
        }
    },
    /*
     ** GETTERS 함수  //state 기본적을 읽어 오는 함수
     */
    getters:{
        getUsers:(state) => state.users
    },
    /*
     ** ACTIONS (비동기처리)     //
     */
    actions:{
        async fetchUsers({ commit }) {
            try {

                const data = await axios.get('https://jsonplaceholder.typicode.com/users')

                //this.state.users = data; //이것이 안됨.

                commit('setUsers', data.data)

            } catch (error) {
                alert(error)
                console.log(error)
            }
        }
    }

})