<template>
  <v-app>
    <Header :menuSelected="menuSelected" @changeMenuSelected="setMenuSelected($event)"/>
    <div class="mt-5" v-show="menuSelected == 0">
      <Painel :menuSelected="menuSelected"/>
    </div>
    <div class="mt-5" v-if="menuSelected == 1">
      <Informacoes/>
    </div>
    <div class="mt-5" v-if="menuSelected == 2">
      <Coronavirus/>
    </div>
    <Footer />
  </v-app>
</template>

<script>
import Informacoes from './components/landingpage/Informacoes.vue';
import Coronavirus from './components/landingpage/Coronavirus.vue';
import Painel from './components/landingpage/Painel.vue';
import Header from './components/components/Header.vue';
import Footer from './components/components/Footer.vue';


export default {
  name: 'App',
  components: {
    Informacoes,
    Coronavirus,
    Header,
    Painel,
    Footer
  },
  data() {
    return {
      menuSelected: 0,
    }
  },
  methods: {
    setMenuSelected: function(data) {
      this.menuSelected = data;
    }
  },
  watch: {
    menuSelected: function() {
      if(this.menuSelected == 0) {
        this.search.state = "CE";
        this.search.city = "Fortaleza"
        this.responseApi = this.getReponseApi()
      }
    }
  },
  mounted: function () {
      this.search.state = "CE";
      this.search.city = "Fortaleza"
      this.responseApi = this.getReponseApi()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@media(min-width: 700.5px) {
  .menu-desktop {
    display: block;
  }
  .menu-mobile {
    display: none;
  }
}

@media(max-width: 700px) {
  .menu-desktop {
    display: none;
  }
  .menu-mobile {
    display: block;
  }
}

@media(max-width: 600px) {
  .text-header {
    font-size: 16px!important;
  }
}

</style>
