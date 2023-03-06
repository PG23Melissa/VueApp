<!--
<VFSHeader />
Copyright (c) 2022-2023. Kibble Game Studios Inc. All Rights Reserved.
-->
<script setup>

    import { useInfoStore } from '@/stores/infoStore.js'

 const version = 1.12;
 const props = defineProps({
    title: String,
    subtitle: String,
 })

</script>
<template>

    <section class="container left">
        <img alt="VFS Logo" class="logo" src="@/assets/Logo.gif" width="150" height="150" @click="$router.push('/')"/>
        <div class="title item">
            <h1>{{ title }}</h1>
            <h3>{{ version }}</h3>
            <h4>{{ subtitle }}{{ useInfoStore.version}}</h4>
            <button class="button" @click="useInfoStore.increment()">AddVersion</button>
        </div>
        <slot> default content</slot>
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