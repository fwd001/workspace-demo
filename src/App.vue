<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  padding: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: hidden;
}

#nav {
  // padding: 30px;
  height: 64px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
