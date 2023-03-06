<script setup>

import { RouterLink, RouterView } from 'vue-router'

import RollerHeader from '@/components/Header.vue'
import RollerNavbar from '@/components/Navbar.vue'
import VFSTunablePanel from '@/components/TunablePanel.vue'

// todo import appInfoStore

import Controller from '@/plugins/controller'

    class AppController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {}
            this.props = {}
            this.emits = []
            //this.injectGetters([/* List of names in array */]);
            //this.injectActions(['actionMethod','anotherAction'])
        }
    }

    const app = new AppController('VFSApp', {
        RollerHeader,
        RollerNavbar,
        VFSTunablePanel
    });

</script>
<template>

    <header class="wrapper container columns">
        <RollerHeader title="VueApp" subtitle="V2.1">
            <!--replacing the slot component-->
            <!--<img alt="RollerCrasher Image" class="logo" src="@/assets/Images/RCcharacter.png" width="130" height="110" @click="$router.push('/')"/>-->
        </RollerHeader>
        <RollerNavbar />
    </header>
    <main>
        <RouterView />
        <aside class="small-item">
            <VFSTunablePanel title="Game Variables" />
        </aside>
    </main>

    <footer>
        Copyright 2023 Melissa Osorio
    </footer>

</template>
<style>

    header {
        background: #fdfafa;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100vw;
    }

    /* VFSHeader {
        line-height: 1.5;
        max-height: 20vh;
    } */

    @media (min-width: 1024px) {
      header {
          display: flex;
          place-items: center;
          padding-right: calc(var(--section-gap) / 2);
      }

      .logo {
          margin: 0 2rem 0 0;
      }

      header .wrapper {
          display: flex;
          place-items: flex-start;
          flex-wrap: wrap;
      }
    }
</style>
