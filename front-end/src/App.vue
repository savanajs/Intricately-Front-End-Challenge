<template>
  <div id="wrapper">
    <Header />
    <Home />
    <Footer />
  </div>
</template>

<script>

import './assets/styles/global.scss';
import Header from './includes/Header.vue';
import Footer from './includes/Footer.vue';
import Home from './pages/Home.vue';

export default {
  name: 'app',
  components: {
    Header,
    Home,
    Footer,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
