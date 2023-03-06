<!--
<VFSHome name="Title" />
Copyright (c) 2023. Melissa Osorio Inc. All Rights Reserved.
-->

<script>

    import Controller from '@/plugins/controller'
    import VFSNavbar from '@/components/Navbar.vue'
    import VFSBarChart from '../components/BarChart.vue'

    class ChartController extends Controller {

constructor( name, subComponentList = []) {
    super( name, subComponentList );
    //properties inaccesible to others
    this.vm = {
        name: 'Chart Page',
        chartList: ['Bar Chart', 'Line Chart', 'Pie Chart', 'Heatmap'],
        visible: true,
    }
}
}

export default new ChartController('Chart', {VFSBarChart});

</script>
<template>
<section class="flexbox columns chart">
<button @click="visible = !visible">Hide</button>
<div v-for="name, i in chartList" :key="i">
    <div v-if="name == 'Bar Chart'">
        <VFSBarChart :title="name" v-show="visible"/>
    </div>
    <div v-else-if="name == 'Line Chart'">
        <VFSBarChart :title="name" v-show="visible"/>
    </div>
    <!--<VFSBarChart v-bind:title="name" v-show="visible"/>-->
</div>
</section>

</template>
<style scoped>
/* Local styles for this template */
.chart {
/* display: block; */
margin:2vw;
border: 1px solid black;
background-color: lightgray;
color: black;
height: 78vh;
width: 80vw;
}

</style>
