<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">All</router-link> |
      <router-link to="/undo">Undo</router-link> |
      <router-link to="/done">Done</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
ul {
  list-style: none;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.cursor-pointer {
  cursor: pointer;
}
.todos-container {
  width: 300px;
  margin: 10px auto 0;
  text-align: left;
}
.border-green {
  border: 1px solid green;
}
.border-red {
  border: 1px solid red;
}
.border-gray {
  border: 1px solid gray;
}
</style>
