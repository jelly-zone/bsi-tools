<template>
<div class="page">
    <!-- <h1 class="line-title">V1.24 方案2电极</h1> -->
    <div class="charts-line-box">
        <div class="charts-col-box" style="width: 18%; margin-left: 30%;">
            <div>
                <h3>
                    电极型号：
                    <el-select v-model="electrode_4" placeholder="Medtronic" @Change="selectElectrode4" style="width: 180px">
                        <el-option
                        v-for="item in electrodeList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    /></el-select>
                </h3>
                <div>长轴边到边间距：{{ curElectrodes[4].longDis }}mm</div>
                <div>短轴边到边间距：{{ curElectrodes[4].shortDis }}mm</div>
                <div>触点尺寸：{{ curElectrodes[4].contactSize[1] + 'mm * ' + curElectrodes[4].contactSize[0] + 'mm'}}</div>
                <div>Paddle尺寸：{{ curElectrodes[4].paddleSize[1] + 'mm * ' + curElectrodes[4].paddleSize[0] + 'mm'}}</div>
                <!-- 选择模型：<el-select v-model="curModel" placeholder="bsi-002" @Change="selectModel" style="width: 240px">
                    <el-option
                    v-for="item in modelList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
                </el-select> -->
                <h2>{{ curElectrodes[4].name }}</h2>
                <div v-if="curElectrodes[4].name=='V1.24-M'" id="rounded-container-124m">
                    <div class="column-1">
                        <div v-for="i in 6" :key="'col1-'+i" class="small-rect"></div>
                    </div>
                    <div class="column-2">
                        <div v-for="i in 4" :key="'col2-'+i" class="small-rect"></div>
                    </div>
                    <div class="column-3">
                        <div v-for="i in 6" :key="'col3-'+i" class="small-rect"></div>
                    </div>
                </div>
                <div v-if="curElectrodes[4].name=='V1.24-32'" id="rounded-container-12432">
                    <div class="column" v-for="(column, index) in 4" :key="index">
                        <div class="small-rect" v-for="(rect, rectIndex) in 8" :key="rectIndex"></div>
                    </div>
                </div>
                <div v-if="curElectrodes[4].name=='Medtronic'" id="rounded-container-medtronic">
                    <div class="main-rectangle">
                    <div class="column">
                        <div v-for="i in 5" :key="'left-'+i" class="small-rectangle"></div>
                    </div>
                    <div style="margin-left: 10px;" class="column middle">
                        <div v-for="i in 6" :key="'middle-'+i" class="small-rectangle"></div>
                    </div>
                    <div style="margin-left: 10px;" class="column">
                        <div v-for="i in 5" :key="'right-'+i" class="small-rectangle"></div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="charts-col-box" style="width: 33%;">
            <div style="display: flex;">
                <el-button @click="moveElecPosition('up')" type="success" plain>电极上移</el-button>
                <el-button @click="moveElecPosition('down')" type="success" plain>电极下移</el-button>
                <!-- <el-button @click="deleteMoves" type="danger" plain>还原</el-button> -->
            </div>
            <div style="width: 330px;height:900px;" class="single-chart-box" id="myChart-2d-m-124"></div>
        </div>
    </div>

    <h1 v-show="false" class="line-title">（弃）V1.23 方案</h1>
    <div v-show="false" class="charts-line-box">
        <div class="charts-col-box" style="width: 33%;">
            <div style="width: 330px;height:1000px;" class="single-chart-box" id="myChart-2d-l"></div>
        </div>
        <div class="charts-col-box" style="width: 33%;">
            <div style="width: 330px;height:1000px;" class="single-chart-box" id="myChart-2d-m"></div>
        </div>
        <div class="charts-col-box" style="width: 33%;">
            <div style="width: 330px;height:1000px;" class="single-chart-box" id="myChart-2d-s"></div>
        </div>
    </div>
    <h1 v-show="false" class="line-title">美敦力电极</h1>
    <div v-show="false" class="charts-line-box">
        <div class="charts-col-box" style="width: 33%;">
            <div style="width: 330px;height:1000px;" class="single-chart-box" id="myChart-2d-l-mdt"></div>
        </div>
        <div class="charts-col-box" style="width: 33%;">
            <div style="width: 330px;height:1000px;" class="single-chart-box" id="myChart-2d-m-mdt"></div>
        </div>
        <div class="charts-col-box" style="width: 33%;">
            <div style="width: 330px;height:1000px;" class="single-chart-box" id="myChart-2d-s-mdt"></div>
        </div>
    </div>
    <!-- <div class="charts-line-box">
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
    </div> -->
</div>
</template>

<script setup>
import { computed, onMounted, onUpdated, ref } from "vue";
import * as echarts from 'echarts';
import 'echarts-gl'
import { 
    nerverootsOpinionMNew, nerverootsOpinionOne, nerverootsOpinionL, nerverootsOpinionM, nerverootsOpinionS, medtronic565, msV10_L, msV10_M, msV10_S, medtronic565_one,
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
    msV124_32,
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

var medtronic565Ref = ref(medtronic565)
var msV10_LRef = ref(msV10_L)
var msV10_MRef = ref(msV10_M)
var msV10_SRef = ref(msV10_S)
var msV124_M_2dRef = ref(msV124_M_2d)
const msV124_M_2d_ori = msV124_M_2d
var msV124_32Ref = ref(msV124_32)
const msV124_32_ori = msV124_32


const eletrodeConfig = {
    medtronic: {
        name: "Medtronic",
        longDis: 4.5,
        shortDis: 1,
        contactSize: [2, 4.46],
        paddleSize: [64.2, 10],
    },
    V10L: {
        name: "V1.0-L",
        longDis: 12,
        shortDis: 2.5,
        contactSize: [1.5, 4],
        paddleSize: [0, 0],
    },
    V10M: {
        name: "V1.0-M",
        longDis: 9,
        shortDis: 2.5,
        contactSize: [1.5, 4],
        paddleSize: [0, 0],
    },
    V10S: {
        name: "V1.0-S",
        longDis: 6,
        shortDis: 2.5,
        contactSize: [1.5, 4],
        paddleSize: [0, 0],
    },
    V124M: {
        name: 'V1.24-M',
        longDis: 5.84,
        shortDis: 2,
        contactSize: [2, 4.46],
        paddleSize: [63.96, 12.5],
    },
    V12432: {
        name: 'V1.24-32',
        longDis: 3.5,
        shortDis: 1.7,
        contactSize: [1, 3.4],
        paddleSize: [63.15, 11],
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
        value: "V1.24-M",
        label: "V1.24-M",
    },
    {
        value: "V1.24-32",
        label: "V1.24-32",
    },
    {
        value: "Medtronic",
        label: "Medtronic",
    },
    {
        value: "V1.0-L",
        label: "（弃）V1.0-L",
    },
    {
        value: "V1.0-M",
        label: "（弃）V1.0-M",
    },
    {
        value: "V1.0-S",
        label: "（弃）V1.0-S",
    },
]

const curElectrodes = ref([
    {
        name: "Medtronic",
        longDis: 4.5,
        shortDis: 1,
        contactSize: [2, 4.46],
        paddleSize: [64.2, 10],
    },
    {
        name: "V1.0-L",
        longDis: 12,
        shortDis: 2.5,
        contactSize: [1.5, 4],
        paddleSize: [0, 0],
    },
    {
        name: "V1.0-M",
        longDis: 9,
        shortDis: 2.5,
        contactSize: [1.5, 4],
        paddleSize: [0, 0],
    },
    {
        name: "V1.0-S",
        longDis: 6,
        shortDis: 2.5,
        contactSize: [1.5, 4],
        paddleSize: [0, 0],
    },
    {
        name: 'V1.24-M',
        longDis: 5.84,
        shortDis: 2,
        contactSize: [2, 4.46],
        paddleSize: [63.96, 12.5],
    },
    {
        name: 'V1.24-32',
        longDis: 5.84,
        shortDis: 2,
        contactSize: [2, 4.46],
        paddleSize: [63.96, 12.5],
    }
])

const curModel = ref('bsi-002')

const electrode_0 = ref('Medtronic')
const electrode_1 = ref('V1.0-L')
const electrode_2 = ref('V1.0-M')
const electrode_3 = ref('V1.0-S')
let electrode_4 = ref('V1.24-M')

const round = (number, precision) => {
  return Math.round(+number + "e" + precision) / Math.pow(10, precision);
  //same as:
  //return Number(Math.round(+number + 'e' + precision) + 'e-' + precision);
}

var standardizeToMinus = (arr) => {
	let len = 0
	let newArr = []
	arr.forEach(ele => {
		len = ele.length
		newArr.push([ele[len-2], round(ele[len-1] - 36.61, 2)])
	});
	return newArr
}

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


function moveElecPosition(dir) {
    if (curElectrodes.value[4].name == 'V1.24-M') {
        if (dir == 'up') {
            console.log('up')
            msV124_M_2dRef.value.forEach(e => {
                e[1] = round(e[1] + 2, 2)
            })
        } else {
            console.log('down')
            msV124_M_2dRef.value.forEach(e => {
                e[1] = round(e[1] - 2, 2)
            })
        }
        twoOpinionM124.value.series[0].data = msV124_M_2dRef.value
        myChartM124.setOption(twoOpinionM124.value)
    }
    else if(curElectrodes.value[4].name == 'V1.24-32') {
        if (dir == 'up') {
            console.log('up')
            msV124_32Ref.value.forEach(e => {
                e[1] = round(e[1] + 2, 2)
            })
        } else {
            console.log('down')
            msV124_32Ref.value.forEach(e => {
                e[1] = round(e[1] - 2, 2)
            })
        }
        twoOpinionM124.value.series[0].data = msV124_32Ref.value
        myChartM124.setOption(twoOpinionM124.value)
    }
    else return
}

// function deleteMoves() {
//     if (curElectrodes.value[4].name == 'V1.24-M') {
//         twoOpinionM124.value.series[0].data = msV124_M_2d_ori
//         console.log('here')
//         myChartM124.setOption(twoOpinionM124.value)
//     }
//     else if (curElectrodes.value[4].name == 'V1.24-32') {
//         msV124_32Ref.value = msV124_32_ori
//         twoOpinionM124.value.series[0].data = msV124_32Ref.value
//         myChartM124.setOption(twoOpinionM124.value)
//     }
// }

function selectElectrode4(str) {
    console.log("4 you choose :", str)
    twoOpinionM124.value.series[0].name = str
    switch (str) {
        case "V1.0-L":
            twoOpinionM124.value.series[0].symbolSize = [19, 50]
            twoOpinionM124.value.series[0].data = standardizeToMinus(msV10_LRef.value)
            curElectrodes.value[4] = eletrodeConfig['V10L']
            break
        case "V1.0-M":
            twoOpinionM124.value.series[0].symbolSize = [19, 50]
            twoOpinionM124.value.series[0].data = standardizeToMinus(msV10_MRef.value)
            curElectrodes.value[4] = eletrodeConfig['V10M']
            break
        case "V1.0-S":
            twoOpinionM124.value.series[0].symbolSize = [19, 50]
            twoOpinionM124.value.series[0].data = standardizeToMinus(msV10_SRef.value)
            curElectrodes.value[4] = eletrodeConfig['V10S']
            break
        case "Medtronic":
            twoOpinionM124.value.series[0].symbolSize = [19, 50]
            twoOpinionM124.value.series[0].data = standardizeToMinus(medtronic565Ref.value)
            curElectrodes.value[4] = eletrodeConfig['medtronic']
            break
        case "V1.24-M":
            twoOpinionM124.value.series[0].symbolSize = [19, 50]
            twoOpinionM124.value.series[0].data = msV124_M_2dRef.value
            curElectrodes.value[4] = eletrodeConfig['V124M']
            break
        case 'V1.24-32':
            // symbolSize
            twoOpinionM124.value.series[0].symbolSize = [13, 43]
            twoOpinionM124.value.series[0].data = msV124_32Ref.value
            curElectrodes.value[4] = eletrodeConfig['V12432']
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
    // myChart0.setOption(threeOpinionOne.value);
    // myChart1.setOption(threeOpinionL.value);
    // myChart2.setOption(threeOpinionM.value);
    // myChart3.setOption(threeOpinionS.value);
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
    // myChart0 = echarts.init(document.getElementById('myChart-0'));
    // myChart1 = echarts.init(document.getElementById('myChart-1'));
    // myChart2 = echarts.init(document.getElementById('myChart-2'));
    // myChart3 = echarts.init(document.getElementById('myChart-3'));
    myChart2DM.setOption(twoOpinionM.value)
    myChart2DL.setOption(twoOpinionL.value)
    myChart2DS.setOption(twoOpinionS.value)
    myChart2DMMdt.setOption(twoOpinionMMdt.value)
    myChart2DLMdt.setOption(twoOpinionLMdt.value)
    myChart2DSMdt.setOption(twoOpinionSMdt.value)
    myChartM124.setOption(twoOpinionM124.value)
    // myChart0.setOption(threeOpinionOne.value);
    // myChart1.setOption(threeOpinionL.value);
    // myChart2.setOption(threeOpinionM.value);
    // myChart3.setOption(threeOpinionS.value);
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

#rounded-container-12432 {
    box-shadow: 4px 8px 12px rgba(0, 0, 0, 0.3);
    width: 90px;
    height: 551.5px;
    background-color: #e0e0e0; /* 浅灰色 */
    border-radius: 40px; /* 四个角圆角 */
    display: flex;
    justify-content: space-between;
    padding: 40px 10px 40px 10px;
    >:first-child {
        margin-top: 34.5px;
    }
    >:last-child {
        margin-top: 34.5px;
    }
    .column {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 10px;
        height: 517px; /* 列高度 */
            .small-rect {
                box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.25);
                width: 10px;
                height: 34px;
                // background: linear-gradient(to right, #616161, #fff);
                background-color: rgb(128, 128, 128); /* 深灰色 */
                border-radius: 3px; 
                border: 1px solid rgb(105, 105, 105);
            }
    }
    .column:not(:last-child) {
        margin-right: 17px;
    }
}


#rounded-container-124m {
    box-shadow: 4px 8px 12px rgba(0, 0, 0, 0.3);
    width: 125px;
    height: 559.6px;
    background-color: #e0e0e0; /* 浅灰色背景 */
    border-radius: 40px; /* 四个角圆角 */
    display: flex;
    // justify-content: space-between;
    padding: 40px 0px; /* 垂直居中 (635-555)/2=40px, 水平居中 (125-3*15-2*15)/2=25px */
    .column-1 {
        margin-left: 12.5px;
        height: 555px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .small-rect {
            width: 20px;
            height: 44.6px;
            background-color: #616161; /* 深灰色 */
            border-radius: 4px; /* 小长方形圆角 */
            box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.25);
        }
    }
    .column-2 {
        height: 555px;
        display: flex;
        flex-direction: column;
        padding-top: 51.5px;
        margin-left: 20px;
        >:nth-child(2) {
            margin-top: 58.4px;
        }
        >:nth-child(3) {
            margin-top: 58.4px;
        }
        >:nth-child(4) {
            margin-top: 208.3px;
        }
        .small-rect {
            // margin-left: 0px;
            width: 20px;
            height: 44.6px;
            background-color: #616161; /* 深灰色 */
            border-radius: 4px; /* 小长方形圆角 */
            box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.25);
        }
    }
    .column-3 {
        // width: 30px;
        height: 555px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 20px;
        // margin-right: 12.5px;
        .small-rect {
            width: 20px;
            height: 44.6px;
            background-color: #616161; /* 深灰色 */
            border-radius: 4px; /* 小长方形圆角 */
            box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.25);
        }
    }
    // .column:not(:last-child) {
    //     margin-right: 10px; /* 间距减小 */
    // }
}

#rounded-container-medtronic{
    display: flex;
    .main-rectangle {
        box-shadow: 4px 8px 12px rgba(0, 0, 0, 0.3);
        background-color: #e0e0e0;
        border-radius: 40px;
        display: flex;
        // justify-content: space-between;
        align-items: center;
        padding: 0 10px 104.4px 10px;
    }
    .column {
        // width: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        // gap: 10px;
        // height: 403px;
        // justify-content: space-evenly;
    }
    .small-rectangle {
        >:first-child {
            // margin-top: 0;
        }
        width: 20px;
        height: 44.6px;
        background-color: #616161;
        border-radius: 4px;
        margin-top: 45px;
        box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.25);
    }
}
</style>