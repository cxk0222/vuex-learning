<template>
  <div class="done">
    <div class="todos-container border-green">
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
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  async mounted() {
    const res = await this.getAllTodos()
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
    ...mapState(['todos', 'checkedTodos']),
  },
  methods: {
    ...mapActions(['syncCheckedTodos', 'getAllTodos']),
  }
}
</script>
