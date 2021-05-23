<template>
  <v-card
    class=""
    max-width="344"
    outlined
    elevation="2"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">
          Óbitos Confirmados
        </v-list-item-title>
        <v-list-item-title class="headline mb-1 font-weight-bold">
          {{ deathsConfirmed }}
        </v-list-item-title>
        <v-list-item-title class="headline mb-1">
          Acumulados
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

  </v-card>
</template>

<script>
  export default {
    props: ['data'],
    data() {
      return {
        deathsConfirmed: '' 
      }
    },
    watch: {
      data: function () {
        this.data.then((result) => {
          this.deathsConfirmed = result.data.results[0].last_available_deaths;
        })
        console.log(this.deathsConfirmed)
      }
    }
  }
</script>