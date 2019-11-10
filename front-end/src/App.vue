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