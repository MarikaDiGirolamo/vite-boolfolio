<script>
import AppMain from './components/AppMain.vue'
import axios from "axios";
export default {
  components: {
    AppMain
  },
  data() {
    return {
      //store
    }
  },
  methods: {

  },

  mounted() {


  }
}

</script>

<template>
  <header>
    <a href="/">Project</a>
    <a href="/tech">Technology</a>
  </header>
  <AppMain />
  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
