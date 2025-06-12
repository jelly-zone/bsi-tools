<template>
<div class="page">
    <h1 class="line-title">V1.23 方案1电极</h1>
    <div class="charts-line-box">
        <div class="charts-col-box" style="width: 33%;">
            <div style="width: 330px;height:940px;" class="single-chart-box" id="myChart-2d-l"></div>
        </div>
        <div class="charts-col-box" style="width: 33%;">
            <div style="width: 330px;height:940px;" class="single-chart-box" id="myChart-2d-m"></div>
        </div>
        <div class="charts-col-box" style="width: 33%;">
            <div style="width: 330px;height:940px;" class="single-chart-box" id="myChart-2d-s"></div>
        </div>
    </div>
    <h1 class="line-title">V1.24 方案2电极（M类）</h1>
    <div class="charts-line-box">
        <div class="charts-col-box" style="width: 33%;">
            <div style="width: 330px;height:940px;" class="single-chart-box" id="myChart-2d-m-124"></div>
        </div>
    </div>
    <h1 class="line-title">美敦力电极</h1>
    <div class="charts-line-box">
        <div class="charts-col-box" style="width: 33%;">
            <div style="width: 330px;height:940px;" class="single-chart-box" id="myChart-2d-l-mdt"></div>
        </div>
        <div class="charts-col-box" style="width: 33%;">
            <div style="width: 330px;height:940px;" class="single-chart-box" id="myChart-2d-m-mdt"></div>
        </div>
        <div class="charts-col-box" style="width: 33%;">
            <div style="width: 330px;height:940px;" class="single-chart-box" id="myChart-2d-s-mdt"></div>
        </div>
    </div>
    <div class="charts-line-box">
        <div class="charts-col-box">
            <div>
                电极型号：<el-select v-model="electrode_0" placeholder="Medtronic" @Change="selectElectrode0" style="width: 240px">
                    <el-option
                    v-for="item in electrodeList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
                </el-select>
                <div>长轴间距：{{ curElectrodes[0].longDis }}mm</div>
                <div>短轴间距：{{ curElectrodes[0].shortDis }}mm</div>
                选择模型：<el-select v-model="curModel" placeholder="bsi-002" @Change="selectModel" style="width: 240px">
                    <el-option
                    v-for="item in modelList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
                </el-select>
            </div>
            <div style="width: 500px;height:1000px;" class="single-chart-box" id="myChart-0"></div>
        </div>
        <div class="charts-col-box">
            <div>
                电极型号：<el-select v-model="electrode_1" placeholder="Medtronic" @Change="selectElectrode1" style="width: 240px">
                    <el-option
                    v-for="item in electrodeList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
                </el-select>
                <div>长轴间距：{{ curElectrodes[1].longDis }}mm</div>
                <div>短轴间距：{{ curElectrodes[1].shortDis }}mm</div>
            </div>
            <div style="width: 500px;height:1000px;" class="single-chart-box" id="myChart-1"></div>
        </div>
        <div class="charts-col-box">
            <div>
                电极型号：<el-select v-model="electrode_2" placeholder="Medtronic" @Change="selectElectrode2" style="width: 240px">
                <el-option
                    v-for="item in electrodeList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
                </el-select>
                <div>长轴间距：{{ curElectrodes[2].longDis }}mm</div>
                <div>短轴间距：{{ curElectrodes[2].shortDis }}mm</div>
            </div>
            <div style="width: 500px;height:1000px;" class="single-chart-box" id="myChart-2"></div>
        </div>
        <div class="charts-col-box">
            <div>
                电极型号：<el-select v-model="electrode_3" placeholder="Medtronic" @Change="selectElectrode3" style="width: 240px">
                <el-option
                    v-for="item in electrodeList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
                </el-select>
                <div>长轴间距：{{ curElectrodes[3].longDis }}mm</div>
                <div>短轴间距：{{ curElectrodes[3].shortDis }}mm</div>
            </div>
            <div style="width: 500px;height:1000px;" class="single-chart-box" id="myChart-3"></div>
        </div>
    </div>
</div>
</template>

<script setup>
import { computed, onMounted, onUpdated, ref } from "vue";
import * as echarts from 'echarts';
import 'echarts-gl'
import { nerverootsOpinionMNew, nerverootsOpinionOne, nerverootsOpinionL, nerverootsOpinionM, nerverootsOpinionS, medtronic565, msV10_L, msV10_M, msV10_S, medtronic565_one,
    msV10_L_one,
    msV10_M_one,
    msV10_S_one,
    nerverootsOpinionM2D, nerverootsOpinionL2D, nerverootsOpinionS2D,
    nerverootsOpinionM2DMdt,
	nerverootsOpinionL2DMdt,
	nerverootsOpinionS2DMdt,
    bsxCoverEdgeX_2d,
    msV124_M_2d,
    nerverootsOpinion2DV124m,
 } from '../nerverootsData.js'

var twoOpinionM = ref(nerverootsOpinionM2D)
var twoOpinionL = ref(nerverootsOpinionL2D)
var twoOpinionS = ref(nerverootsOpinionS2D)
var twoOpinionMMdt = ref(nerverootsOpinionM2DMdt)
var twoOpinionLMdt = ref(nerverootsOpinionL2DMdt)
var twoOpinionSMdt = ref(nerverootsOpinionS2DMdt)
var twoOpinionM124 = ref(nerverootsOpinion2DV124m)
var threeOpinionOne = ref(nerverootsOpinionMNew)
var threeOpinionL = ref(nerverootsOpinionL)
var threeOpinionM = ref(nerverootsOpinionM)
var threeOpinionS = ref(nerverootsOpinionS)

const eletrodeConfig = {
    medtronic: {
        name: "Medtronic",
        longDis: 8.5,
        shortDis: 2.5,
    },
    V10L: {
        name: "V1.0-L",
        longDis: 16,
        shortDis: 4,
    },
    V10M: {
        name: "V1.0-M",
        longDis: 13,
        shortDis: 4,
    },
    V10S: {
        name: "V1.0-S",
        longDis: 10,
        shortDis: 4,
    },
}

const modelList = [
    {
        value: "bsi-002",
        label: "bsi-002",
    },
    // {
    //     value: "bsi-008",
    //     label: "bsi-008",
    // },
]

const electrodeList = [
    {
        value: "Medtronic",
        label: "Medtronic",
    },
    {
        value: "V1.0-L",
        label: "V1.0-L",
    },
    {
        value: "V1.0-M",
        label: "V1.0-M",
    },
    {
        value: "V1.0-S",
        label: "V1.0-S",
    },
]

const curElectrodes = ref([
    {
        name: "Medtronic",
        longDis: 8.5,
        shortDis: 2.5,
    },
    {
        name: "V1.0-L",
        longDis: 16,
        shortDis: 4,
    },
    {
        name: "V1.0-M",
        longDis: 13,
        shortDis: 4,
    },
    {
        name: "V1.0-S",
        longDis: 10,
        shortDis: 4,
    },
])

const curModel = ref('bsi-002')

const electrode_0 = ref('Medtronic')
const electrode_1 = ref('V1.0-L')
const electrode_2 = ref('V1.0-M')
const electrode_3 = ref('V1.0-S')

function selectModel(modelName) {
    console.log("select model:", modelName)
}

function selectElectrode0(str) {
    console.log("0 you choose:", str)
    threeOpinionOne.value.xAxis3D.data[1] = str
    let len = threeOpinionOne.value.series.length
    switch (str) {
        case "V1.0-L":
            threeOpinionOne.value.series[len-1].data = msV10_L_one
            curElectrodes.value[0] = eletrodeConfig['V10L']
            break
        case "V1.0-M":
            threeOpinionOne.value.series[len-1].data = msV10_M_one
            curElectrodes.value[0] = eletrodeConfig['V10M']
            break
        case "V1.0-S":
            threeOpinionOne.value.series[len-1].data = msV10_S_one
            curElectrodes.value[0] = eletrodeConfig['V10S']
            break
        case "Medtronic":
            threeOpinionOne.value.series[len-1].data = medtronic565_one
            curElectrodes.value[0] = eletrodeConfig['medtronic']
            break
        default:
            break
    }
}
function selectElectrode1(str) {
    console.log("1 you choose:", str)
    threeOpinionL.value.xAxis3D.data[5] = str
    let len = threeOpinionL.value.series.length
    switch (str) {
        case "V1.0-L":
            threeOpinionL.value.series[len-1].data = msV10_L
            curElectrodes.value[1] = eletrodeConfig['V10L']
            break
        case "V1.0-M":
            threeOpinionL.value.series[len-1].data = msV10_M
            curElectrodes.value[1] = eletrodeConfig['V10M']
            break
        case "V1.0-S":
            threeOpinionL.value.series[len-1].data = msV10_S
            curElectrodes.value[1] = eletrodeConfig['V10S']
            break
        case "Medtronic":
            threeOpinionL.value.series[len-1].data = medtronic565
            curElectrodes.value[1] = eletrodeConfig['medtronic']
            break
        default:
            break
    }
}
function selectElectrode2(str) {
    console.log("2 you choose :", str)
    threeOpinionM.value.xAxis3D.data[5] = str
    let len = threeOpinionM.value.series.length
    switch (str) {
        case "V1.0-L":
            threeOpinionM.value.series[len-1].data = msV10_L
            curElectrodes.value[2] = eletrodeConfig['V10L']
            break
        case "V1.0-M":
            threeOpinionM.value.series[len-1].data = msV10_M
            curElectrodes.value[2] = eletrodeConfig['V10M']
            break
        case "V1.0-S":
            threeOpinionM.value.series[len-1].data = msV10_S
            curElectrodes.value[2] = eletrodeConfig['V10S']
            break
        case "Medtronic":
            threeOpinionM.value.series[len-1].data = medtronic565
            curElectrodes.value[2] = eletrodeConfig['medtronic']
            break
        default:
            break
    }
}
function selectElectrode3(str) {
    console.log("3 you choose :", str)
    threeOpinionS.value.xAxis3D.data[-1] = str
    let len = threeOpinionS.value.series.length
    switch (str) {
        case "V1.0-L":
            threeOpinionS.value.series[len-1].data = msV10_L
            curElectrodes.value[3] = eletrodeConfig['V10L']
            break
        case "V1.0-M":
            threeOpinionS.value.series[len-1].data = msV10_M
            curElectrodes.value[3] = eletrodeConfig['V10M']
            break
        case "V1.0-S":
            threeOpinionS.value.series[len-1].data = msV10_S
            curElectrodes.value[3] = eletrodeConfig['V10S']
            break
        case "Medtronic":
            threeOpinionS.value.series[len-1].data = medtronic565
            curElectrodes.value[3] = eletrodeConfig['medtronic']
            break
        default:
            break
    }
}

onUpdated(() => {
    myChart2DM.setOption(twoOpinionM.value)
    myChart2DL.setOption(twoOpinionL.value)
    myChart2DS.setOption(twoOpinionS.value)
    myChart2DMMdt.setOption(twoOpinionMMdt.value)
    myChart2DLMdt.setOption(twoOpinionLMdt.value)
    myChart2DSMdt.setOption(twoOpinionSMdt.value)
    myChartM124.setOption(twoOpinionM124.value)
    myChart0.setOption(threeOpinionOne.value);
    myChart1.setOption(threeOpinionL.value);
    myChart2.setOption(threeOpinionM.value);
    myChart3.setOption(threeOpinionS.value);
})

var myChart2DL = null
var myChart2DM = null
var myChart2DS = null
var myChart2DLMdt = null
var myChart2DMMdt = null
var myChart2DSMdt = null
var myChartM124 = null
var myChart0 = null
var myChart1 = null
var myChart2 = null
var myChart3 = null

onMounted(() => {
    myChart2DM = echarts.init(document.getElementById('myChart-2d-m'));
    myChart2DL = echarts.init(document.getElementById('myChart-2d-l'));
    myChart2DS = echarts.init(document.getElementById('myChart-2d-s'));
    myChart2DMMdt = echarts.init(document.getElementById('myChart-2d-m-mdt'));
    myChart2DLMdt = echarts.init(document.getElementById('myChart-2d-l-mdt'));
    myChart2DSMdt = echarts.init(document.getElementById('myChart-2d-s-mdt'));
    myChartM124 = echarts.init(document.getElementById('myChart-2d-m-124'));
    myChart0 = echarts.init(document.getElementById('myChart-0'));
    myChart1 = echarts.init(document.getElementById('myChart-1'));
    myChart2 = echarts.init(document.getElementById('myChart-2'));
    myChart3 = echarts.init(document.getElementById('myChart-3'));
    myChart2DM.setOption(twoOpinionM.value)
    myChart2DL.setOption(twoOpinionL.value)
    myChart2DS.setOption(twoOpinionS.value)
    myChart2DMMdt.setOption(twoOpinionMMdt.value)
    myChart2DLMdt.setOption(twoOpinionLMdt.value)
    myChart2DSMdt.setOption(twoOpinionSMdt.value)
    myChartM124.setOption(twoOpinionM124.value)
    myChart0.setOption(threeOpinionOne.value);
    myChart1.setOption(threeOpinionL.value);
    myChart2.setOption(threeOpinionM.value);
    myChart3.setOption(threeOpinionS.value);
})

</script>

<style lang="less">
.page {
    width: 100%;
    .line-title {
        height: 20px;
        text-align: center;
    }
    .charts-line-box {
        margin-left: 20px;
        margin-top: 20px;
        display: flex;
        .single-chart-box {
            margin-top: 10px;
        }
        .charts-col-box {
            margin-right: 60px;
        }
    }
}
</style>