<template>
    <v-footer
    color="primary lighten-1"
    padless
    class="mt-5"
  >
    <v-row
      justify="center"
      no-gutters
    >

    <v-row class=" white--text">
        <v-col cols="6" class="mx-auto">
            <p class="my-auto">
                Em caso de dúvidas acesse: 
                <v-btn class="" color="white" text rounded href="https://www.gov.br/saude/pt-br"> 
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
  Desenvolvido por <span>Daniel Soares</span> -        {{ new Date().getFullYear() }} <br> Projeto para Conclusão do Curso Sistemas de Informação da Faculdade Lourenço Filho
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {

  }
</script>