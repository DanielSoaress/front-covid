<template>
    <v-app-bar app color="primary" dark>
        <div class="d-flex align-center font-weight-black">
            <h2 class="text-header">COVID-19 NO BRASIL</h2>
        </div>
        <v-spacer></v-spacer>
        <div class="menu-desktop">
            <v-hover v-for="menu in panelMenus" :key="menu.select">
            <v-btn class="mr-2" @click="sendMenuSelected(menu.select)" text>
                <span>{{ menu.description }}</span>
            </v-btn>
            </v-hover>
        </div>
        <div class="menu-mobile">
            <v-menu offset-y >
                <template v-slot:activator="{ on, attrs }">
                <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                >
                    <v-icon>{{ svgPath }}</v-icon>
                </v-btn>
                </template>
                <v-list>
                <v-list-item
                    v-for="(menu, index) in panelMenus"
                    :key="index"
                >
                    <v-list-item-title @click="sendMenuSelected(menu.select)">{{ menu.description }}</v-list-item-title>
                </v-list-item>
                </v-list>
            </v-menu>
        </div>
    </v-app-bar>
</template>

<script>
import { mdiMenu } from '@mdi/js'

export default {
    props: ['menuSelected'],
    data () {
        return {
            panelMenus: [{select: 0, description: 'PAINEL'},
                         {select: 1, description: 'INFORMAÇÕES'},
                         {select: 2, description: 'CORONAVÍRUS'},],
            svgPath: mdiMenu
        }
    },
    methods: {
        sendMenuSelected: function(data) {
            this.$emit('changeMenuSelected', data)
        }
    }
}
</script>