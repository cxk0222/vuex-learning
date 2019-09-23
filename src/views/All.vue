<template>
  <div class="all">
    <div class="todos-container border-gray">
      <ul>
        <li v-for="(todo, index) in todos" :key="index">
          <input type="checkbox" v-model="localCheckedTodos" :value="todo.id">
          {{ todo.text }} 
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { TodosService } from "@/service/todos";
import { mapActions, mapState } from "vuex";
export default {
  name: 'all',
  async mounted() {
    await this.getAllTodos()
    this.localCheckedTodos = this.checkedTodos
  },
  async beforeDestroy() {
    this.syncCheckedTodos(this.localCheckedTodos)
  },
  data() {
    return {
      localCheckedTodos: [],
    }
  },
  computed: {
    ...mapState(['todos', 'checkedTodos'])
  },
  methods: {
    ...mapActions(['getAllTodos', 'syncCheckedTodos']),
  }
}
</script>
