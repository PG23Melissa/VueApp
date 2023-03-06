<!--
<VFSTunablePanel>
    -- user can add their own HTML code here, replaces 'slot' component --
</VFSTunablePanel>

@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<script>
    import Controller from '@/plugins/controller'
    
    class TunablePanelController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                value: 0
            }
            this.props = {
                title: String
            }
        }

        readVal( value ) {
            console.log(`Panel detected a change`)
        }
    }

    export default new TunablePanelController('VFSTunablePanel', {  });

</script>
<template>

    <section class="component">
        <div>{{ title }}</div>
        <div class="container">
            <form>
                <label for="Speed">Player Speed: </label>
            </form>
        </div>
    </section>

</template>
<style scoped>
    /*
    Add "scoped" attribute to limit CSS to this component only <style scoped>
    styles that are specific to this component only, not sub-children
    */
    .component {
        background-color: lightblue;
        color: black;
        margin: 2em;
        display: flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:space-evenly;
        align-content: flex-start;
        align-items:flex-start;
    }

</style>