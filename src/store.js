import Vue from 'vue'
import Vuex from 'vuex'
import { TodosService } from "@/service/todos";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
  },
  getters: {
    doneTodos(state) {
      return state.todos.filter(todo => todo.done)
    },
    undoTodos(state) {
      return state.todos.filter(todo => !todo.done)
    },
  },
  mutations: {
    setTodos(state, todos) {
      state.todos = todos
    },
    makeTodoDone(state, uuid) {
      let todo = state.todos.find(todo => todo.uuid === uuid)
      todo.done = true
    },
    undoTodo(state, uuid) {
      let todo = state.todos.find(todo => todo.uuid === uuid)
      todo.done = false
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
    makeTodoDone({ commit }, uuid) {
      commit('makeTodoDone', uuid)
    },
    undoTodo({ commit }, uuid) {
      commit('undoTodo', uuid)
    }
  }
})
