<template>
  <div class="undo">
    <div class="todos-container">
      <ul>
        <li v-for="(todo, index) in undoTodos" :key="index" :class="{'is-done': todo.done}">
          {{ todo.text }}
          <span @click="makeTodoDone(todo.uuid)" class="cursor-pointer">✓</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  async mounted() {
    console.log('this', this)
    const res = await this.getAllTodos()
  },
  computed: {
    ...mapGetters(['undoTodos'])
  },
  methods: {
    ...mapActions(['getAllTodos', 'makeTodoDone'])
  }
}
</script>

<style lang="scss" scoped>
.todos-container {
  width: 300px;
  margin: 10px auto 0;
  border: 1px solid red;
  text-align: left;
}
</style>
