<template>
  <v-card
    class=""
    max-width="344"
    outlined
    elevation="4"
  >
    <v-card-title class="font-weight-bold">Pesquise uma localidade </v-card-title>
    <v-card-text>
         <v-select
          v-model="currentState"
          :items="stateList"
          label="Estado"
          class="pb-0"
        ></v-select>
        <v-select
          v-model="currentCity"
          :items="currentCityList"
          label="Município"
          :disabled="isSelectDisabled"
        ></v-select>
    </v-card-text>

    <v-card-actions>
        <v-btn
            color="blue lighten-2"
            text
            outlined
            @click="send"
            class="ml-auto"
            :disabled="isButtonDisabled"
        >
            Buscar
        </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
   export default {
    props: ['search'],
    data: () => ({
      stateList: ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB',
      'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'],
      cityList: [{state: 'AC', city: ['Rio Branco']},{state: 'AL', city: ['Maceió']},
      {state: 'AP', city: ['Macapá']},{state: 'AM', city: ['Manaus']},
      {state: 'BA', city: ['Salvador']},{state: 'CE', city: ['Fortaleza']},
      {state: 'DF', city: ['Brasília']},{state: 'ES', city: ['Vitória']},
      {state: 'GO', city: ['Goiânia']},{state: 'MA', city: ['São Luís']},
      {state: 'MT', city: ['Cuiabá']},{state: 'MS', city: ['Campo Grande']},
      {state: 'MG', city: ['Belo Horizonte']},{state: 'PA', city: ['Belém']},
      {state: 'PB', city: ['João Pessoa']},{state: 'PR', city: ['Curitiba']},
      {state: 'PE', city: ['Recife']},{state: 'PI', city: ['Teresina']},
      {state: 'RJ', city: ['Rio de Janeiro']},{state: 'RN', city: ['Natal']},
      {state: 'RS', city: ['Porto Alegre']},{state: 'RO', city: ['Porto Velho']},
      {state: 'RR', city: ['Boa Vista']},{state: 'SC', city: ['Florianópolis']},
      {state: 'SP', city: ['São Paulo']},{state: 'SE', city: ['Aracaju']},
      {state: 'TO', city: ['Palmas']}],
      currentCityList: [],
      currentState: '',
      currentCity: '',
      isSelectDisabled: true,
      isButtonDisabled: true,
    }),
    methods: {
        send() {
            this.$emit('changeCurrentSearch', {state: this.currentState, city: this.currentCity})
        }
    },
    watch: {
        currentState: function () {
            for(let i = 0; i < 27; i++) {
                if(this.currentState == this.cityList[i].state){
                    this.currentCityList = this.cityList[i].city
                }
            }
            this.isSelectDisabled = false;
            this.isButtonDisabled = true;
        },
        currentCity: function () {
            this.isButtonDisabled = false;
        },
    },
    mounted: function () {
      this.currentState = "CE";
      this.currentCity = "Fortaleza"
    }
  }
</script>