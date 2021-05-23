<template>
    <v-container class="mb-5 pt-0">
        <v-row>
            <v-col cols="12">
                <h2>CORONAVÍRUS COVID-19</h2>
                <h2>O que você precisa saber e fazer.</h2>
            </v-col>
            <v-col cols="12">
              <v-img
              max-height="300"
              :src="require('@/assets/use-mask.png')"
              contain
              ></v-img>
            </v-col>
        </v-row>
        <v-row class="my-5">
            <v-col cols="12">
            <h3>Como posso me proteger?</h3>
            </v-col>
            <v-col cols="4">
                <v-hover v-slot="{ hover }">
                    <v-card :elevation="hover ? 8 : 2" >
                        <v-img
                        height="250"
                        src="https://www.sindmepa.org.br/wp-content/uploads/2020/08/5e68feee230000d11a0c1387.jpeg"
                        ></v-img>
                        <v-row
                            align="center"
                            class="mx-0"
                        >
                        <v-card-text>

                            Lave as mãos com frequência, com água e sabão, ou higienize com álcool em gel 70%.
                        </v-card-text>
                        </v-row>
                    </v-card>
                </v-hover>
            </v-col>
            <v-col cols="4">
                <v-hover v-slot="{ hover }">
                    <v-card :elevation="hover ? 8 : 2" >
                        <v-img
                        height="250"
                        src="https://conteudo.imguol.com.br/c/entretenimento/2a/2020/03/24/tosse-de-maneira-correta-1585055081033_v2_1254x836.jpg"
                        ></v-img>
                        <v-row
                            align="center"
                            class="mx-0"
                        >
                        <v-card-text>
                            Ao tossir ou espirrar, cubra o nariz e boca com lenço ou com o braço, e não com as mãos.
                        </v-card-text>
                        </v-row>
                    </v-card>
                </v-hover>
            </v-col>
            <v-col cols="4">
                <v-hover v-slot="{ hover }">
                    <v-card :elevation="hover ? 8 : 2" >
                        <v-img
                        height="250"
                        src="https://image.freepik.com/fotos-gratis/pessoa-doente-usando-uma-mascara-dentro-de-casa_23-2148506081.jpg"
                        ></v-img>
                        <v-row
                            align="center"
                            class="mx-0"
                        >
                            <v-card-text>
                                Se tiver doente, evite contato físico com outras pessoas e fique em casa até melhorar.
                            </v-card-text>
                        </v-row>
                    </v-card>
                </v-hover>
            </v-col>
            <v-col cols="4">
                <v-hover v-slot="{ hover }">
                    <v-card :elevation="hover ? 8 : 2" >
                        <v-img
                        height="250"
                        src="https://socientifica.com.br/wp-content/uploads/2020/07/Eye-Rubbing.jpg"
                        ></v-img>
                        <v-row
                            align="center"
                            class="mx-0"
                        >
                        <v-card-text>
                            Evite tocar olhos, nariz e boca com as mãos não lavadas. Ao tocar, lave sempre as mãos.
                        </v-card-text>
                        </v-row>
                    </v-card>
                </v-hover>
            </v-col>
            <v-col cols="4">
                <v-hover v-slot="{ hover }">
                    <v-card :elevation="hover ? 8 : 2" >
                        <v-img
                        height="250"
                        src="https://computerworld.com.br/wp-content/uploads/2020/03/Especialista-d%C3%A1-dicas-para-quem-deseja-limpar-celular-corretamente.jpg"
                        ></v-img>
                        <v-row
                            align="center"
                            class="mx-0"
                        >
                            <v-card-text>
                                Não compartilhe objtetos de uso pessoal, como talheres, toalhas, pratos e copos.
                            </v-card-text>
                        </v-row>
                    </v-card>
                </v-hover>                
            </v-col>
            <v-col cols="4">
                <v-hover v-slot="{ hover }">
                    <v-card :elevation="hover ? 8 : 2" >
                        <v-img
                        height="250"
                        src="https://s.france24.com/media/display/115b2a1e-b7f2-11ea-8372-005056bff430/w:1280/p:16x9/LATTAM%201%20OK.jpg"
                        ></v-img>
                        <v-row
                            align="center"
                            class="mx-0"
                        >
                            <v-card-text>
                                Evite aglomerações e mantemja os ambientes ventilados.
                            </v-card-text>
                        </v-row>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
        <v-row class="my-5">
            <v-col cols="12">
                <h3>Como o coronavírus (Covid-19) é transmitido?</h3>
                <p class="mt-3">A transmissão acontece de uma pessoa doente para outra ou por contato próximo (cerca de 2 metros), por meio de:</p>
            </v-col>
            <v-col cols="2">
                <v-hover v-slot="{ hover }" >
                    <v-card :elevation="hover ? 8 : 2" class="align-self-stretch">
                        <v-img
                        height="250"
                        src="https://super.abril.com.br/wp-content/uploads/2020/04/saliva-corona-fb.png"
                        ></v-img>
                        <v-row
                            align="center"
                            class="mx-0"
                        >
                        <v-card-text>
                            Gotículas de saliva
                        </v-card-text>
                        </v-row>
                    </v-card>
                </v-hover>
            </v-col>
            <v-col cols="2">
                <v-hover v-slot="{ hover }">
                    <v-card :elevation="hover ? 8 : 2" >
                        <v-img
                        height="250"
                        src="https://blog.adias.com.br/wp-content/uploads/2018/01/160219-espirro-em-ambientes-com-arcondicionado-o-que-pode-ser.jpg"
                        ></v-img>
                        <v-row
                            align="center"
                            class="mx-0"
                        >
                            <v-card-text>
                                Espirro
                            </v-card-text>
                        </v-row>
                    </v-card>
                </v-hover>
            </v-col>
            <v-col cols="2">
                <v-hover v-slot="{ hover }">
                    <v-card :elevation="hover ? 8 : 2" >
                        <v-img
                        height="250"
                        src="https://www.pneumocenter.com.br/wp-content/uploads/2017/10/30.10_tosse-seca.jpg"
                        ></v-img>
                        <v-row
                            align="center"
                            class="mx-0"
                        >
                        <v-card-text>
                            Tosse                    
                        </v-card-text>
                        </v-row>
                    </v-card>
                </v-hover>
            </v-col>
            <v-col cols="2">
                <v-hover v-slot="{ hover }">
                    <v-card :elevation="hover ? 8 : 2">
                        <v-img
                        height="250"
                        src="https://conteudo.imguol.com.br/c/entretenimento/31/2021/02/10/menino-lambe-o-proprio-catarro-muco-secrecao-1612969578533_v2_1254x836.jpg"
                        ></v-img>
                        <v-row
                            align="center"
                            class="mx-0"
                        >
                            <v-card-text>
                                Catarro
                            </v-card-text>
                        </v-row>
                    </v-card>
                </v-hover>
            </v-col>
            <v-col cols="2">
                <v-hover v-slot="{ hover }">
                    <v-card :elevation="hover ? 8 : 2" >
                        <v-img
                        height="250"
                        src="https://www.canaadoscarajas.pa.gov.br/novo/wp-content/uploads/2019/05/APERTO-MAO.jpg"
                        ></v-img>
                        <v-row
                            align="center"
                            class="mx-0"
                        >
                            <v-card-text>
                                Toque
                            </v-card-text>
                        </v-row>
                    </v-card>
                </v-hover>
            </v-col>
            <v-col cols="2">
                <v-hover v-slot="{ hover }">
                    <v-card :elevation="hover ? 8 : 2" >
                        <v-img
                        height="250"
                        src="https://conteudo.imguol.com.br/c/entretenimento/3c/2020/03/17/botao-de-elevador-1584459587374_v2_450x337.jpg"
                        ></v-img>
                        <v-row
                            align="center"
                            class="mx-0"
                        >
                            <v-card-text>
                                Objetos contaminadas
                            </v-card-text>
                        </v-row>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
        <v-row class="my-5">
            <v-col cols="12">
                <h3>E quais são os principais sintomas?</h3>
                <p class="mt-3">O coronavírus (Covid-19) é similar a uma gripe. Geralmente é uma doença leve a moderada, mas alguns casos podem ficar graves. Alguns pacientes também apresentam cansaço, dores no corpo, mal estar, congestão nasal, coriza, dor de garganta ou dor no peito. Algumas pessoas são infectadas, mas não apresentam sintomas ou apresentam sintomas muito leves. A maioria se recupera sem precisar de tratamento especial. No entanto, outras podem apresentar a forma grave da doença, principalmente idosos, imunossuprimidos, gestantes, nutrizes e portadores de doenças crônicas descompensadas. <br> Os sintomas mais comuns são:</p>
            </v-col>
            <v-col cols="4">
                <v-hover v-slot="{ hover }" >
                    <v-card :elevation="hover ? 8 : 2" class="align-self-stretch">
                        <v-img
                        height="250"
                        src="http://i.mlcdn.com.br/portaldalu/fotosconteudo/7712.jpg"
                        ></v-img>
                        <v-row
                            align="center"
                            class="mx-0"
                        >
                        <v-card-text>
                            Febre
                        </v-card-text>
                        </v-row>
                    </v-card>
                </v-hover>
            </v-col>
            <v-col cols="4">
                <v-hover v-slot="{ hover }">
                    <v-card :elevation="hover ? 8 : 2" >
                        <v-img
                        height="250"
                        src="https://www.pneumocenter.com.br/wp-content/uploads/2017/10/30.09_Tosse-produtiva.jpg"
                        ></v-img>
                        <v-row
                            align="center"
                            class="mx-0"
                        >
                            <v-card-text>
                                Tosse
                            </v-card-text>
                        </v-row>
                    </v-card>
                </v-hover>
            </v-col>
            <v-col cols="4">
                <v-hover v-slot="{ hover }">
                    <v-card :elevation="hover ? 8 : 2" >
                        <v-img
                        height="250"
                        src="https://wp.rededorsaoluiz.com.br/wp-content/uploads/2019/12/HeroDificuldadeRespirar_852x334.jpg"
                        ></v-img>
                        <v-row
                            align="center"
                            class="mx-0"
                        >
                        <v-card-text>
                            Dificuldade para respirar                    
                        </v-card-text>
                        </v-row>
                    </v-card>
                </v-hover>
            </v-col>

        </v-row>
        <v-row class="my-5">
            <v-col cols="6" class="mx-auto">
                <p class="mt-3">Saiba como proteger você e sua família. <br>
                     Em caso de dúvidas acesse: <a href="https://www.gov.br/saude/pt-br"> gov.br/saude</a> ou DISQUE SAÚDE  136
                </p>
            </v-col>

        </v-row>
    </v-container>
</template>