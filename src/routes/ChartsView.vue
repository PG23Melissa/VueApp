<!--
<VFSHome name="Title" />
Copyright (c) 2023. Melissa Osorio Inc. All Rights Reserved.
-->

<script>

    import Controller from '@/plugins/controller'
    import VFSNavbar from '@/components/Navbar.vue'

    class MyController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name:"myController Test",
            }
            this.props = {
                name: String,
            }
        }
    }

    export default new MyController('VFSController',{VFSNavbar});

</script>
<template>
    <section>
        <h3>halo {{name}}</h3>
        <VFSNavbar/>
    </section>
</template>
