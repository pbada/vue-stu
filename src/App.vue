<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'

export default {
  components: {
    ToolBar,
  }, 
}
</script>

<style>
body, html, p {margin:0; padding:0;}
</style>
