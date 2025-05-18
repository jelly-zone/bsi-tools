<template>
    <div class="charts-line-box">
        <div style="width: 500px;height:1000px;" id="myChart-1"></div>
        <div style="width: 500px;height:1000px;" id="myChart-2"></div>
        <div style="width: 500px;height:1000px;" id="myChart-3"></div>
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import * as echarts from 'echarts';
import 'echarts-gl'
import { nerverootsOpinionL, nerverootsOpinionM, nerverootsOpinionS } from '../nerverootsData.js'

var threeOpinionL = nerverootsOpinionL
var threeOpinionM = nerverootsOpinionM
var threeOpinionS = nerverootsOpinionS


onMounted(() => {
    var myChart1 = echarts.init(document.getElementById('myChart-1'));
    var myChart2 = echarts.init(document.getElementById('myChart-2'));
    var myChart3 = echarts.init(document.getElementById('myChart-3'));
    myChart1.setOption(threeOpinionL);
    myChart2.setOption(threeOpinionM);
    myChart3.setOption(threeOpinionS);
})

</script>

<style lang="less">
.charts-line-box {
    margin-top: 20px;
    display: flex;
}
</style>