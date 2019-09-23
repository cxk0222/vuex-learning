import Vue from 'vue'
import Vuex from 'vuex'
import { TodosService } from "@/service/todos";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    checkedTodos: [],
  },
  mutations: {
    setTodos(state, todos) {
      state.todos = todos
    },
    syncCheckedTodos(state, checkedTodos) {
      state.checkedTodos = checkedTodos
    }
  },
  actions: {
    async getAllTodos({ state, commit }) {
      // 阻止重复请求
      if (state.todos.length > 0) return
      const res = await TodosService.getTodos()
      if (res.ok) {
        commit('setTodos', res.todos)
        return { ok: true }
      } else {
        return { ok: false, error: res.error }
      }
    },
    syncCheckedTodos({ commit }, checkedTodos) {
      console.log('checkedTodos', checkedTodos)
      commit('syncCheckedTodos', checkedTodos)
    }
  }
})
