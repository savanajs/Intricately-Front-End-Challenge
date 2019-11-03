<template>
  <div id="wrapper">
    <HeaderComponent />
        <router-view></router-view>
    <FooterComponent />
  </div>
  
</template>

<script>

import './assets/styles/global.scss';
import HeaderComponent from './components/Header.vue';
import FooterComponent from './components/Footer.vue';

export default {
  name: 'appComponent',
  components: {
    HeaderComponent,
    FooterComponent,
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
