<template>
  <v-app>
     <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center font-weight-black">
       <h2>COVID-19 NO BRASIL</h2>
      </div>

      <v-spacer></v-spacer>

      <v-hover>
        <v-btn class="mr-2" @click="menuSelected = 0" text>
          <span>PAINEL</span>
        </v-btn>
      </v-hover>
      <v-hover>
        <v-btn class="mr-2" @click="menuSelected = 1" text>
          <span>INFORMAÇÕES</span>
        </v-btn>
      </v-hover>
      <v-hover>
        <v-btn class="mr-2" @click="menuSelected = 2" text>
          <span>CORONAVÍRUS</span>
        </v-btn>
      </v-hover>
    </v-app-bar>

    <v-main v-show="menuSelected == 0">
      <v-container>
        <v-row no-gutters>
          <v-col cols="4" sm="4">
            <CardSelect :search="search" @changeCurrentSearch="toSearch($event)"/>
          </v-col>
          <v-col cols="8">
            <v-row>
              <v-col cols="6">
                <CasoConfirmado :data="responseApi"/>
              </v-col>
              <v-col cols="6">
                <ObitosConfirmados :data="responseApi"/>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row  class="mt-5">
          <v-col cols="6" class="mx-auto">
            <v-card elevation="2">
              <v-card-subtitle class="d-flex justify-center font-weight-bold">
                Casos confirmados acumulados de COVID-19 no último ano<br> ({{ this.search.city}}/{{ this.search.state}})
              </v-card-subtitle>
              <CasosConfirmados :data="responseApi"/>
              <v-card-text>
                Fonte: Secretarias Estaduais de Saúde<br>
                Coleta e Análise: Brasil.IO
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="6" class="mx-auto">
            <v-card elevation="2">            
              <v-card-subtitle class="d-flex justify-center font-weight-bold">
                Novos casos de COVID-19 confirmados por dia <br> ({{ this.search.city}}/{{ this.search.state}})
              </v-card-subtitle>
              <NewConfirmed :data="responseApi"/>
              <v-card-text>
                Fonte: Secretarias Estaduais de Saúde<br>
                Coleta e Análise: Brasil.IO
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
         <v-row  class="mt-5">
          <v-col cols="6" class="mx-auto">
            <v-card elevation="2">            
              <v-card-subtitle class="d-flex justify-center font-weight-bold">
                Óbitos acumulados de COVID-19 no último ano<br> ({{ this.search.city}}/{{ this.search.state}})
              </v-card-subtitle>
              <Obitos :data="responseApi" />
              <v-card-text>
                Fonte: Secretarias Estaduais de Saúde <br>
                Coleta e Análise: Brasil.IO
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="6" class="mx-auto">
            <v-card elevation="2">
              <v-card-subtitle class="d-flex justify-center font-weight-bold">
                Novos óbitos por COVID-19 por dia no último mês <br> ({{ this.search.city}}/{{ this.search.state}})
              </v-card-subtitle>
              <NewDeaths :data="responseApi"/>
              <v-card-text>
                Fonte: Secretarias Estaduais de Saúde <br>
                Coleta e Análise: Brasil.IO
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="mt-5">
          <v-col cols="12" class="mx-auto">
            <v-card elevation="2">
              <v-card-subtitle class="d-flex justify-center font-weight-bold">
                Taxa de mortalidade (Mortes/Confirmados) de COVID-19 no último ano <br> ({{ this.search.city}}/{{ this.search.state}})
              </v-card-subtitle>
              <TaxaMortalidade :data="responseApi"/>
              <v-card-text>
                Fonte: Secretarias Estaduais de Saúde<br>
                Coleta e Análise: Brasil.IO
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row  class="mt-5">
          <v-col cols="12" class="mx-auto">
            <v-card elevation="2">
              <v-card-subtitle class="d-flex justify-center font-weight-bold">
                Relação entre casos confirmados acumulados e óbitos acumulados por COVID-19 por Semana Epidemiológica <br> ({{ this.search.city}}/{{ this.search.state}})
              </v-card-subtitle>
              <SemanaEpidemiologica :data="responseApi"/>
              <v-card-text>
                Fonte: Secretarias Estaduais de Saúde<br>
                Coleta e Análise: Brasil.IO
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row  class="mt-5">
          <v-col cols="12" class="mx-auto"> 
              <v-card elevation="2">
                <v-card-subtitle class="d-flex justify-center font-weight-bold">
                  Relação entre novos casos e novos óbitos de COVID-19 por Semana Epidemiológica no último ano<br> ({{ this.search.city}}/{{ this.search.state}})
                </v-card-subtitle>
                <NewSemanaEpidemiologica :data="responseApi"/>
                <v-card-text>
                  Fonte: Secretarias Estaduais de Saúde<br>
                  Coleta e Análise: Brasil.IO
                </v-card-text>
            </v-card>
          </v-col>
        </v-row>  
      </v-container>
    </v-main>
    <v-main v-if="menuSelected == 1">
        <Informacoes/>
    </v-main>
    <v-main v-if="menuSelected == 2">
        <Coronavirus/>
    </v-main>
  </v-app>
</template>

<script>
import CasosConfirmados from './components/chart/CasosConfirmados.vue';
import Obitos from './components/chart/Obitos.vue';
import TaxaMortalidade from './components/chart/TaxaMortalidade.vue';
import NewDeaths from './components/chart/NewDeaths.vue';
import NewConfirmed from './components/chart/NewConfirmed.vue';
import CardSelect from './components/card/CardSelect.vue';
import CasoConfirmado from './components/card/CasoConfirmado.vue';
import ObitosConfirmados from './components/card/ObitosConfirmados.vue';
import SemanaEpidemiologica from './components/chart/SemanaEpidemiologica.vue';
import NewSemanaEpidemiologica from './components/chart/NewSemanaEpidemiologica.vue';
import Informacoes from './components/landingpage/Informacoes.vue';
import Coronavirus from './components/landingpage/Coronavirus.vue';

export default {
  name: 'App',
  components: {
    CasosConfirmados,
    Obitos,
    TaxaMortalidade,
    NewDeaths,
    NewConfirmed,
    CardSelect,
    CasoConfirmado,
    ObitosConfirmados,
    SemanaEpidemiologica,
    NewSemanaEpidemiologica,
    Informacoes,
    Coronavirus
  },
  data() {
    return {
      axiosUrlCliente: 'https://api.brasil.io/v1/dataset/covid19/caso_full/data/?state=',
      token: "Token e65b862ba634d2c58d2587384ade9e6e24b1d684",
      responseApi: [],
      search: {
        state: '',
        city: ''
      },
      menuSelected: 0
    }
  },
  methods: {
    toSearch: function (search) {
      this.search = search;
      this.responseApi = this.getReponseApi()
    },
    getReponseApi: function (){
        let config = { headers: { Authorization: this.token } }
        return this.axios.get(
          this.axiosUrlCliente + this.search.state + "&city=" + this.search.city
          , config)
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
</style>
