<!--
<VFSHome name="Title" />
Copyright (c) 2023. Kibble Game Studios Inc. All Rights Reserved.
-->
<script>

    import Controller from '@/plugins/controller'

    class HomeController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                formData: {
                    sampleOne:"",
                    sampleTwo:42,
                }
            }
            this.props = {
                name: String,
            }
        }
    }

    export default new HomeController('VFSHome');

</script>
<template>

    <section class="flexbox columns home">
        <h1 class="flexitem left title">Home</h1>
        <h3>Welcome to your {{ name }}</h3>
        <div class="flexitem dialog">
            <form class="sample-form">
                <label for="s1">Sample field:
                    <input class="input" name="s1" v-model="formData.sampleOne">
                </label><br/>
                <label for="s2">Number field:
                    <input class="input" name="s2" v-model="formData.sampleTwo">
                </label><br/>
                <button value="Submit" class="">Submit</button>
            </form>
        </div>
    </section>

</template>
<style scoped>
    /* Local styles for this template */
    .home {
        margin:2vw;
        background-color: rgb(255, 255, 255);
        color: rgb(0, 1, 58);
        height: 78vh;
        width: 80vw;
        padding: 50px;
    }

    .sample-form {
        border: 1px solid rgb(0, 1, 49);
        margin: 1em;
        padding: 2em;
    }

    select, input, button {
        font-size: 1.2em;
        font-weight: 700;
        height: 1.4em;

    }

    button {
        padding: .5em;
        margin: .25em;
        padding-bottom: 1.5em;
        background-color: rgb(3, 3, 29);
        font-size: 1em;
        color: white;
    }

    .input{
        border: 1px solid rgb(54, 54, 54);
    }
</style>

