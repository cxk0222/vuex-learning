<template>
  <div class="all">
    <div class="todos-container">
      <ul>
        <li v-for="(todo, index) in todos" :key="index" :class="{'is-done': todo.done}">
          {{ todo.text }} 
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from "vuex";
export default {
  name: 'all',
  async mounted() {
    await this.getAllTodos()
  },
  computed: {
    ...mapState(['todos'])
  },
  methods: {
    ...mapActions(['getAllTodos']),
  }
}
</script>

<style lang="scss" scoped>
.todos-container {
  width: 300px;
  margin: 10px auto 0;
  border: 1px solid gray;
  text-align: left;
}
.is-done {
  text-decoration: line-through;
}
</style>
