<template>
<div style="width: 800px;height:1000px;" id="myChart"></div>
</template>

<script setup>
import { onMounted } from "vue";
import * as echarts from 'echarts';
import 'echarts-gl'
import nerverootsOpinion from '../nerverootsData.js'

var threeOpinion = nerverootsOpinion
// var threeOpinion = {
// 	title: {
// 		text: 'L1-S2神经根进入点'
// 	},
// 	tooltip: {
// 	},
// 	xAxis3D: {
// 		name: "x", //x轴显示为x
// 		type: "category",
// 		data: ['bsi-002', 'bsi-005', 'bsi-007', 'bsi-008', 'Medtronic'],
// 		axisLine: {
// 		//x轴坐标轴，false为隐藏，true为显示
// 		show: true,
// 		},
// 		axisLabel: {
// 		show: true,
// 		},
// 		itemStyle: {
// 		borderColor: "#fff",
// 		backgroundColor: "#fff",
// 		},
// 	},
// 	yAxis3D: {
// 		name: "y", //y轴显示为y
// 		type: "value",
// 		splitNumber: 5,
// 		axisTick: {
// 		show: false, //显示每个值对应的刻度
// 		},
// 		// min: 0,
// 		// max: 360,
// 		// interval: 90,
// 	},
// 	zAxis3D: {
// 		name: "z", //z轴显示为z
// 		type: "value",
// 		// min: -20,
// 		// max: 60,
// 		// interval: 20,
// 		axisTick: {
// 		show: false, //显示每个值对应的刻度
// 		},
// 	},
// 	grid3D: {
// 		axisLine: {
// 		lineStyle: {
// 			//坐标轴样式
// 			color: "#070707", //轴线颜色
// 			opacity: 0.8, //(单个刻度不会受影响)
// 			width: 1, //线条宽度
// 		},
// 		},
// 		axisPointer: {
// 		lineStyle: {
// 			color: "#666", //坐标轴指示线
// 		},
// 		show: true, //展示坐标轴指示线
// 		},
// 		viewControl: {
// 		// autoRotate: true,//旋转展示
// 		// projection: 'orthographic'
// 		// beta:0,
// 		distance: 300, //与视角的距离，值越大，图离视角越远，图越小
// 		alpha: 7, //绕x轴旋转的角度（上下旋转），增大，视角顺时针增大（向上）
// 		beta: 20, //绕y轴旋转的角度（左右旋转），增大，视角逆时针增大（向右）
// 		center: [-15, -5, -20], //第一个参数：增大，视角沿x轴正方向水平右移动（图向左）；第二个参数：增大，视角沿y轴正方向垂直向上移动（图向下）；第三个参数：增大，视角向z轴正方向移动（图变小）
// 		},
// 		boxWidth: 50,
// 		boxHeight: 200,
// 		boxDepth: 40,
// 		top: -100,
// 	},
// 	series: [
// 		{
// 			type: "line3D",
// 			name: "bsi-002-L",
// 			dimensions: [
// 			"x",
// 			"y",
// 			"z",
// 			], //悬浮到点时弹出的显示框信息
// 			data: [
// 				[0, -3.1135, 36.610],
// 				[0, -2.2885, 28.456],
// 				[0, -3.6965, 14.008],
// 				[0, -3.752, 0],
// 				[0, -3.119, -4.121],
// 				[0, -2.544, -14.242],
// 				[0, -1.765, -22.358],
// 			],
// 			symbolSize: 12, //点的大小
// 			// symbol: 'triangle',
// 			lineStyle: {
// 			width: 4,
// 			color: "#87f0e5",
// 			// borderColor: 'rgba(255,255,255,0.8)'//边框样式
// 			},
// 			emphasis: {
// 			itemStyle: {
// 				color: "#ccc", //高亮
// 			},
// 			},
// 		},
// 		{
// 			type: "line3D",
// 			name: "bsi-002-R",
// 			dimensions: [
// 			"x",
// 			"y",
// 			"z",
// 			], //悬浮到点时弹出的显示框信息
// 			data: [
// 				[0, 3.1135, 36.610],
// 				[0, 2.2885, 28.456],
// 				[0, 3.6965, 14.008],
// 				[0, 3.752, 0],
// 				[0, 3.119, -4.121],
// 				[0, 2.544, -14.242],
// 				[0, 1.765, -22.358],
// 			],
// 			lineStyle: {
// 				width: 4,
// 				color: "#87f0e5",
// 			},
// 			emphasis: {
// 			itemStyle: {
// 				color: "#ccc", //高亮
// 			},
// 			},
// 		},
// 		{
// 			type: "line3D",
// 			name: "bsi-005-L",
// 			dimensions: [
// 			"x",
// 			"y",
// 			"z",
// 			//   "受试者",
// 			], //悬浮到点时弹出的显示框信息
// 			data: [
// 				[1, -3.5425, 32.089],
// 				[1, -3.4755, 18.052],
// 				[1, -3.9995, 6.048],
// 				[1, -3.767, 0],
// 				[1, -3.684, -6.014],
// 				[1, -3.043, -14.113],
// 				[1, -2.3005, -18.34]
// 			],
// 			symbolSize: 12, //点的大小
// 			// symbol: 'triangle',
// 			lineStyle: {
// 				width: 4,
// 				color: "#007849",
// 			},
// 			emphasis: {
// 				itemStyle: {
// 					color: "#ccc", //高亮
// 				},
// 			},
// 		},
// 		{
// 			type: "line3D",
// 			name: "bsi-005-R",
// 			dimensions: [
// 			"x",
// 			"y",
// 			"z",
// 			], //悬浮到点时弹出的显示框信息
// 			data: [
// 				[1, 3.5425, 32.089],
// 				[1, 3.4755, 18.052],
// 				[1, 3.9995, 6.048],
// 				[1, 3.767, 0],
// 				[1, 3.684, -6.014],
// 				[1, 3.043, -14.113],
// 				[1, 2.3005, -18.34],
// 			],
// 			symbolSize: 12, //点的大小
// 			// symbol: 'triangle',
// 			lineStyle: {
// 				width: 4,
// 				color: "#007849",
// 			},
// 			emphasis: {
// 				itemStyle: {
// 					color: "#ccc", //高亮
// 				},
// 			},
// 		},
// 		{
// 			type: "line3D",
// 			name: "bsi-007-L",
// 			dimensions: [
// 			"x",
// 			"y",
// 			"z",
// 			],
// 			data: [
// 				[2, -4.0475, 28.063],
// 				[2, -4.049, 22.034],
// 				[2, -4.2065, 10.03],
// 				[2, -3.8885, 0],
// 				[2, -3.49, -4.328],
// 				[2, -1.278, -12.518],
// 				[2, -1.584, -20.623]
// 			],
// 			symbolSize: 12,
// 			lineStyle: {
// 				width: 4,
// 				color: "#F7B733",
// 			},
// 			emphasis: {
// 				itemStyle: {
// 					color: "#ccc", //高亮
// 				},
// 			},
// 		},
// 		{
// 			type: "line3D",
// 			name: "bsi-007-R",
// 			dimensions: [
// 			"x",
// 			"y",
// 			"z",
// 			],
// 			data: [
// 				[2, 4.0475, 28.063],
// 				[2, 4.049, 22.034],
// 				[2, 4.2065, 10.03],
// 				[2, 3.8885, 0],
// 				[2, 3.49, -4.328],
// 				[2, 1.278, -12.518],
// 				[2, 1.584, -20.623],
// 			],
// 			symbolSize: 12,
// 			lineStyle: {
// 				width: 4,
// 				color: "#F7B733",
// 			},
// 			emphasis: {
// 				itemStyle: {
// 					color: "#ccc", //高亮
// 				},
// 			},
// 		},
// 		{
// 			type: "scatter3D",
// 			dimensions: [
// 			"x",
// 			"y",
// 			"z",
// 			//   "受试者",
// 			], //悬浮到点时弹出的显示框信息
// 			data: [
// 				[3, 3.6575, 32.252],
// 				[3, -3.6575, 32.252],
// 				[3, 3.687, 22.247],
// 				[3, -3.687, 22.247],
// 				[3, 4.335, 6.194],
// 				[3, -4.335, 6.194],
// 				[3, 3.9505, 0],
// 				[3, -3.9505, 0],
// 				[3, 3.3895, -10.015],
// 				[3, -3.3895, -10.015],
// 				[3, 1.8805, -24.091],
// 				[3, -1.8805, -24.091],
// 				[3, 1.8895, -30.183],
// 				[3, -1.8895, -30.183]
// 			],
// 			symbolSize: 12, //点的大小
// 			itemStyle: {
// 			color: "#96858F",
// 			},
// 			emphasis: {
// 				itemStyle: {
// 					color: "#ccc", //高亮
// 				},
// 			},
// 		},
// 		{
// 			type: "scatter3D",
// 			dimensions: [
// 			"x",
// 			"y",
// 			"z",
// 			], //悬浮到点时弹出的显示框信息
// 			data: [
// 				[
// 					4, -2.5, 19
// 				],
// 				[
// 					4, -2.5, 9.5
// 				],
// 				[
// 					4, -2.5, 0
// 				],
// 				[
// 					4, -2.5, -9.5
// 				],
// 				[
// 					4, -2.5, -19
// 				],
// 				[
// 					4, 0, 23.75
// 				],
// 				[
// 					4, 0, 14.25
// 				],
// 				[
// 					4, 0, 4.75
// 				],
// 				[
// 					4, 0, -4.75
// 				],
// 				[
// 					4, 0, -14.25
// 				],
// 				[
// 					4, 0, -23.75
// 				],
// 				[
// 					4, 2.5, 19
// 				],
// 				[
// 					4, 2.5, 9.5
// 				],
// 				[
// 					4, 2.5, 0
// 				],
// 				[
// 					4, 2.5, -9.5
// 				],
// 				[
// 					4, 2.5, -19
// 				],
// 			],
// 			symbolSize: [6, 16], //点的大小
// 			symbol: 'rect',
// 			itemStyle: {
// 			color: "#B82601",
// 			},
// 			emphasis: {
// 				itemStyle: {
// 					color: "#ccc", //高亮
// 				},
// 			},
// 		}
// 	],
// 	backgroundColor: "#fff",
// }


onMounted(() => {
var myChart = echarts.init(document.getElementById('myChart'));
// 绘制图表
// myChart.setOption(curOpinion);
myChart.setOption(threeOpinion);
})

</script>