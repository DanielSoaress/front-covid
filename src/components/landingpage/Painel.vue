<template>
    <v-container>
        <v-row no-gutters>
          <v-col cols="12" sm="12" md="4">
            <CardSelect class="mx-auto mx-md-0" :search="search" @changeCurrentSearch="toSearch($event)"/>
          </v-col>
          <v-col cols="12" sm="12" md="8" class="mt-5 mt-sm-0 mt-md-0">
            <v-row>
              <v-col cols="12"  sm="12" md="6">
                <CasoConfirmado class="mx-auto mt-sm-5 mt-md-0"  :data="responseApi"/>
              </v-col>
              <v-col cols="12" sm="12" md="6">
                <ObitosConfirmados class="mx-auto"  :data="responseApi"/>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row  class="mt-5">
          <v-col xs="12" sm="12" md="6" class="mx-auto">
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
          <v-col xs="12" sm="12" md="6" class="mx-auto">
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
          <v-col xs="12" sm="12" md="6"  class="mx-auto">
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
          <v-col xs="12" sm="12" md="6" class="mx-auto">
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
</template>

<script>
/// Chart.js
import SemanaEpidemiologica from '@/components/chart/SemanaEpidemiologica.vue';
import NewSemanaEpidemiologica from '@/components/chart/NewSemanaEpidemiologica.vue';
import CasosConfirmados from '@/components/chart/CasosConfirmados.vue';
import Obitos from '@/components/chart/Obitos.vue';
import TaxaMortalidade from '@/components/chart/TaxaMortalidade.vue';
import NewDeaths from '@/components/chart/NewDeaths.vue';
import NewConfirmed from '@/components/chart/NewConfirmed.vue';
/// Cards
import CardSelect from '@/components/card/CardSelect.vue';
import CasoConfirmado from '@/components/card/CasoConfirmado.vue';
import ObitosConfirmados from '@/components/card/ObitosConfirmados.vue';

export default {
    props: ['menuSelected'],
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
        },
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