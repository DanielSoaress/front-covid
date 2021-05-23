<template>
    <v-container class="mb-5 pt-0">
        
        <v-row>
            <v-col cols="12">
                <h2>Artigos do Ministério da Saúde.</h2>
                <h3>CORONAVÍRUS COVID-19</h3>
            </v-col>
            <v-col cols="12" sm="6" md="4" v-for="link in links" :key="link.title">
                 <v-hover v-slot="{ hover }">
                    <a class="underline-none" :href="url + link.href">
                        <v-card :elevation="hover ? 8 : 2" height="150" 
                            class="d-flex justify-center align-center">
                            <v-card-title class="font-weight-black">
                                {{ link.title }}
                            </v-card-title>
                        </v-card>
                    </a>
                </v-hover>
            </v-col>
            <v-col cols="12" sm="6" md="4">
                 <v-hover v-slot="{ hover }">
                    <a class="underline-none" href="https://qsprod.saude.gov.br/extensions/covid-19_html/covid-19_html.html">
                        <v-card :elevation="hover ? 8 : 2" height="150" 
                            class="d-flex justify-center align-center">
                            <v-card-title class="font-weight-black">
                                COVID-19 no Brasil
                            </v-card-title>
                        </v-card>
                    </a>
                </v-hover>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

export default {
    data () {
        return {
            url: 'https://www.gov.br/saude/pt-br/coronavirus/',
            links: [
                {title: 'Vacinas', href:'vacinas'},
                {title: 'Entregas de Vacinas Covid-19', href: 'entregas-de-vacinas-covid-19'},
                {title: 'O que é a Covid-19?', href: 'o-que-e-o-coronavirus'},
                {title: 'Como é transmitido?', href: 'como-e-transmitido'},
                {title: 'Sintomas', href: 'sintomas'},
                {title: 'Como se proteger?', href: 'como-se-proteger'},                
                {title: 'Diagnóstico', href: 'diagnostico'},
                {title: 'Estou doente: o que fazer?', href: 'estou-doente-o-que-fazer'},
                {title: 'Atendimento e fatores de risco', href: 'atendimento-tratamento-e-fatores-de-risco'},
                {title: 'PrevCOV – Uma das maiores pesquisas sobre Covid-19 do mundo', href: 'prevcov'},
                {title: 'Serviços de Saúde', href: 'servicos-de-saude'},
                {title: 'Boletins Epidemiológicos', href: 'boletins-epidemiologicos'},
                {title: 'Distribuição de Testes', href: 'distribuicao-de-testes'},
                {title: 'Publicações Técnicas', href: 'publicacoes-tecnicas'},
                {title: 'Serviços de Saúde', href: 'servicos-de-saude'},
                {title: 'Perguntas e Respostas', href: 'perguntas-e-respostas'},
            ]
        }
    }
}
</script>


<style scoped>
.underline-none {
    text-decoration: none!important;
}
</style>