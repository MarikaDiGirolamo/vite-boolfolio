<script>
import AppHeader from './components/AppHeader.vue';

// import { store } from './data/store';
export default {
  components: {
    AppHeader,

  },
  data() {
    return {
      // store
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
    <AppHeader />
  </header>

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
