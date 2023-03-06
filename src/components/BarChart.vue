<!--
<VFSBarChart title="some chart name"/>
@copyright (c) 2023. Scott Henshaw. All Rights Reserved.
-->
<script>
    import Controller from '@/plugins/controller'
    import { Bar } from 'vue-chartjs'

    import VFSEditableData from '@/components/EditableData.vue'

    class BarChartController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                chartOptions: {
                    responsive: true
                },
                chartData: {
                    labels: ['Delta Time', 'X', 'Y', 'Z', 'Action'],
                    datasets: [
                        { data: [12345, 100, 100, 10, 1]},
                        { data: [12346, 110, 130, 15, 2]},
                        { data: [12347, 120, 140, 1, 2]},
                        { data: [12348, 120, 150, 0, 3]},
                        { data: [12349, 110, 170, 9, 1]},
                    ]
                },
                data: [{
                        x: 100, y: 100, z: 10,
                        action: 1,
                        time: 12345,
                    },{
                        x: 115, y: 110, z: 10,
                        action: 1,
                        time: 12444,
                    },{
                        x: 110, y: 85, z: 10,
                        action: 3,
                        time: 12555,
                    },{
                        x: 95, y: 130, z: 10,
                        action: 2,
                        time: 12666,
                    },{
                        x: 90, y: 150, z: 10,
                        action: 1,
                        time: 12777,
                    },
                ],
                visible: true,
            }
            this.props = {
                title: String,
            }
            this.emits = []
            //this.injectGetters([/* List of names in array */]);
            //this.injectActions(['actionMethod','anotherAction'])
        }

        resetX() {
            this.editData.x = 100;
        }
    }

    export default new BarChartController('VFSBarChart', { Bar, VFSEditableData });

</script>
<template>

    <section class="component outline">

        <h4>{{ title }}</h4>
        <div id="chart-area" class="item outline">
            <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
        </div>
        <div class="controls component rows">
            <button @click="visible = !visible">Hide Data</button>
            <button @click="resetX()">Reset X</button>
        </div>
        <div id="chart-data" class="item outline" v-show="visible">
            <div v-for="telemetryRec, i in data" :key="i">
                <VFSEditableData :data="telemetryRec" />
            </div>
        </div>

    </section>

</template>
<style scoped>
    /*
    Add "scoped" attribute to limit CSS to this component only <style scoped>
    styles that are specific to this component only, not sub-children
    */
    button {
        margin: 2px;
    }
    .component {
        display: flex;
        flex-direction:column;
        flex-wrap:wrap;
        justify-content:space-evenly;
        align-content: flex-start;
        align-items:flex-start;
    }

    .rows {
        flex-direction: row;
    }
    .item {
        flex-grow: inherit;
        flex-shrink: inherit;
        order: inherit;
    }

    .outline {
        margin: 2px;
        margin-bottom: 4px;
        border: 1px solid black;
        box-shadow: 3px 4px 5px black;
        padding: 2px;
    }
</style>