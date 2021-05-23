<template>
    <v-footer
    color="primary lighten-1"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >

    <v-row class=" white--text">
        <v-col cols="6" class="mx-auto">
            <p class="mt-2">
                Em caso de dúvidas acesse: 
                <v-btn color="white" text rounded href="https://www.gov.br/saude/pt-br"> 
                    gov.br/saude
                </v-btn> ou 
                <v-btn color="white" text rounded href="http://antigo.saude.gov.br/saude-de-a-z/ouvidoria-do-sus"> 
                    DISQUE SAÚDE 136
                </v-btn>
                </p>
            </v-col>
      </v-row>
      <v-col
        class="primary lighten-2 py-4  text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — Desenvolvido por <span>Daniel Soares</span> - Projeto para Conclusão de Curso  
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {

  }
</script>