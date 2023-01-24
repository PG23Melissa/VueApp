<!--
<VFSHeader />
Copyright (c) 2022-2023. Kibble Game Studios Inc. All Rights Reserved.
-->
<script>
    import Controller from '@/plugins/controller'

    import { useInfoStore } from '@/stores/infoStore.js'

    class HeaderController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                subtitle: "VFS Programming for Games",
            }
            this.props = {
                title: String
            }

            this.injectStore( useInfoStore );
        }
    }

    export default new HeaderController('VFSHeader');

</script>
<template>

    <section class="container left">
        <img alt="VFS Logo" class="logo" src="@/assets/Logo.gif" width="150" height="150" @click="$router.push('/')"/>
        <div class="title item">
            <h1>{{ infoStore.name }}</h1>
            <h4>{{ subtitle }} {{ infoStore.version }}</h4>
            <button class="newVerbtn" @click="infoStore.increment()">Add Version</button>
        </div>
        <slot class="item"></slot>
    </section>

</template>
<style scoped>
    .title h1, .title h4 {
        float:left;
        margin-right: 2vw;
        text-align:center;
        width: 100%;
    }

    .logo {
        display: block;
        padding: 0;
        margin: 0 auto;
    }

    @media (min-width: 1024px) {
        .logo {
            margin: 0 2rem 0 0;
        }
    }

    .newVerbtn{
        height: 2.5em;
        background-color: rgb(3, 2, 54);
        border-radius: 10px;
        color: rgb(255, 255, 255);
    }
</style>