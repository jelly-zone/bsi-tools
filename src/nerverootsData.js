// 标准化方法 & echarts方案配置 & 电极位置

import BSI002_TRANSFORMED from './processedMrkData/bsi002_trans'
import BSI008_TRANSFORMED from './processedMrkData/bsi008_trans'
import BSI009_TRANSFORMED from './processedMrkData/bsi009_trans'
import BSI010_TRANSFORMED from './processedMrkData/bsi010_trans'
import BSI012_TRANSFORMED from './processedMrkData/bsi012_trans'
import { STANDARD_M, STANDARD_L, STANDARD_S } from './preparedData/bsi_positions'
import { STANDARD_M_2D, STANDARD_L_2D, STANDARD_S_2D } from './preparedData/bsi_positions'
import { color } from 'echarts'


// 纵轴最大值 = 0
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
		newArr.push([ele[0], round(ele[len-1] - 36.61, 2)])
	});
	return newArr
}

const colors = [
    '#87f0e5',
    '#007849',
    '#96858F',
    '#F7B733',
    '#94618E',
    "#B82601",  // electrodes
	"#fc5185",
	"#3f72af",
]

const medtronic565 = [
    [5, -2.5, 36.61],
    [5, -2.5, 27.11],
    [5, -2.5, 17.61],
    [5, -2.5, 8.11],
    [5, -2.5, -1.39],
    [5, 0, 41.36],
    [5, 0, 31.86],
    [5, 0, 22.36],
    [5, 0, 12.86],
    [5, 0, 3.36],
    [5, 0, -6.14],
    [5, 2.5, 36.61],
    [5, 2.5, 27.11],
    [5, 2.5, 17.61],
    [5, 2.5, 8.11],
    [5, 2.5, -1.39]
]

const msV10_L = [
    [5, -4, 36.61],
    [5, -4, 20.61],
    [5, -4, 4.61],
    [5, -4, -11.39],
    [5, -4, -27.39],
    [5, 0, 44.61],
    [5, 0, 28.61],
    [5, 0, 12.61],
    [5, 0, -3.39],
    [5, 0, -19.39],
    [5, 0, -35.39],
    [5, 4, 36.61],
    [5, 4, 20.61],
    [5, 4, 4.61],
    [5, 4, -11.39],
    [5, 4, -27.39],
]

const msV10_M = [
    [5, -4, 36.61],
    [5, -4, 23.61],
    [5, -4, 10.61],
    [5, -4, -2.39],
    [5, -4, -15.39],
    [5, 0, 43.11],
    [5, 0, 30.11],
    [5, 0, 17.11],
    [5, 0, 4.11],
    [5, 0, -8.89],
    [5, 0, -21.89],
    [5, 4, 36.61],
    [5, 4, 23.61],
    [5, 4, 10.61],
    [5, 4, -2.39],
    [5, 4, -15.39],
]

const msV10_S = [
    [5, -4, 36.61],
    [5, -4, 26.61],
    [5, -4, 16.61],
    [5, -4, 6.39],
    [5, -4, -3.61],
    [5, 0, 41.61],
    [5, 0, 31.61],
    [5, 0, 21.61],
    [5, 0, 11.61],
    [5, 0, 1.61],
    [5, 0, -8.39],
    [5, 4, 36.61],
    [5, 4, 26.61],
    [5, 4, 16.61],
    [5, 4, 6.39],
    [5, 4, -3.61],
]

const medtronic565_one = [
    [1, -2.5, 36.61],
    [1, -2.5, 27.11],
    [1, -2.5, 17.61],
    [1, -2.5, 8.11],
    [1, -2.5, -1.39],
    [1, 0, 41.36],
    [1, 0, 31.86],
    [1, 0, 22.36],
    [1, 0, 12.86],
    [1, 0, 3.36],
    [1, 0, -6.14],
    [1, 2.5, 36.61],
    [1, 2.5, 27.11],
    [1, 2.5, 17.61],
    [1, 2.5, 8.11],
    [1, 2.5, -1.39]
]

const medtronic565_2d = [
    [-2.5, 36.61],
    [-2.5, 27.11],
    [-2.5, 17.61],
    [-2.5, 8.11],
    [-2.5, -1.39],
    [0, 41.36],
    [0, 31.86],
    [0, 22.36],
    [0, 12.86],
    [0, 3.36],
    [0, -6.14],
    [2.5, 36.61],
    [2.5, 27.11],
    [2.5, 17.61],
    [2.5, 8.11],
    [2.5, -1.39]
]

const msV10_L_one = [
    [1, -4, 36.61],
    [1, -4, 23.61],
    [1, -4, 10.61],
    [1, -4, -1.89],
    [1, -4, -13.89],
    [1, -2.85, -24.89],
    [1, 0, 31.11],
    [1, 0, 17.11],
    [1, 0, 4.36],
    [1, 0, -19.39],
    [1, 4, 36.61],
    [1, 4, 23.61],
    [1, 4, 10.61],
    [1, 4, -1.89],
    [1, 4, -13.89],
	[1, 2.85, -24.89],
]

const msV10_L_2d = [
    [-4, 36.61],
    [-4, 23.61],
    [-4, 10.61],
    [-4, -1.89],
    [-4, -13.89],
    [-2.85, -24.89],
    [0, 31.11],
    [0, 17.11],
    [0, 4.36],
    [0, -19.39],
    [4, 36.61],
    [4, 23.61],
    [4, 10.61],
    [4, -1.89],
    [4, -13.89],
	[2.85, -24.89],
]

const msV10_M_one = [
    [1, -4, 36.61],
    [1, -4, 25.61],
    [1, -4, 14.61],
    [1, -4, 4.11],
    [1, -4, -5.89],
    [1, -2.85, -14.89],
    [1, 0, 31.11],
    [1, 0, 20.11],
    [1, 0, 9.36],
    [1, 0, -10.39],
    [1, 4, 36.61],
    [1, 4, 25.61],
    [1, 4, 14.61],
    [1, 4, 4.11],
    [1, 4, -5.89],
	[1, 2.85, -14.89],
]

const msV10_M_2d = [
    [-4, 36.61],
    [-4, 25.61],
    [-4, 14.61],
    [-4, 4.11],
    [-4, -5.89],
    [-2.85, -14.89],
    [0, 31.11],
    [0, 20.11],
    [0, 9.36],
    [0, -10.39],
    [4, 36.61],
    [4, 25.61],
    [4, 14.61],
    [4, 4.11],
    [4, -5.89],
	[2.85, -14.89],
]

const msV10_S_one = [
    [1, -4, 36.61],
    [1, -4, 27.61],
    [1, -4, 18.61],
    [1, -4, 10.11],
    [1, -4, 2.11],
    [1, -2.85, -4.89],
    [1, 0, 32.11],
    [1, 0, 23.11],
    [1, 0, 14.36],
    [1, 0, -1.39],
    [1, 4, 36.61],
    [1, 4, 27.61],
    [1, 4, 18.61],
    [1, 4, 10.11],
    [1, 4, 2.11],
	[1, 2.85, -4.89],
]

const msV10_S_2d = [
    [-4, 36.61],
    [-4, 27.61],
    [-4, 18.61],
    [-4, 10.11],
    [-4, 2.11],
    [-2.85, -4.89],
    [0, 32.11],
    [0, 23.11],
    [0, 14.36],
    [0, -1.39],
    [4, 36.61],
    [4, 27.61],
    [4, 18.61],
    [4, 10.11],
    [4, 2.11],
	[2.85, -4.89],
]

// 2D版M类按节段
var nerverootsOpinionM2D = {
	title: {
	text: 'M类神经根进入点',
	subtext: 'N=5'
	},
	grid: {
	left: '3%',
	right: '7%',
	bottom: '7%',
	containLabel: true
	},
	tooltip: {
	// trigger: 'axis',
	showDelay: 0,
	formatter: function (params) {
		if (params.value.length > 1) {
		return (
			params.seriesName +
			' :<br/>' +
			params.value[0] +
			'mm ' +
			params.value[1] +
			'mm '
		);
		} else {
		return (
			params.seriesName +
			' :<br/>' +
			params.name +
			' : ' +
			params.value +
			'mm '
		);
		}
	},
	axisPointer: {
		show: true,
		type: 'cross',
		lineStyle: {
		type: 'dashed',
		width: 1
		}
	}
	},
	toolbox: {
	feature: {
		dataZoom: {},
		brush: {
		type: ['rect', 'polygon', 'clear']
		}
	}
	},
	brush: {},
	legend: {
	data: ['L1', 'L2', 'L3', 'L4', 'L5', 'S1', 'S2'],
	left: 'center',
	bottom: 10
	},
	xAxis: [
	{
		type: 'value',
		scale: true,
		min: -6,
		max: 6,
		axisLabel: {
			formatter: '{value} mm'
		},
		splitLine: {
			show: false
		}
	}
	],
	yAxis: [
	{
		type: 'value',
		scale: true,
		min: -70,
		max: 0,
		axisLabel: {
			formatter: '{value} mm'
		},
		splitLine: {
			show: false
		}
	}
	],
	series: [
	{
		name: 'Electrode',
		type: 'scatter',
		symbolSize: [19, 50], //点的大小
		symbol: 'rect',
		//   color: colors[1],
		emphasis: {
			focus: 'series'
		},
		itemStyle: {
			color: 'blue',
		},
		// prettier-ignore
		data: standardizeToMinus(msV10_M_2d),
	},
	{
		name: 'L1',
		type: 'scatter',
	//   color: colors[0],
		emphasis: {
		focus: 'series'
		},
		// prettier-ignore
		data: standardizeToMinus(STANDARD_M_2D['L1']),
		markArea: {
		silent: true,
		itemStyle: {
			color: 'transparent',
			borderWidth: 1,
			borderType: 'dashed'
		},
		data: [
			[
			{
				name: 'L1 Range',
				xAxis: 'min',
				yAxis: 'min'
			},
			{
				xAxis: 'max',
				yAxis: 'max'
			}
			]
		]
		},
	//   markPoint: {
	// 	color: colors[0],
	//     data: [
	//       { type: 'max', name: 'Max' },
	//       { type: 'min', name: 'Min' }
	//     ]
	//   },
		markLine: {
		lineStyle: {
			type: 'solid'
		},
		data: [{ type: 'average', name: 'AVG' }, { xAxis: 160 }]
		}
	},
	{
		name: 'L2',
		type: 'scatter',
	//   color: colors[1],
		emphasis: {
		focus: 'series'
		},
		// prettier-ignore
		data: standardizeToMinus(STANDARD_M_2D['L2']),
		markArea: {
		silent: true,
		itemStyle: {
			color: 'transparent',
			borderWidth: 1,
			borderType: 'dashed'
		},
		data: [
			[
			{
				name: 'L2 Range',
				xAxis: 'min',
				yAxis: 'min'
			},
			{
				xAxis: 'max',
				yAxis: 'max'
			}
			]
		]
		},
	//   markPoint: {
	//     data: [
	//       { type: 'max', name: 'Max' },
	//       { type: 'min', name: 'Min' }
	//     ]
	//   },
		markLine: {
		lineStyle: {
			type: 'solid'
		},
		data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }]
		}
	},
	{
		name: 'L3',
		type: 'scatter',
	//   color: colors[1],
		emphasis: {
		focus: 'series'
		},
		// prettier-ignore
		data: standardizeToMinus(STANDARD_M_2D['L3']),
		markArea: {
		silent: true,
		itemStyle: {
			color: 'transparent',
			borderWidth: 1,
			borderType: 'dashed'
		},
		data: [
			[
			{
				name: 'L3 Range',
				xAxis: 'min',
				yAxis: 'min'
			},
			{
				xAxis: 'max',
				yAxis: 'max'
			}
			]
		]
		},
	//   markPoint: {
	//     data: [
	//       { type: 'max', name: 'Max' },
	//       { type: 'min', name: 'Min' }
	//     ]
	//   },
		markLine: {
		lineStyle: {
			type: 'solid'
		},
		data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }]
		}
	},
	{
		name: 'L4',
		type: 'scatter',
	//   color: colors[1],
		emphasis: {
		focus: 'series'
		},
		// prettier-ignore
		data: standardizeToMinus(STANDARD_M_2D['L4']),
		markArea: {
		silent: true,
		itemStyle: {
			color: 'transparent',
			borderWidth: 1,
			borderType: 'dashed'
		},
		data: [
			[
			{
				name: 'L4 Range',
				xAxis: 'min',
				yAxis: 'min'
			},
			{
				xAxis: 'max',
				yAxis: 'max'
			}
			]
		]
		},
	//   markPoint: {
	//     data: [
	//       { type: 'max', name: 'Max' },
	//       { type: 'min', name: 'Min' }
	//     ]
	//   },
		markLine: {
		lineStyle: {
			type: 'solid'
		},
		data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }]
		}
	},
	{
		name: 'L5',
		type: 'scatter',
	//   color: colors[1],
		emphasis: {
		focus: 'series'
		},
		// prettier-ignore
		data: standardizeToMinus(STANDARD_M_2D['L5']),
		markArea: {
		silent: true,
		itemStyle: {
			color: 'transparent',
			borderWidth: 1,
			borderType: 'dashed'
		},
		data: [
			[
			{
				name: 'L5 Range',
				xAxis: 'min',
				yAxis: 'min'
			},
			{
				xAxis: 'max',
				yAxis: 'max'
			}
			]
		]
		},
	//   markPoint: {
	//     data: [
	//       { type: 'max', name: 'Max' },
	//       { type: 'min', name: 'Min' }
	//     ]
	//   },
		markLine: {
		lineStyle: {
			type: 'solid'
		},
		data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }]
		}
	},
	{
		name: 'S1',
		type: 'scatter',
	//   color: colors[1],
		emphasis: {
		focus: 'series'
		},
		// prettier-ignore
		data: standardizeToMinus(STANDARD_M_2D['S1']),
		markArea: {
		silent: true,
		itemStyle: {
			color: 'transparent',
			borderWidth: 1,
			borderType: 'dashed'
		},
		data: [
			[
			{
				name: 'S1 Range',
				xAxis: 'min',
				yAxis: 'min'
			},
			{
				xAxis: 'max',
				yAxis: 'max'
			}
			]
		]
		},
	//   markPoint: {
	//     data: [
	//       { type: 'max', name: 'Max' },
	//       { type: 'min', name: 'Min' }
	//     ]
	//   },
		markLine: {
		lineStyle: {
			type: 'solid'
		},
		data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }]
		}
	},
	{
		name: 'S2',
		type: 'scatter',
	//   color: colors[1],
		emphasis: {
		focus: 'series'
		},

		// prettier-ignore
		data: standardizeToMinus(STANDARD_M_2D['S2']),
		markArea: {
		silent: true,
		itemStyle: {
			color: 'transparent',
			borderWidth: 1,
			borderType: 'dashed'
		},
		data: [
			[
			{
				name: 'S2 Range',
				xAxis: 'min',
				yAxis: 'min'
			},
			{
				xAxis: 'max',
				yAxis: 'max'
			}
			]
		]
		},
	//   markPoint: {
	//     data: [
	//       { type: 'max', name: 'Max' },
	//       { type: 'min', name: 'Min' }
	//     ]
	//   },
		markLine: {
		lineStyle: {
			type: 'solid'
		},
		data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }]
		}
	},
	]
}
// 2D版L类按节段
var nerverootsOpinionL2D = {
	title: {
	text: 'L类神经根进入点',
	subtext: 'N=5'
	},
	grid: {
	left: '3%',
	right: '7%',
	bottom: '7%',
	containLabel: true
	},
	tooltip: {
	// trigger: 'axis',
	showDelay: 0,
	formatter: function (params) {
		if (params.value.length > 1) {
		return (
			params.seriesName +
			' :<br/>' +
			params.value[0] +
			'mm ' +
			params.value[1] +
			'mm '
		);
		} else {
		return (
			params.seriesName +
			' :<br/>' +
			params.name +
			' : ' +
			params.value +
			'mm '
		);
		}
	},
	axisPointer: {
		show: true,
		type: 'cross',
		lineStyle: {
		type: 'dashed',
		width: 1
		}
	}
	},
	toolbox: {
	feature: {
		dataZoom: {},
		brush: {
		type: ['rect', 'polygon', 'clear']
		}
	}
	},
	brush: {},
	legend: {
	data: ['L1', 'L2', 'L3', 'L4', 'L5', 'S1', 'S2'],
	left: 'center',
	bottom: 10
	},
	xAxis: [
	{
		type: 'value',
		scale: true,
		min: -6,
		max: 6,
		axisLabel: {
			formatter: '{value} mm'
		},
		splitLine: {
			show: false
		}
	}
	],
	yAxis: [
	{
		type: 'value',
		scale: true,
		min: -70,
		max: 0,
		axisLabel: {
			formatter: '{value} mm'
		},
		splitLine: {
			show: false
		}
	}
	],
	series: [
	{
		name: 'Electrode',
		type: 'scatter',
		symbolSize: [19, 50], //点的大小
		symbol: 'rect',
		//   color: colors[1],
		emphasis: {
			focus: 'series'
		},
		itemStyle: {
			color: 'blue',
		},
		// prettier-ignore
		data: standardizeToMinus(msV10_L_2d),
	},
	{
		name: 'L1',
		type: 'scatter',
	//   color: colors[0],
		emphasis: {
			focus: 'series'
		},
		// prettier-ignore
		data: standardizeToMinus(STANDARD_L_2D['L1']),
		markArea: {
		silent: true,
		itemStyle: {
			color: 'transparent',
			borderWidth: 1,
			borderType: 'dashed'
		},
		data: [
			[
			{
				name: 'L1 Range',
				xAxis: 'min',
				yAxis: 'min'
			},
			{
				xAxis: 'max',
				yAxis: 'max'
			}
			]
		]
		},
	//   markPoint: {
	// 	color: colors[0],
	//     data: [
	//       { type: 'max', name: 'Max' },
	//       { type: 'min', name: 'Min' }
	//     ]
	//   },
		markLine: {
		lineStyle: {
			type: 'solid'
		},
		data: [{ type: 'average', name: 'AVG' }, { xAxis: 160 }]
		}
	},
	{
		name: 'L2',
		type: 'scatter',
	//   color: colors[1],
		emphasis: {
		focus: 'series'
		},
		// prettier-ignore
		data: standardizeToMinus(STANDARD_L_2D['L2']),
		markArea: {
		silent: true,
		itemStyle: {
			color: 'transparent',
			borderWidth: 1,
			borderType: 'dashed'
		},
		data: [
			[
			{
				name: 'L2 Range',
				xAxis: 'min',
				yAxis: 'min'
			},
			{
				xAxis: 'max',
				yAxis: 'max'
			}
			]
		]
		},
	//   markPoint: {
	//     data: [
	//       { type: 'max', name: 'Max' },
	//       { type: 'min', name: 'Min' }
	//     ]
	//   },
		markLine: {
		lineStyle: {
			type: 'solid'
		},
		data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }]
		}
	},
	{
		name: 'L3',
		type: 'scatter',
	//   color: colors[1],
		emphasis: {
		focus: 'series'
		},
		// prettier-ignore
		data: standardizeToMinus(STANDARD_L_2D['L3']),
		markArea: {
		silent: true,
		itemStyle: {
			color: 'transparent',
			borderWidth: 1,
			borderType: 'dashed'
		},
		data: [
			[
			{
				name: 'L3 Range',
				xAxis: 'min',
				yAxis: 'min'
			},
			{
				xAxis: 'max',
				yAxis: 'max'
			}
			]
		]
		},
	//   markPoint: {
	//     data: [
	//       { type: 'max', name: 'Max' },
	//       { type: 'min', name: 'Min' }
	//     ]
	//   },
		markLine: {
		lineStyle: {
			type: 'solid'
		},
		data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }]
		}
	},
	{
		name: 'L4',
		type: 'scatter',
	//   color: colors[1],
		emphasis: {
		focus: 'series'
		},
		// prettier-ignore
		data: standardizeToMinus(STANDARD_L_2D['L4']),
		markArea: {
		silent: true,
		itemStyle: {
			color: 'transparent',
			borderWidth: 1,
			borderType: 'dashed'
		},
		data: [
			[
			{
				name: 'L4 Range',
				xAxis: 'min',
				yAxis: 'min'
			},
			{
				xAxis: 'max',
				yAxis: 'max'
			}
			]
		]
		},
	//   markPoint: {
	//     data: [
	//       { type: 'max', name: 'Max' },
	//       { type: 'min', name: 'Min' }
	//     ]
	//   },
		markLine: {
		lineStyle: {
			type: 'solid'
		},
		data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }]
		}
	},
	{
		name: 'L5',
		type: 'scatter',
	//   color: colors[1],
		emphasis: {
		focus: 'series'
		},
		// prettier-ignore
		data: standardizeToMinus(STANDARD_L_2D['L5']),
		markArea: {
		silent: true,
		itemStyle: {
			color: 'transparent',
			borderWidth: 1,
			borderType: 'dashed'
		},
		data: [
			[
			{
				name: 'L5 Range',
				xAxis: 'min',
				yAxis: 'min'
			},
			{
				xAxis: 'max',
				yAxis: 'max'
			}
			]
		]
		},
	//   markPoint: {
	//     data: [
	//       { type: 'max', name: 'Max' },
	//       { type: 'min', name: 'Min' }
	//     ]
	//   },
		markLine: {
		lineStyle: {
			type: 'solid'
		},
		data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }]
		}
	},
	{
		name: 'S1',
		type: 'scatter',
	//   color: colors[1],
		emphasis: {
		focus: 'series'
		},
		// prettier-ignore
		data: standardizeToMinus(STANDARD_L_2D['S1']),
		markArea: {
		silent: true,
		itemStyle: {
			color: 'transparent',
			borderWidth: 1,
			borderType: 'dashed'
		},
		data: [
			[
			{
				name: 'S1 Range',
				xAxis: 'min',
				yAxis: 'min'
			},
			{
				xAxis: 'max',
				yAxis: 'max'
			}
			]
		]
		},
	//   markPoint: {
	//     data: [
	//       { type: 'max', name: 'Max' },
	//       { type: 'min', name: 'Min' }
	//     ]
	//   },
		markLine: {
		lineStyle: {
			type: 'solid'
		},
		data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }]
		}
	},
	{
		name: 'S2',
		type: 'scatter',
	//   color: colors[1],
		emphasis: {
		focus: 'series'
		},

		// prettier-ignore
		data: standardizeToMinus(STANDARD_L_2D['S2']),
		markArea: {
		silent: true,
		itemStyle: {
			color: 'transparent',
			borderWidth: 1,
			borderType: 'dashed'
		},
		data: [
			[
			{
				name: 'S2 Range',
				xAxis: 'min',
				yAxis: 'min'
			},
			{
				xAxis: 'max',
				yAxis: 'max'
			}
			]
		]
		},
	//   markPoint: {
	//     data: [
	//       { type: 'max', name: 'Max' },
	//       { type: 'min', name: 'Min' }
	//     ]
	//   },
		markLine: {
		lineStyle: {
			type: 'solid'
		},
		data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }]
		}
	},
	]
}

// 2D版S类按节段
var nerverootsOpinionS2D = {
	title: {
	text: 'S类神经根进入点',
	subtext: 'N=5'
	},
	grid: {
		show: true,
		left: '3%',
		right: '7%',
		bottom: '7%',
		containLabel: true
	},
	tooltip: {
	// trigger: 'axis',
	showDelay: 0,
	formatter: function (params) {
		if (params.value.length > 1) {
		return (
			params.seriesName +
			' :<br/>' +
			params.value[0] +
			'mm ' +
			params.value[1] +
			'mm '
		);
		} else {
		return (
			params.seriesName +
			' :<br/>' +
			params.name +
			' : ' +
			params.value +
			'mm '
		);
		}
	},
	axisPointer: {
		show: true,
		type: 'cross',
		lineStyle: {
		type: 'dashed',
		width: 1
		}
	}
	},
	toolbox: {
	feature: {
		dataZoom: {},
		brush: {
		type: ['rect', 'polygon', 'clear']
		}
	}
	},
	brush: {},
	legend: {
	data: ['L1', 'L2', 'L3', 'L4', 'L5', 'S1', 'S2'],
	left: 'center',
	bottom: 10
	},
	xAxis: [
	{
		type: 'value',
		scale: true,
		min: -6,
		max: 6,
		axisLabel: {
			formatter: '{value} mm'
		},
		axisLine: {
			show: true
		},
		splitLine: {
			show: false
		}
	}
	],
	yAxis: [
	{
		interval: 10,
		position: 'left',
		type: 'value',
		scale: true,
		min: -70,
		max: 0,
		axisLabel: {
			formatter: '{value} mm',
		},
		axisLine: {
			show: true
		},
		splitLine: {
			show: false
		},
		axisTick: {
			interval: 10,
			show: true
		}
	}
	],
	series: [
	{
		name: 'Electrode',
		type: 'scatter',
		symbolSize: [19, 50], //点的大小
		symbol: 'rect',
		//   color: colors[1],
		emphasis: {
			focus: 'series'
		},
		itemStyle: {
			color: 'blue',
		},
		// prettier-ignore
		data: standardizeToMinus(msV10_S_2d),
	},
	{
		name: 'L1',
		type: 'scatter',
	//   color: colors[0],
		emphasis: {
		focus: 'series'
		},
		// prettier-ignore
		data: standardizeToMinus(STANDARD_S_2D['L1']),
		markArea: {
		silent: true,
		itemStyle: {
			color: 'transparent',
			borderWidth: 1,
			borderType: 'dashed'
		},
		data: [
			[
			{
				name: 'L1 Range',
				xAxis: 'min',
				yAxis: 'min'
			},
			{
				xAxis: 'max',
				yAxis: 'max'
			}
			]
		]
		},
		markLine: {
		lineStyle: {
			type: 'solid'
		},
		data: [{ type: 'average', name: 'AVG' }, { xAxis: 160 }]
		}
	},
	{
		name: 'L2',
		type: 'scatter',
	//   color: colors[1],
		emphasis: {
		focus: 'series'
		},
		// prettier-ignore
		data: standardizeToMinus(STANDARD_S_2D['L2']),
		markArea: {
		silent: true,
		itemStyle: {
			color: 'transparent',
			borderWidth: 1,
			borderType: 'dashed'
		},
		data: [
			[
			{
				name: 'L2 Range',
				xAxis: 'min',
				yAxis: 'min'
			},
			{
				xAxis: 'max',
				yAxis: 'max'
			}
			]
		]
		},
		markLine: {
		lineStyle: {
			type: 'solid'
		},
		data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }]
		}
	},
	{
		name: 'L3',
		type: 'scatter',
	//   color: colors[1],
		emphasis: {
		focus: 'series'
		},
		// prettier-ignore
		data: standardizeToMinus(STANDARD_S_2D['L3']),
		markArea: {
		silent: true,
		itemStyle: {
			color: 'transparent',
			borderWidth: 1,
			borderType: 'dashed'
		},
		data: [
			[
			{
				name: 'L3 Range',
				xAxis: 'min',
				yAxis: 'min'
			},
			{
				xAxis: 'max',
				yAxis: 'max'
			}
			]
		]
		},
		markLine: {
		lineStyle: {
			type: 'solid'
		},
		data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }]
		}
	},
	{
		name: 'L4',
		type: 'scatter',
	//   color: colors[1],
		emphasis: {
		focus: 'series'
		},
		// prettier-ignore
		data: standardizeToMinus(STANDARD_S_2D['L4']),
		markArea: {
		silent: true,
		itemStyle: {
			color: 'transparent',
			borderWidth: 1,
			borderType: 'dashed'
		},
		data: [
			[
			{
				name: 'L4 Range',
				xAxis: 'min',
				yAxis: 'min'
			},
			{
				xAxis: 'max',
				yAxis: 'max'
			}
			]
		]
		},
		markLine: {
		lineStyle: {
			type: 'solid'
		},
		data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }]
		}
	},
	{
		name: 'L5',
		type: 'scatter',
	//   color: colors[1],
		emphasis: {
		focus: 'series'
		},
		// prettier-ignore
		data: standardizeToMinus(STANDARD_S_2D['L5']),
		markArea: {
		silent: true,
		itemStyle: {
			color: 'transparent',
			borderWidth: 1,
			borderType: 'dashed'
		},
		data: [
			[
			{
				name: 'L5 Range',
				xAxis: 'min',
				yAxis: 'min'
			},
			{
				xAxis: 'max',
				yAxis: 'max'
			}
			]
		]
		},
	//   markPoint: {
	//     data: [
	//       { type: 'max', name: 'Max' },
	//       { type: 'min', name: 'Min' }
	//     ]
	//   },
		markLine: {
		lineStyle: {
			type: 'solid'
		},
		data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }]
		}
	},
	{
		name: 'S1',
		type: 'scatter',
	//   color: colors[1],
		emphasis: {
		focus: 'series'
		},
		// prettier-ignore
		data: standardizeToMinus(STANDARD_S_2D['S1']),
		markArea: {
		silent: true,
		itemStyle: {
			color: 'transparent',
			borderWidth: 1,
			borderType: 'dashed'
		},
		data: [
			[
			{
				name: 'S1 Range',
				xAxis: 'min',
				yAxis: 'min'
			},
			{
				xAxis: 'max',
				yAxis: 'max'
			}
			]
		]
		},
		markLine: {
		lineStyle: {
			type: 'solid'
		},
		data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }]
		}
	},
	{
		name: 'S2',
		type: 'scatter',
	//   color: colors[1],
		emphasis: {
		focus: 'series'
		},

		// prettier-ignore
		data: standardizeToMinus(STANDARD_S_2D['S2']),
		markArea: {
		silent: true,
		itemStyle: {
			color: 'transparent',
			borderWidth: 1,
			borderType: 'dashed'
		},
		data: [
			[
			{
				name: 'S2 Range',
				xAxis: 'min',
				yAxis: 'min'
			},
			{
				xAxis: 'max',
				yAxis: 'max'
			}
			]
		]
		},
		markLine: {
		lineStyle: {
			type: 'solid'
		},
		data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }]
		}
	},
	]
}

// 2D版M类按节段 with medtronic
var nerverootsOpinionM2DMdt = {
	title: {
	text: 'M类神经根进入点',
	subtext: 'N=5'
	},
	grid: {
	left: '3%',
	right: '7%',
	bottom: '7%',
	containLabel: true
	},
	tooltip: {
	// trigger: 'axis',
	showDelay: 0,
	formatter: function (params) {
		if (params.value.length > 1) {
		return (
			params.seriesName +
			' :<br/>' +
			params.value[0] +
			'mm ' +
			params.value[1] +
			'mm '
		);
		} else {
		return (
			params.seriesName +
			' :<br/>' +
			params.name +
			' : ' +
			params.value +
			'mm '
		);
		}
	},
	axisPointer: {
		show: true,
		type: 'cross',
		lineStyle: {
		type: 'dashed',
		width: 1
		}
	}
	},
	toolbox: {
	feature: {
		dataZoom: {},
		brush: {
		type: ['rect', 'polygon', 'clear']
		}
	}
	},
	brush: {},
	legend: {
	data: ['L1', 'L2', 'L3', 'L4', 'L5', 'S1', 'S2'],
	left: 'center',
	bottom: 10
	},
	xAxis: [
	{
		type: 'value',
		scale: true,
		min: -6,
		max: 6,
		axisLabel: {
			formatter: '{value} mm'
		},
		splitLine: {
			show: false
		}
	}
	],
	yAxis: [
	{
		type: 'value',
		scale: true,
		min: -70,
		max: 0,
		axisLabel: {
			formatter: '{value} mm'
		},
		splitLine: {
			show: false
		}
	}
	],
	series: [
	{
		name: 'Electrode',
		type: 'scatter',
		symbolSize: [19, 50], //点的大小
		symbol: 'rect',
		//   color: colors[1],
		emphasis: {
			focus: 'series'
		},
		itemStyle: {
			color: 'blue',
		},
		// prettier-ignore
		data: standardizeToMinus(medtronic565_2d),
	},
	{
		name: 'L1',
		type: 'scatter',
	//   color: colors[0],
		emphasis: {
		focus: 'series'
		},
		// prettier-ignore
		data: standardizeToMinus(STANDARD_M_2D['L1']),
		markArea: {
		silent: true,
		itemStyle: {
			color: 'transparent',
			borderWidth: 1,
			borderType: 'dashed'
		},
		data: [
			[
			{
				name: 'L1 Range',
				xAxis: 'min',
				yAxis: 'min'
			},
			{
				xAxis: 'max',
				yAxis: 'max'
			}
			]
		]
		},
	//   markPoint: {
	// 	color: colors[0],
	//     data: [
	//       { type: 'max', name: 'Max' },
	//       { type: 'min', name: 'Min' }
	//     ]
	//   },
		markLine: {
		lineStyle: {
			type: 'solid'
		},
		data: [{ type: 'average', name: 'AVG' }, { xAxis: 160 }]
		}
	},
	{
		name: 'L2',
		type: 'scatter',
	//   color: colors[1],
		emphasis: {
		focus: 'series'
		},
		// prettier-ignore
		data: standardizeToMinus(STANDARD_M_2D['L2']),
		markArea: {
		silent: true,
		itemStyle: {
			color: 'transparent',
			borderWidth: 1,
			borderType: 'dashed'
		},
		data: [
			[
			{
				name: 'L2 Range',
				xAxis: 'min',
				yAxis: 'min'
			},
			{
				xAxis: 'max',
				yAxis: 'max'
			}
			]
		]
		},
	//   markPoint: {
	//     data: [
	//       { type: 'max', name: 'Max' },
	//       { type: 'min', name: 'Min' }
	//     ]
	//   },
		markLine: {
		lineStyle: {
			type: 'solid'
		},
		data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }]
		}
	},
	{
		name: 'L3',
		type: 'scatter',
	//   color: colors[1],
		emphasis: {
		focus: 'series'
		},
		// prettier-ignore
		data: standardizeToMinus(STANDARD_M_2D['L3']),
		markArea: {
		silent: true,
		itemStyle: {
			color: 'transparent',
			borderWidth: 1,
			borderType: 'dashed'
		},
		data: [
			[
			{
				name: 'L3 Range',
				xAxis: 'min',
				yAxis: 'min'
			},
			{
				xAxis: 'max',
				yAxis: 'max'
			}
			]
		]
		},
	//   markPoint: {
	//     data: [
	//       { type: 'max', name: 'Max' },
	//       { type: 'min', name: 'Min' }
	//     ]
	//   },
		markLine: {
		lineStyle: {
			type: 'solid'
		},
		data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }]
		}
	},
	{
		name: 'L4',
		type: 'scatter',
	//   color: colors[1],
		emphasis: {
		focus: 'series'
		},
		// prettier-ignore
		data: standardizeToMinus(STANDARD_M_2D['L4']),
		markArea: {
		silent: true,
		itemStyle: {
			color: 'transparent',
			borderWidth: 1,
			borderType: 'dashed'
		},
		data: [
			[
			{
				name: 'L4 Range',
				xAxis: 'min',
				yAxis: 'min'
			},
			{
				xAxis: 'max',
				yAxis: 'max'
			}
			]
		]
		},
	//   markPoint: {
	//     data: [
	//       { type: 'max', name: 'Max' },
	//       { type: 'min', name: 'Min' }
	//     ]
	//   },
		markLine: {
		lineStyle: {
			type: 'solid'
		},
		data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }]
		}
	},
	{
		name: 'L5',
		type: 'scatter',
	//   color: colors[1],
		emphasis: {
		focus: 'series'
		},
		// prettier-ignore
		data: standardizeToMinus(STANDARD_M_2D['L5']),
		markArea: {
		silent: true,
		itemStyle: {
			color: 'transparent',
			borderWidth: 1,
			borderType: 'dashed'
		},
		data: [
			[
			{
				name: 'L5 Range',
				xAxis: 'min',
				yAxis: 'min'
			},
			{
				xAxis: 'max',
				yAxis: 'max'
			}
			]
		]
		},
	//   markPoint: {
	//     data: [
	//       { type: 'max', name: 'Max' },
	//       { type: 'min', name: 'Min' }
	//     ]
	//   },
		markLine: {
		lineStyle: {
			type: 'solid'
		},
		data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }]
		}
	},
	{
		name: 'S1',
		type: 'scatter',
	//   color: colors[1],
		emphasis: {
		focus: 'series'
		},
		// prettier-ignore
		data: standardizeToMinus(STANDARD_M_2D['S1']),
		markArea: {
		silent: true,
		itemStyle: {
			color: 'transparent',
			borderWidth: 1,
			borderType: 'dashed'
		},
		data: [
			[
			{
				name: 'S1 Range',
				xAxis: 'min',
				yAxis: 'min'
			},
			{
				xAxis: 'max',
				yAxis: 'max'
			}
			]
		]
		},
	//   markPoint: {
	//     data: [
	//       { type: 'max', name: 'Max' },
	//       { type: 'min', name: 'Min' }
	//     ]
	//   },
		markLine: {
		lineStyle: {
			type: 'solid'
		},
		data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }]
		}
	},
	{
		name: 'S2',
		type: 'scatter',
	//   color: colors[1],
		emphasis: {
		focus: 'series'
		},

		// prettier-ignore
		data: standardizeToMinus(STANDARD_M_2D['S2']),
		markArea: {
		silent: true,
		itemStyle: {
			color: 'transparent',
			borderWidth: 1,
			borderType: 'dashed'
		},
		data: [
			[
			{
				name: 'S2 Range',
				xAxis: 'min',
				yAxis: 'min'
			},
			{
				xAxis: 'max',
				yAxis: 'max'
			}
			]
		]
		},
	//   markPoint: {
	//     data: [
	//       { type: 'max', name: 'Max' },
	//       { type: 'min', name: 'Min' }
	//     ]
	//   },
		markLine: {
		lineStyle: {
			type: 'solid'
		},
		data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }]
		}
	},
	]
}
// 2D版L类按节段 with medtronic
var nerverootsOpinionL2DMdt = {
	title: {
	text: 'L类神经根进入点',
	subtext: 'N=5'
	},
	grid: {
	left: '3%',
	right: '7%',
	bottom: '7%',
	containLabel: true
	},
	tooltip: {
	// trigger: 'axis',
	showDelay: 0,
	formatter: function (params) {
		if (params.value.length > 1) {
		return (
			params.seriesName +
			' :<br/>' +
			params.value[0] +
			'mm ' +
			params.value[1] +
			'mm '
		);
		} else {
		return (
			params.seriesName +
			' :<br/>' +
			params.name +
			' : ' +
			params.value +
			'mm '
		);
		}
	},
	axisPointer: {
		show: true,
		type: 'cross',
		lineStyle: {
		type: 'dashed',
		width: 1
		}
	}
	},
	toolbox: {
	feature: {
		dataZoom: {},
		brush: {
		type: ['rect', 'polygon', 'clear']
		}
	}
	},
	brush: {},
	legend: {
	data: ['L1', 'L2', 'L3', 'L4', 'L5', 'S1', 'S2'],
	left: 'center',
	bottom: 10
	},
	xAxis: [
	{
		type: 'value',
		scale: true,
		min: -6,
		max: 6,
		axisLabel: {
			formatter: '{value} mm'
		},
		splitLine: {
			show: false
		}
	}
	],
	yAxis: [
	{
		type: 'value',
		scale: true,
		min: -70,
		max: 0,
		axisLabel: {
			formatter: '{value} mm'
		},
		splitLine: {
			show: false
		}
	}
	],
	series: [
	{
		name: 'Electrode',
		type: 'scatter',
		symbolSize: [19, 50], //点的大小
		symbol: 'rect',
		//   color: colors[1],
		emphasis: {
			focus: 'series'
		},
		itemStyle: {
			color: 'blue',
		},
		// prettier-ignore
		data: standardizeToMinus(medtronic565_2d),
	},
	{
		name: 'L1',
		type: 'scatter',
	//   color: colors[0],
		emphasis: {
			focus: 'series'
		},
		// prettier-ignore
		data: standardizeToMinus(STANDARD_L_2D['L1']),
		markArea: {
		silent: true,
		itemStyle: {
			color: 'transparent',
			borderWidth: 1,
			borderType: 'dashed'
		},
		data: [
			[
			{
				name: 'L1 Range',
				xAxis: 'min',
				yAxis: 'min'
			},
			{
				xAxis: 'max',
				yAxis: 'max'
			}
			]
		]
		},
	//   markPoint: {
	// 	color: colors[0],
	//     data: [
	//       { type: 'max', name: 'Max' },
	//       { type: 'min', name: 'Min' }
	//     ]
	//   },
		markLine: {
		lineStyle: {
			type: 'solid'
		},
		data: [{ type: 'average', name: 'AVG' }, { xAxis: 160 }]
		}
	},
	{
		name: 'L2',
		type: 'scatter',
	//   color: colors[1],
		emphasis: {
		focus: 'series'
		},
		// prettier-ignore
		data: standardizeToMinus(STANDARD_L_2D['L2']),
		markArea: {
		silent: true,
		itemStyle: {
			color: 'transparent',
			borderWidth: 1,
			borderType: 'dashed'
		},
		data: [
			[
			{
				name: 'L2 Range',
				xAxis: 'min',
				yAxis: 'min'
			},
			{
				xAxis: 'max',
				yAxis: 'max'
			}
			]
		]
		},
	//   markPoint: {
	//     data: [
	//       { type: 'max', name: 'Max' },
	//       { type: 'min', name: 'Min' }
	//     ]
	//   },
		markLine: {
		lineStyle: {
			type: 'solid'
		},
		data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }]
		}
	},
	{
		name: 'L3',
		type: 'scatter',
	//   color: colors[1],
		emphasis: {
		focus: 'series'
		},
		// prettier-ignore
		data: standardizeToMinus(STANDARD_L_2D['L3']),
		markArea: {
		silent: true,
		itemStyle: {
			color: 'transparent',
			borderWidth: 1,
			borderType: 'dashed'
		},
		data: [
			[
			{
				name: 'L3 Range',
				xAxis: 'min',
				yAxis: 'min'
			},
			{
				xAxis: 'max',
				yAxis: 'max'
			}
			]
		]
		},
	//   markPoint: {
	//     data: [
	//       { type: 'max', name: 'Max' },
	//       { type: 'min', name: 'Min' }
	//     ]
	//   },
		markLine: {
		lineStyle: {
			type: 'solid'
		},
		data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }]
		}
	},
	{
		name: 'L4',
		type: 'scatter',
	//   color: colors[1],
		emphasis: {
		focus: 'series'
		},
		// prettier-ignore
		data: standardizeToMinus(STANDARD_L_2D['L4']),
		markArea: {
		silent: true,
		itemStyle: {
			color: 'transparent',
			borderWidth: 1,
			borderType: 'dashed'
		},
		data: [
			[
			{
				name: 'L4 Range',
				xAxis: 'min',
				yAxis: 'min'
			},
			{
				xAxis: 'max',
				yAxis: 'max'
			}
			]
		]
		},
	//   markPoint: {
	//     data: [
	//       { type: 'max', name: 'Max' },
	//       { type: 'min', name: 'Min' }
	//     ]
	//   },
		markLine: {
		lineStyle: {
			type: 'solid'
		},
		data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }]
		}
	},
	{
		name: 'L5',
		type: 'scatter',
	//   color: colors[1],
		emphasis: {
		focus: 'series'
		},
		// prettier-ignore
		data: standardizeToMinus(STANDARD_L_2D['L5']),
		markArea: {
		silent: true,
		itemStyle: {
			color: 'transparent',
			borderWidth: 1,
			borderType: 'dashed'
		},
		data: [
			[
			{
				name: 'L5 Range',
				xAxis: 'min',
				yAxis: 'min'
			},
			{
				xAxis: 'max',
				yAxis: 'max'
			}
			]
		]
		},
	//   markPoint: {
	//     data: [
	//       { type: 'max', name: 'Max' },
	//       { type: 'min', name: 'Min' }
	//     ]
	//   },
		markLine: {
		lineStyle: {
			type: 'solid'
		},
		data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }]
		}
	},
	{
		name: 'S1',
		type: 'scatter',
	//   color: colors[1],
		emphasis: {
		focus: 'series'
		},
		// prettier-ignore
		data: standardizeToMinus(STANDARD_L_2D['S1']),
		markArea: {
		silent: true,
		itemStyle: {
			color: 'transparent',
			borderWidth: 1,
			borderType: 'dashed'
		},
		data: [
			[
			{
				name: 'S1 Range',
				xAxis: 'min',
				yAxis: 'min'
			},
			{
				xAxis: 'max',
				yAxis: 'max'
			}
			]
		]
		},
	//   markPoint: {
	//     data: [
	//       { type: 'max', name: 'Max' },
	//       { type: 'min', name: 'Min' }
	//     ]
	//   },
		markLine: {
		lineStyle: {
			type: 'solid'
		},
		data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }]
		}
	},
	{
		name: 'S2',
		type: 'scatter',
	//   color: colors[1],
		emphasis: {
		focus: 'series'
		},

		// prettier-ignore
		data: standardizeToMinus(STANDARD_L_2D['S2']),
		markArea: {
		silent: true,
		itemStyle: {
			color: 'transparent',
			borderWidth: 1,
			borderType: 'dashed'
		},
		data: [
			[
			{
				name: 'S2 Range',
				xAxis: 'min',
				yAxis: 'min'
			},
			{
				xAxis: 'max',
				yAxis: 'max'
			}
			]
		]
		},
	//   markPoint: {
	//     data: [
	//       { type: 'max', name: 'Max' },
	//       { type: 'min', name: 'Min' }
	//     ]
	//   },
		markLine: {
		lineStyle: {
			type: 'solid'
		},
		data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }]
		}
	},
	]
}

// 2D版S类按节段 with medtronic
var nerverootsOpinionS2DMdt = {
	title: {
	text: 'S类神经根进入点',
	subtext: 'N=5'
	},
	grid: {
		show: true,
		left: '3%',
		right: '7%',
		bottom: '7%',
		containLabel: true
	},
	tooltip: {
	// trigger: 'axis',
	showDelay: 0,
	formatter: function (params) {
		if (params.value.length > 1) {
		return (
			params.seriesName +
			' :<br/>' +
			params.value[0] +
			'mm ' +
			params.value[1] +
			'mm '
		);
		} else {
		return (
			params.seriesName +
			' :<br/>' +
			params.name +
			' : ' +
			params.value +
			'mm '
		);
		}
	},
	axisPointer: {
		show: true,
		type: 'cross',
		lineStyle: {
		type: 'dashed',
		width: 1
		}
	}
	},
	toolbox: {
	feature: {
		dataZoom: {},
		brush: {
		type: ['rect', 'polygon', 'clear']
		}
	}
	},
	brush: {},
	legend: {
	data: ['L1', 'L2', 'L3', 'L4', 'L5', 'S1', 'S2'],
	left: 'center',
	bottom: 10
	},
	xAxis: [
	{
		type: 'value',
		scale: true,
		min: -6,
		max: 6,
		axisLabel: {
			formatter: '{value} mm'
		},
		axisLine: {
			show: true
		},
		splitLine: {
			show: false
		}
	}
	],
	yAxis: [
	{
		interval: 10,
		position: 'left',
		type: 'value',
		scale: true,
		min: -70,
		max: 0,
		axisLabel: {
			formatter: '{value} mm',
		},
		axisLine: {
			show: true
		},
		splitLine: {
			show: false
		},
		axisTick: {
			interval: 10,
			show: true
		}
	}
	],
	series: [
	{
		name: 'Electrode',
		type: 'scatter',
		symbolSize: [19, 50], //点的大小
		symbol: 'rect',
		//   color: colors[1],
		emphasis: {
			focus: 'series'
		},
		itemStyle: {
			color: 'blue',
		},
		// prettier-ignore
		data: standardizeToMinus(medtronic565_2d),
	},
	{
		name: 'L1',
		type: 'scatter',
	//   color: colors[0],
		emphasis: {
		focus: 'series'
		},
		// prettier-ignore
		data: standardizeToMinus(STANDARD_S_2D['L1']),
		markArea: {
		silent: true,
		itemStyle: {
			color: 'transparent',
			borderWidth: 1,
			borderType: 'dashed'
		},
		data: [
			[
			{
				name: 'L1 Range',
				xAxis: 'min',
				yAxis: 'min'
			},
			{
				xAxis: 'max',
				yAxis: 'max'
			}
			]
		]
		},
		markLine: {
		lineStyle: {
			type: 'solid'
		},
		data: [{ type: 'average', name: 'AVG' }, { xAxis: 160 }]
		}
	},
	{
		name: 'L2',
		type: 'scatter',
	//   color: colors[1],
		emphasis: {
		focus: 'series'
		},
		// prettier-ignore
		data: standardizeToMinus(STANDARD_S_2D['L2']),
		markArea: {
		silent: true,
		itemStyle: {
			color: 'transparent',
			borderWidth: 1,
			borderType: 'dashed'
		},
		data: [
			[
			{
				name: 'L2 Range',
				xAxis: 'min',
				yAxis: 'min'
			},
			{
				xAxis: 'max',
				yAxis: 'max'
			}
			]
		]
		},
		markLine: {
		lineStyle: {
			type: 'solid'
		},
		data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }]
		}
	},
	{
		name: 'L3',
		type: 'scatter',
	//   color: colors[1],
		emphasis: {
		focus: 'series'
		},
		// prettier-ignore
		data: standardizeToMinus(STANDARD_S_2D['L3']),
		markArea: {
		silent: true,
		itemStyle: {
			color: 'transparent',
			borderWidth: 1,
			borderType: 'dashed'
		},
		data: [
			[
			{
				name: 'L3 Range',
				xAxis: 'min',
				yAxis: 'min'
			},
			{
				xAxis: 'max',
				yAxis: 'max'
			}
			]
		]
		},
		markLine: {
		lineStyle: {
			type: 'solid'
		},
		data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }]
		}
	},
	{
		name: 'L4',
		type: 'scatter',
	//   color: colors[1],
		emphasis: {
		focus: 'series'
		},
		// prettier-ignore
		data: standardizeToMinus(STANDARD_S_2D['L4']),
		markArea: {
		silent: true,
		itemStyle: {
			color: 'transparent',
			borderWidth: 1,
			borderType: 'dashed'
		},
		data: [
			[
			{
				name: 'L4 Range',
				xAxis: 'min',
				yAxis: 'min'
			},
			{
				xAxis: 'max',
				yAxis: 'max'
			}
			]
		]
		},
		markLine: {
		lineStyle: {
			type: 'solid'
		},
		data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }]
		}
	},
	{
		name: 'L5',
		type: 'scatter',
	//   color: colors[1],
		emphasis: {
		focus: 'series'
		},
		// prettier-ignore
		data: standardizeToMinus(STANDARD_S_2D['L5']),
		markArea: {
		silent: true,
		itemStyle: {
			color: 'transparent',
			borderWidth: 1,
			borderType: 'dashed'
		},
		data: [
			[
			{
				name: 'L5 Range',
				xAxis: 'min',
				yAxis: 'min'
			},
			{
				xAxis: 'max',
				yAxis: 'max'
			}
			]
		]
		},
	//   markPoint: {
	//     data: [
	//       { type: 'max', name: 'Max' },
	//       { type: 'min', name: 'Min' }
	//     ]
	//   },
		markLine: {
		lineStyle: {
			type: 'solid'
		},
		data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }]
		}
	},
	{
		name: 'S1',
		type: 'scatter',
	//   color: colors[1],
		emphasis: {
		focus: 'series'
		},
		// prettier-ignore
		data: standardizeToMinus(STANDARD_S_2D['S1']),
		markArea: {
		silent: true,
		itemStyle: {
			color: 'transparent',
			borderWidth: 1,
			borderType: 'dashed'
		},
		data: [
			[
			{
				name: 'S1 Range',
				xAxis: 'min',
				yAxis: 'min'
			},
			{
				xAxis: 'max',
				yAxis: 'max'
			}
			]
		]
		},
		markLine: {
		lineStyle: {
			type: 'solid'
		},
		data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }]
		}
	},
	{
		name: 'S2',
		type: 'scatter',
	//   color: colors[1],
		emphasis: {
		focus: 'series'
		},

		// prettier-ignore
		data: standardizeToMinus(STANDARD_S_2D['S2']),
		markArea: {
		silent: true,
		itemStyle: {
			color: 'transparent',
			borderWidth: 1,
			borderType: 'dashed'
		},
		data: [
			[
			{
				name: 'S2 Range',
				xAxis: 'min',
				yAxis: 'min'
			},
			{
				xAxis: 'max',
				yAxis: 'max'
			}
			]
		]
		},
		markLine: {
		lineStyle: {
			type: 'solid'
		},
		data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }]
		}
	},
	]
}

// M类样本按节段
var nerverootsOpinionMNew = {
	title: {
		text: 'M类样本（N=5）'
	},
	tooltip: {
	},
	xAxis3D: {
		name: "x", //x轴显示为x
		type: "category",
		data: ['DREZ', 'electrode'],
		axisLine: {
		//x轴坐标轴，false为隐藏，true为显示
		show: true,
		},
		axisLabel: {
		show: true,
		},
		itemStyle: {
		borderColor: "#fff",
		backgroundColor: "#fff",
		},
	},
	yAxis3D: {
		name: "Y", //y轴显示为y
		type: "value",
		splitNumber: 5,
		axisTick: {
		show: false, //显示每个值对应的刻度
		},
	},
	zAxis3D: {
		name: "Z", //z轴显示为z
		type: "value",
		axisTick: {
		show: false, //显示每个值对应的刻度
		},
	},
	grid3D: {
		axisLine: {
		lineStyle: {
			//坐标轴样式
			color: "#070707", //轴线颜色
			opacity: 0.8, //(单个刻度不会受影响)
			width: 1, //线条宽度
		},
		},
		axisPointer: {
		lineStyle: {
			color: "#666", //坐标轴指示线
		},
		show: true, //展示坐标轴指示线
		},
		viewControl: {
		distance: 320, //与视角的距离，值越大，图离视角越远，图越小
		alpha: 7, //绕x轴旋转的角度（上下旋转），增大，视角顺时针增大（向上）
		beta: 20, //绕y轴旋转的角度（左右旋转），增大，视角逆时针增大（向右）
		center: [0, 0, 0], //第一个参数：增大，视角沿x轴正方向水平右移动（图向左）；第二个参数：增大，视角沿y轴正方向垂直向上移动（图向下）；第三个参数：增大，视角向z轴正方向移动（图变小）
		},
		boxWidth: 50,
		boxHeight: 200,
		boxDepth: 40,
		top: -100,
        left: -50,
	},
	series: [
		{
			type: "scatter3D",
			name: "M-L1",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: STANDARD_M['L1'],
			symbolSize: 8, //点的大小
			itemStyle: {
				color: colors[0],
			},
		},
		{
			type: "scatter3D",
			name: "M-L2",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: STANDARD_M['L2'],
			symbolSize: 8, //点的大小
			itemStyle: {
				color: colors[1],
			},
		},
		{
			type: "scatter3D",
			name: "M-L3",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: STANDARD_M['L3'],
			symbolSize: 8, //点的大小
			itemStyle: {
				color: colors[2],
			},
		},
		{
			type: "scatter3D",
			name: "M-L4",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: STANDARD_M['L4'],
			symbolSize: 8, //点的大小
			itemStyle: {
				color: colors[3],
			},
		},
		{
			type: "scatter3D",
			name: "M-L5",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: STANDARD_M['L5'],
			symbolSize: 8, //点的大小
			itemStyle: {
				color: colors[4],
			},
		},
		{
			type: "scatter3D",
			name: "M-S1",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: STANDARD_M['S1'],
			symbolSize: 8, //点的大小
			itemStyle: {
				color: colors[6],
			},
		},
		{
			type: "scatter3D",
			name: "M-S2",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: STANDARD_M['S2'],
			symbolSize: 8, //点的大小
			itemStyle: {
				color: colors[7],
			},
		},
		{
			type: "scatter3D",
            name: "Electrode",
			dimensions: [
			"x",
			"y",
			"z",
			], //悬浮到点时弹出的显示框信息
			data: msV10_M_one,
			symbolSize: [12, 32], //点的大小
			symbol: 'rect',
			itemStyle: {
				color: colors[5],
			},
			emphasis: {
				itemStyle: {
					color: "#ccc", //高亮
				},
			},
		}
	],
	backgroundColor: "#fff",
}

// L类样本按节段
var nerverootsOpinionLNew = {
	title: {
		text: 'L类样本（N=5）'
	},
	tooltip: {
	},
	xAxis3D: {
		name: "x", //x轴显示为x
		type: "category",
		data: ['DREZ', 'electrode'],
		axisLine: {
		//x轴坐标轴，false为隐藏，true为显示
		show: true,
		},
		axisLabel: {
		show: true,
		},
		itemStyle: {
		borderColor: "#fff",
		backgroundColor: "#fff",
		},
	},
	yAxis3D: {
		name: "Y", //y轴显示为y
		type: "value",
		splitNumber: 5,
		axisTick: {
		show: false, //显示每个值对应的刻度
		},
	},
	zAxis3D: {
		name: "Z", //z轴显示为z
		type: "value",
		axisTick: {
		show: false, //显示每个值对应的刻度
		},
	},
	grid3D: {
		axisLine: {
		lineStyle: {
			//坐标轴样式
			color: "#070707", //轴线颜色
			opacity: 0.8, //(单个刻度不会受影响)
			width: 1, //线条宽度
		},
		},
		axisPointer: {
		lineStyle: {
			color: "#666", //坐标轴指示线
		},
		show: true, //展示坐标轴指示线
		},
		viewControl: {
		distance: 320, //与视角的距离，值越大，图离视角越远，图越小
		alpha: 7, //绕x轴旋转的角度（上下旋转），增大，视角顺时针增大（向上）
		beta: 20, //绕y轴旋转的角度（左右旋转），增大，视角逆时针增大（向右）
		center: [0, 0, 0], //第一个参数：增大，视角沿x轴正方向水平右移动（图向左）；第二个参数：增大，视角沿y轴正方向垂直向上移动（图向下）；第三个参数：增大，视角向z轴正方向移动（图变小）
		},
		boxWidth: 50,
		boxHeight: 200,
		boxDepth: 40,
		top: -100,
        left: -50,
	},
	series: [
		{
			type: "scatter3D",
			name: "L-L1",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: STANDARD_M['L1'],
			symbolSize: 8, //点的大小
			itemStyle: {
				color: colors[0],
			},
		},
		{
			type: "scatter3D",
			name: "M-L2",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: STANDARD_M['L2'],
			symbolSize: 8, //点的大小
			itemStyle: {
				color: colors[1],
			},
		},
		{
			type: "scatter3D",
			name: "M-L3",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: STANDARD_M['L3'],
			symbolSize: 8, //点的大小
			itemStyle: {
				color: colors[2],
			},
		},
		{
			type: "scatter3D",
			name: "M-L4",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: STANDARD_M['L4'],
			symbolSize: 8, //点的大小
			itemStyle: {
				color: colors[3],
			},
		},
		{
			type: "scatter3D",
			name: "M-L5",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: STANDARD_M['L5'],
			symbolSize: 8, //点的大小
			itemStyle: {
				color: colors[4],
			},
		},
		{
			type: "scatter3D",
			name: "M-S1",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: STANDARD_M['S1'],
			symbolSize: 8, //点的大小
			itemStyle: {
				color: colors[6],
			},
		},
		{
			type: "scatter3D",
			name: "M-S2",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: STANDARD_M['S2'],
			symbolSize: 8, //点的大小
			itemStyle: {
				color: colors[7],
			},
		},
		{
			type: "scatter3D",
            name: "Electrode",
			dimensions: [
			"x",
			"y",
			"z",
			], //悬浮到点时弹出的显示框信息
			data: msV10_M_one,
			symbolSize: [12, 32], //点的大小
			symbol: 'rect',
			itemStyle: {
				color: colors[5],
			},
			emphasis: {
				itemStyle: {
					color: "#ccc", //高亮
				},
			},
		}
	],
	backgroundColor: "#fff",
}

// S类样本按节段
var nerverootsOpinionSNew = {
	title: {
		text: 'M类样本（N=5）'
	},
	tooltip: {
	},
	xAxis3D: {
		name: "x", //x轴显示为x
		type: "category",
		data: ['DREZ', 'electrode'],
		axisLine: {
		//x轴坐标轴，false为隐藏，true为显示
		show: true,
		},
		axisLabel: {
		show: true,
		},
		itemStyle: {
		borderColor: "#fff",
		backgroundColor: "#fff",
		},
	},
	yAxis3D: {
		name: "Y", //y轴显示为y
		type: "value",
		splitNumber: 5,
		axisTick: {
		show: false, //显示每个值对应的刻度
		},
	},
	zAxis3D: {
		name: "Z", //z轴显示为z
		type: "value",
		axisTick: {
		show: false, //显示每个值对应的刻度
		},
	},
	grid3D: {
		axisLine: {
		lineStyle: {
			//坐标轴样式
			color: "#070707", //轴线颜色
			opacity: 0.8, //(单个刻度不会受影响)
			width: 1, //线条宽度
		},
		},
		axisPointer: {
		lineStyle: {
			color: "#666", //坐标轴指示线
		},
		show: true, //展示坐标轴指示线
		},
		viewControl: {
		distance: 320, //与视角的距离，值越大，图离视角越远，图越小
		alpha: 7, //绕x轴旋转的角度（上下旋转），增大，视角顺时针增大（向上）
		beta: 20, //绕y轴旋转的角度（左右旋转），增大，视角逆时针增大（向右）
		center: [0, 0, 0], //第一个参数：增大，视角沿x轴正方向水平右移动（图向左）；第二个参数：增大，视角沿y轴正方向垂直向上移动（图向下）；第三个参数：增大，视角向z轴正方向移动（图变小）
		},
		boxWidth: 50,
		boxHeight: 200,
		boxDepth: 40,
		top: -100,
        left: -50,
	},
	series: [
		{
			type: "scatter3D",
			name: "M-L1",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: STANDARD_M['L1'],
			symbolSize: 8, //点的大小
			itemStyle: {
				color: colors[0],
			},
		},
		{
			type: "scatter3D",
			name: "M-L2",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: STANDARD_M['L2'],
			symbolSize: 8, //点的大小
			itemStyle: {
				color: colors[1],
			},
		},
		{
			type: "scatter3D",
			name: "M-L3",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: STANDARD_M['L3'],
			symbolSize: 8, //点的大小
			itemStyle: {
				color: colors[2],
			},
		},
		{
			type: "scatter3D",
			name: "M-L4",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: STANDARD_M['L4'],
			symbolSize: 8, //点的大小
			itemStyle: {
				color: colors[3],
			},
		},
		{
			type: "scatter3D",
			name: "M-L5",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: STANDARD_M['L5'],
			symbolSize: 8, //点的大小
			itemStyle: {
				color: colors[4],
			},
		},
		{
			type: "scatter3D",
			name: "M-S1",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: STANDARD_M['S1'],
			symbolSize: 8, //点的大小
			itemStyle: {
				color: colors[6],
			},
		},
		{
			type: "scatter3D",
			name: "M-S2",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: STANDARD_M['S2'],
			symbolSize: 8, //点的大小
			itemStyle: {
				color: colors[7],
			},
		},
		{
			type: "scatter3D",
            name: "Electrode",
			dimensions: [
			"x",
			"y",
			"z",
			], //悬浮到点时弹出的显示框信息
			data: msV10_M_one,
			symbolSize: [12, 32], //点的大小
			symbol: 'rect',
			itemStyle: {
				color: colors[5],
			},
			emphasis: {
				itemStyle: {
					color: "#ccc", //高亮
				},
			},
		}
	],
	backgroundColor: "#fff",
}


// 单独一个样本
var nerverootsOpinionOne = {
	title: {
		text: '单个样本'
	},
	tooltip: {
	},
	xAxis3D: {
		name: "x", //x轴显示为x
		type: "category",
		data: ['bsi-002', 'Medtronic'],
		axisLine: {
		//x轴坐标轴，false为隐藏，true为显示
		show: true,
		},
		axisLabel: {
		show: true,
		},
		itemStyle: {
		borderColor: "#fff",
		backgroundColor: "#fff",
		},
	},
	yAxis3D: {
		name: "y", //y轴显示为y
		type: "value",
		splitNumber: 5,
		axisTick: {
		show: false, //显示每个值对应的刻度
		},
	},
	zAxis3D: {
		name: "z", //z轴显示为z
		type: "value",
		axisTick: {
		show: false, //显示每个值对应的刻度
		},
	},
	grid3D: {
		axisLine: {
		lineStyle: {
			//坐标轴样式
			color: "#070707", //轴线颜色
			opacity: 0.8, //(单个刻度不会受影响)
			width: 1, //线条宽度
		},
		},
		axisPointer: {
		lineStyle: {
			color: "#666", //坐标轴指示线
		},
		show: true, //展示坐标轴指示线
		},
		viewControl: {
		distance: 320, //与视角的距离，值越大，图离视角越远，图越小
		alpha: 7, //绕x轴旋转的角度（上下旋转），增大，视角顺时针增大（向上）
		beta: 20, //绕y轴旋转的角度（左右旋转），增大，视角逆时针增大（向右）
		center: [0, 0, 0], //第一个参数：增大，视角沿x轴正方向水平右移动（图向左）；第二个参数：增大，视角沿y轴正方向垂直向上移动（图向下）；第三个参数：增大，视角向z轴正方向移动（图变小）
		},
		boxWidth: 50,
		boxHeight: 200,
		boxDepth: 40,
		top: -100,
        left: -50,
	},
	series: [
		{
			type: "line3D",
			name: "bsi-002-L1-L",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI002_TRANSFORMED['L1_L'],
			lineStyle: {
				width: 3,
				color: colors[0],
			},
		},
		{
			type: "line3D",
			name: "bsi-002-L1-R",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI002_TRANSFORMED['L1_R'],
			lineStyle: {
				width: 3,
				color: colors[0],
			},
		},
		{
			type: "line3D",
			name: "bsi-002-L2-L",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI002_TRANSFORMED['L2_L'],
			lineStyle: {
				width: 3,
				color: colors[0],
			},
		},
		{
			type: "line3D",
			name: "bsi-002-L2-R",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI002_TRANSFORMED['L2_R'],
			lineStyle: {
				width: 3,
				color: colors[0],
			},
		},
		{
			type: "line3D",
			name: "bsi-002-L3-L",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI002_TRANSFORMED['L3_L'],
			lineStyle: {
				width: 3,
				color: colors[0],
			},
		},
		{
			type: "line3D",
			name: "bsi-002-L3-R",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI002_TRANSFORMED['L3_R'],
			lineStyle: {
				width: 3,
				color: colors[0],
			},
		},
		{
			type: "line3D",
			name: "bsi-002-L4-L",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI002_TRANSFORMED['L4_L'],
			lineStyle: {
				width: 3,
				color: colors[0],
			},
		},
		{
			type: "line3D",
			name: "bsi-002-L4-R",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI002_TRANSFORMED['L4_R'],
			lineStyle: {
				width: 3,
				color: colors[0],
			},
		},
		{
			type: "line3D",
			name: "bsi-002-L5-L",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI002_TRANSFORMED['L5_L'],
			lineStyle: {
				width: 3,
				color: colors[0],
			},
		},
		{
			type: "line3D",
			name: "bsi-002-L5-R",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI002_TRANSFORMED['L5_R'],
			lineStyle: {
				width: 3,
				color: colors[0],
			},
		},
		{
			type: "line3D",
			name: "bsi-002-S1-L",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI002_TRANSFORMED['S1_L'],
			lineStyle: {
				width: 3,
				color: colors[0],
			},
		},
		{
			type: "line3D",
			name: "bsi-002-S1-R",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI002_TRANSFORMED['S1_R'],
			lineStyle: {
				width: 3,
				color: colors[0],
			},
		},
		{
			type: "line3D",
			name: "bsi-002-S2-L",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI002_TRANSFORMED['S2_L'],
			lineStyle: {
				width: 3,
				color: colors[0],
			},
		},
		{
			type: "line3D",
			name: "bsi-002-S2-R",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI002_TRANSFORMED['S2_R'],
			lineStyle: {
				width: 3,
				color: colors[0],
			},
		},
		{
			type: "scatter3D",
            name: "Medtronic-565",
			dimensions: [
			"x",
			"y",
			"z",
			], //悬浮到点时弹出的显示框信息
			data: medtronic565_one,
			symbolSize: [6, 16], //点的大小
			symbol: 'rect',
			itemStyle: {
			color: colors[5],
			},
			emphasis: {
				itemStyle: {
					color: "#ccc", //高亮
				},
			},
		}
	],
	backgroundColor: "#fff",
}

// 影像定位L类
var nerverootsOpinionL = {
	title: {
		text: '脊髓长度L类'
	},
	tooltip: {
	},
	xAxis3D: {
		name: "x", //x轴显示为x
		type: "category",
		data: ['bsi-002', 'bsi-008', 'bsi-009', 'bsi-010', 'bsi-012', 'Medtronic'],
		axisLine: {
		//x轴坐标轴，false为隐藏，true为显示
		show: true,
		},
		axisLabel: {
		show: true,
		},
		itemStyle: {
		borderColor: "#fff",
		backgroundColor: "#fff",
		},
	},
	yAxis3D: {
		name: "y", //y轴显示为y
		type: "value",
		splitNumber: 5,
		axisTick: {
		show: false, //显示每个值对应的刻度
		},
	},
	zAxis3D: {
		name: "z", //z轴显示为z
		type: "value",
		axisTick: {
		show: false, //显示每个值对应的刻度
		},
	},
	grid3D: {
		axisLine: {
		lineStyle: {
			//坐标轴样式
			color: "#070707", //轴线颜色
			opacity: 0.8, //(单个刻度不会受影响)
			width: 1, //线条宽度
		},
		},
		axisPointer: {
		lineStyle: {
			color: "#666", //坐标轴指示线
		},
		show: true, //展示坐标轴指示线
		},
		viewControl: {
		distance: 320, //与视角的距离，值越大，图离视角越远，图越小
		alpha: 7, //绕x轴旋转的角度（上下旋转），增大，视角顺时针增大（向上）
		beta: 20, //绕y轴旋转的角度（左右旋转），增大，视角逆时针增大（向右）
		center: [0, 0, 0], //第一个参数：增大，视角沿x轴正方向水平右移动（图向左）；第二个参数：增大，视角沿y轴正方向垂直向上移动（图向下）；第三个参数：增大，视角向z轴正方向移动（图变小）
		},
		boxWidth: 50,
		boxHeight: 200,
		boxDepth: 40,
		top: -100,
        left: -50,
	},
	series: [
		{
			type: "line3D",
			name: "bsi-002-L1-L",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI002_TRANSFORMED['L1_L'],
			lineStyle: {
				width: 3,
				color: colors[0],
			},
		},
		{
			type: "line3D",
			name: "bsi-002-L1-R",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI002_TRANSFORMED['L1_R'],
			lineStyle: {
				width: 3,
				color: colors[0],
			},
		},
		{
			type: "line3D",
			name: "bsi-002-L2-L",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI002_TRANSFORMED['L2_L'],
			lineStyle: {
				width: 3,
				color: colors[0],
			},
		},
		{
			type: "line3D",
			name: "bsi-002-L2-R",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI002_TRANSFORMED['L2_R'],
			lineStyle: {
				width: 3,
				color: colors[0],
			},
		},
		{
			type: "line3D",
			name: "bsi-002-L3-L",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI002_TRANSFORMED['L3_L'],
			lineStyle: {
				width: 3,
				color: colors[0],
			},
		},
		{
			type: "line3D",
			name: "bsi-002-L3-R",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI002_TRANSFORMED['L3_R'],
			lineStyle: {
				width: 3,
				color: colors[0],
			},
		},
		{
			type: "line3D",
			name: "bsi-002-L4-L",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI002_TRANSFORMED['L4_L'],
			lineStyle: {
				width: 3,
				color: colors[0],
			},
		},
		{
			type: "line3D",
			name: "bsi-002-L4-R",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI002_TRANSFORMED['L4_R'],
			lineStyle: {
				width: 3,
				color: colors[0],
			},
		},
		{
			type: "line3D",
			name: "bsi-002-L5-L",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI002_TRANSFORMED['L5_L'],
			lineStyle: {
				width: 3,
				color: colors[0],
			},
		},
		{
			type: "line3D",
			name: "bsi-002-L5-R",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI002_TRANSFORMED['L5_R'],
			lineStyle: {
				width: 3,
				color: colors[0],
			},
		},
		{
			type: "line3D",
			name: "bsi-002-S1-L",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI002_TRANSFORMED['S1_L'],
			lineStyle: {
				width: 3,
				color: colors[0],
			},
		},
		{
			type: "line3D",
			name: "bsi-002-S1-R",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI002_TRANSFORMED['S1_R'],
			lineStyle: {
				width: 3,
				color: colors[0],
			},
		},
		{
			type: "line3D",
			name: "bsi-002-S2-L",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI002_TRANSFORMED['S2_L'],
			lineStyle: {
				width: 3,
				color: colors[0],
			},
		},
		{
			type: "line3D",
			name: "bsi-002-S2-R",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI002_TRANSFORMED['S2_R'],
			lineStyle: {
				width: 3,
				color: colors[0],
			},
		},
		{
			type: "line3D",
			name: "bsi-008-L1-L",
			smooth: true,
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI008_TRANSFORMED['L1_L'],
			lineStyle: {
				width: 3,
				color: colors[1],
			},
		},
		{
			type: "line3D",
			name: "bsi-008-L1-R",
			smooth: true,
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI008_TRANSFORMED['L1_R'],
			lineStyle: {
				width: 3,
				color: colors[1],
			},
		},
		{
			type: "line3D",
			name: "bsi-008-L2-L",
			smooth: true,
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI008_TRANSFORMED['L2_L'],
			lineStyle: {
				width: 3,
				color: colors[1],
			},
		},
		{
			type: "line3D",
			name: "bsi-008-L2-R",
			smooth: true,
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI008_TRANSFORMED['L2_R'],
			lineStyle: {
				width: 3,
				color: colors[1],
			},
		},
		{
			type: "line3D",
			name: "bsi-008-L3-L",
			smooth: true,
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI008_TRANSFORMED['L3_L'],
			lineStyle: {
				width: 3,
				color: colors[1],
			},
		},
		{
			type: "line3D",
			name: "bsi-008-L3-R",
			smooth: true,
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI008_TRANSFORMED['L3_R'],
			lineStyle: {
				width: 3,
				color: colors[1],
			},
		},
		{
			type: "line3D",
			name: "bsi-008-L4-L",
			smooth: true,
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI008_TRANSFORMED['L4_L'],
			lineStyle: {
				width: 3,
				color: colors[1],
			},
		},
		{
			type: "line3D",
			name: "bsi-008-L4-R",
			smooth: true,
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI008_TRANSFORMED['L4_R'],
			lineStyle: {
				width: 3,
				color: colors[1],
			},
		},
		{
			type: "line3D",
			name: "bsi-008-L5-L",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI008_TRANSFORMED['L5_L'],
			lineStyle: {
				width: 3,
				color: colors[1],
			},
		},
		{
			type: "line3D",
			name: "bsi-008-L5-R",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI008_TRANSFORMED['L5_R'],
			lineStyle: {
				width: 3,
				color: colors[1],
			},
		},
		{
			type: "line3D",
			name: "bsi-008-S1-L",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI008_TRANSFORMED['S1_L'],
			lineStyle: {
				width: 3,
				color: colors[1],
			},
		},
		{
			type: "line3D",
			name: "bsi-008-S1-R",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI008_TRANSFORMED['S1_R'],
			lineStyle: {
				width: 3,
				color: colors[1],
			},
		},
		{
			type: "line3D",
			name: "bsi-008-S2-L",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI008_TRANSFORMED['S2_L'],
			lineStyle: {
				width: 3,
				color: colors[1],
			},
		},
		{
			type: "line3D",
			name: "bsi-008-S2-R",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI008_TRANSFORMED['S2_R'],
			lineStyle: {
				width: 3,
				color: colors[1],
			},
		},
        {
			type: "line3D",
			name: "bsi-009-L1-L",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI009_TRANSFORMED['L1_L'],
			lineStyle: {
				width: 3,
				color: colors[2],
			},
		},
		{
			type: "line3D",
			name: "bsi-009-L1-R",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI009_TRANSFORMED['L1_R'],
			lineStyle: {
				width: 3,
				color: colors[2],
			},
		},
		{
			type: "line3D",
			name: "bsi-009-L2-L",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI009_TRANSFORMED['L2_L'],
			lineStyle: {
				width: 3,
				color: colors[2],
			},
		},
		{
			type: "line3D",
			name: "bsi-009-L2-R",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI009_TRANSFORMED['L2_R'],
			lineStyle: {
				width: 3,
				color: colors[2],
			},
		},
		{
			type: "line3D",
			name: "bsi-009-L3-L",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI009_TRANSFORMED['L3_L'],
			lineStyle: {
				width: 3,
				color: colors[2],
			},
		},
		{
			type: "line3D",
			name: "bsi-009-L3-R",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI009_TRANSFORMED['L3_R'],
			lineStyle: {
				width: 3,
				color: colors[2],
			},
		},
		{
			type: "line3D",
			name: "bsi-009-L4-L",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI009_TRANSFORMED['L4_L'],
			lineStyle: {
				width: 3,
				color: colors[2],
			},
		},
		{
			type: "line3D",
			name: "bsi-009-L4-R",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI009_TRANSFORMED['L4_R'],
			lineStyle: {
				width: 3,
				color: colors[2],
			},
		},
		{
			type: "line3D",
			name: "bsi-009-L5-L",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI009_TRANSFORMED['L5_L'],
			lineStyle: {
				width: 3,
				color: colors[2],
			},
		},
		{
			type: "line3D",
			name: "bsi-009-L5-R",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI009_TRANSFORMED['L5_R'],
			lineStyle: {
				width: 3,
				color: colors[2],
			},
		},
		{
			type: "line3D",
			name: "bsi-009-S1-L",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI009_TRANSFORMED['S1_L'],
			lineStyle: {
				width: 3,
				color: colors[2],
			},
		},
		{
			type: "line3D",
			name: "bsi-009-S1-R",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI009_TRANSFORMED['S1_R'],
			lineStyle: {
				width: 3,
				color: colors[2],
			},
		},
		{
			type: "line3D",
			name: "bsi-009-S2-L",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI009_TRANSFORMED['S2_L'],
			lineStyle: {
				width: 3,
				color: colors[2],
			},
		},
		{
			type: "line3D",
			name: "bsi-009-S2-R",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI009_TRANSFORMED['S2_R'],
			lineStyle: {
				width: 3,
				color: colors[2],
			},
		},
        {
			type: "line3D",
			name: "bsi-010-L1-L",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI010_TRANSFORMED['L1_L'],
			lineStyle: {
				width: 3,
				color: colors[3],
			},
		},
		{
			type: "line3D",
			name: "bsi-010-L1-R",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI010_TRANSFORMED['L1_R'],
			lineStyle: {
				width: 3,
				color: colors[3],
			},
		},
		{
			type: "line3D",
			name: "bsi-010-L2-L",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI010_TRANSFORMED['L2_L'],
			lineStyle: {
				width: 3,
				color: colors[3],
			},
		},
		{
			type: "line3D",
			name: "bsi-010-L2-R",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI010_TRANSFORMED['L2_R'],
			lineStyle: {
				width: 3,
				color: colors[3],
			},
		},
		{
			type: "line3D",
			name: "bsi-010-L3-L",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI010_TRANSFORMED['L3_L'],
			lineStyle: {
				width: 3,
				color: colors[3],
			},
		},
		{
			type: "line3D",
			name: "bsi-010-L3-R",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI010_TRANSFORMED['L3_R'],
			lineStyle: {
				width: 3,
				color: colors[3],
			},
		},
		{
			type: "line3D",
			name: "bsi-010-L4-L",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI010_TRANSFORMED['L4_L'],
			lineStyle: {
				width: 3,
				color: colors[3],
			},
		},
		{
			type: "line3D",
			name: "bsi-010-L4-R",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI010_TRANSFORMED['L4_R'],
			lineStyle: {
				width: 3,
				color: colors[3],
			},
		},
		{
			type: "line3D",
			name: "bsi-010-L5-L",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI010_TRANSFORMED['L5_L'],
			lineStyle: {
				width: 3,
				color: colors[3],
			},
		},
		{
			type: "line3D",
			name: "bsi-010-L5-R",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI010_TRANSFORMED['L5_R'],
			lineStyle: {
				width: 3,
				color: colors[3],
			},
		},
		{
			type: "line3D",
			name: "bsi-010-S1-L",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI010_TRANSFORMED['S1_L'],
			lineStyle: {
				width: 3,
				color: colors[3],
			},
		},
		{
			type: "line3D",
			name: "bsi-010-S1-R",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI010_TRANSFORMED['S1_R'],
			lineStyle: {
				width: 3,
				color: colors[3],
			},
		},
		{
			type: "line3D",
			name: "bsi-010-S2-L",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI010_TRANSFORMED['S2_L'],
			lineStyle: {
				width: 3,
				color: colors[3],
			},
		},
		{
			type: "line3D",
			name: "bsi-010-S2-R",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI010_TRANSFORMED['S2_R'],
			lineStyle: {
				width: 3,
				color: colors[3],
			},
		},
        {
			type: "line3D",
			name: "bsi-012-L1-L",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI012_TRANSFORMED['L1_L'],
			lineStyle: {
				width: 3,
				color: colors[4],
			},
		},
		{
			type: "line3D",
			name: "bsi-012-L1-R",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI012_TRANSFORMED['L1_R'],
			lineStyle: {
				width: 3,
				color: colors[4],
			},
		},
		{
			type: "line3D",
			name: "bsi-012-L2-L",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI012_TRANSFORMED['L2_L'],
			lineStyle: {
				width: 3,
				color: colors[4],
			},
		},
		{
			type: "line3D",
			name: "bsi-012-L2-R",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI012_TRANSFORMED['L2_R'],
			lineStyle: {
				width: 3,
				color: colors[4],
			},
		},
		{
			type: "line3D",
			name: "bsi-012-L3-L",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI012_TRANSFORMED['L3_L'],
			lineStyle: {
				width: 3,
				color: colors[4],
			},
		},
		{
			type: "line3D",
			name: "bsi-012-L3-R",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI012_TRANSFORMED['L3_R'],
			lineStyle: {
				width: 3,
				color: colors[4],
			},
		},
		{
			type: "line3D",
			name: "bsi-012-L4-L",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI012_TRANSFORMED['L4_L'],
			lineStyle: {
				width: 3,
				color: colors[4],
			},
		},
		{
			type: "line3D",
			name: "bsi-012-L4-R",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI012_TRANSFORMED['L4_R'],
			lineStyle: {
				width: 3,
				color: colors[4],
			},
		},
		{
			type: "line3D",
			name: "bsi-012-L5-L",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI012_TRANSFORMED['L5_L'],
			lineStyle: {
				width: 3,
				color: colors[4],
			},
		},
		{
			type: "line3D",
			name: "bsi-012-L5-R",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI012_TRANSFORMED['L5_R'],
			lineStyle: {
				width: 3,
				color: colors[4],
			},
		},
		{
			type: "line3D",
			name: "bsi-012-S1-L",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI012_TRANSFORMED['S1_L'],
			lineStyle: {
				width: 3,
				color: colors[4],
			},
		},
		{
			type: "line3D",
			name: "bsi-012-S1-R",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI012_TRANSFORMED['S1_R'],
			lineStyle: {
				width: 3,
				color: colors[4],
			},
		},
		{
			type: "line3D",
			name: "bsi-012-S2-L",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI012_TRANSFORMED['S2_L'],
			lineStyle: {
				width: 3,
				color: colors[4],
			},
		},
		{
			type: "line3D",
			name: "bsi-012-S2-R",
			dimensions: ["x", "y", "z",], //悬浮到点时弹出的显示框信息
			data: BSI012_TRANSFORMED['S2_R'],
			lineStyle: {
				width: 3,
				color: colors[4],
			},
		},
		{
			type: "scatter3D",
            name: "Medtronic-565",
			dimensions: [
			"x",
			"y",
			"z",
			], //悬浮到点时弹出的显示框信息
			data: medtronic565,
			symbolSize: [6, 16], //点的大小
			symbol: 'rect',
			itemStyle: {
			color: colors[5],
			},
			emphasis: {
				itemStyle: {
					color: "#ccc", //高亮
				},
			},
		}
	],
	backgroundColor: "#fff",
}

// 影像定位M类
var nerverootsOpinionM = {
	title: {
		text: '脊髓长度M类'
	},
	tooltip: {
	},
	xAxis3D: {
		name: "x", //x轴显示为x
		type: "category",
		data: ['bsi-005', 'bsi-011', 'bsi-013', 'sub-03', 'sub-hszb', 'Medtronic'],
		axisLine: {
		//x轴坐标轴，false为隐藏，true为显示
		show: true,
		},
		axisLabel: {
		show: true,
		},
		itemStyle: {
		borderColor: "#fff",
		backgroundColor: "#fff",
		},
	},
	yAxis3D: {
		name: "y", //y轴显示为y
		type: "value",
		splitNumber: 5,
		axisTick: {
		show: false, //显示每个值对应的刻度
		},
	},
	zAxis3D: {
		name: "z", //z轴显示为z
		type: "value",
		axisTick: {
		show: false, //显示每个值对应的刻度
		},
	},
	grid3D: {
		axisLine: {
		lineStyle: {
			//坐标轴样式
			color: "#070707", //轴线颜色
			opacity: 0.8, //(单个刻度不会受影响)
			width: 1, //线条宽度
		},
		},
		axisPointer: {
		lineStyle: {
			color: "#666", //坐标轴指示线
		},
		show: true, //展示坐标轴指示线
		},
		viewControl: {
		distance: 320, //与视角的距离，值越大，图离视角越远，图越小
		alpha: 7, //绕x轴旋转的角度（上下旋转），增大，视角顺时针增大（向上）
		beta: 20, //绕y轴旋转的角度（左右旋转），增大，视角逆时针增大（向右）
		center: [0, 0, 0], //第一个参数：增大，视角沿x轴正方向水平右移动（图向左）；第二个参数：增大，视角沿y轴正方向垂直向上移动（图向下）；第三个参数：增大，视角向z轴正方向移动（图变小）
		},
		boxWidth: 50,
		boxHeight: 200,
		boxDepth: 40,
		top: -100,
        left: -50,
	},
	series: [
		{
			type: "line3D",
			name: "bsi-005-L",
			dimensions: [
			"x",
			"y",
			"z",
			], //悬浮到点时弹出的显示框信息
			data: [
                [0,-3.5425,36.61],
                [0,-3.4755,22.573],
                [0,-3.9995,10.569],
                [0,-3.767,4.521],
                [0,-3.684,-1.493],
                [0,-3.043,-9.592],
                [0,-2.3005,-13.819]
            ],
			symbolSize: 12, //点的大小
			lineStyle: {
				width: 3,
				color: colors[0],
			},
			emphasis: {
				itemStyle: {
					color: "#ccc", //高亮
				},
			},
		},
		{
			type: "line3D",
			name: "bsi-005-R",
			dimensions: [
			"x",
			"y",
			"z",
			], //悬浮到点时弹出的显示框信息
			data: [
                [0, 3.5425, 36.61],
                [0, 3.4755, 22.573],
                [0,3.9995,10.569],
                [0,3.767,4.521],
                [0,3.684,-1.493],
                [0,3.043,-9.592],
                [0,2.3005,-13.819]
            ],
			symbolSize: 12, //点的大小
			lineStyle: {
				width: 3,
				color: colors[0],
			},
			emphasis: {
				itemStyle: {
					color: "#ccc", //高亮
				},
			},
		},
        {
			type: "line3D",
			name: "bsi-011-L",
			dimensions: [
			"x",
			"y",
			"z",
			], //悬浮到点时弹出的显示框信息
			data: [
                [1, -3.12, 36.61],
                [1, -2.2105, 28.423],
                [1, -3.504, 14.35],
                [1, -3.431, 4.334],
                [1, -2.9155, -1.761],
                [1, -2.459, -7.782],
                [1, -1.853, -13.957],
            ],
			symbolSize: 12, //点的大小
			lineStyle: {
				width: 3,
				color: colors[1],
			},
			emphasis: {
				itemStyle: {
					color: "#ccc", //高亮
				},
			},
		},
		{
			type: "line3D",
			name: "bsi-011-R",
			dimensions: [
			"x",
			"y",
			"z",
			], //悬浮到点时弹出的显示框信息
			data: [
                [1, 3.12, 36.61],
                [1, 2.2105, 28.423],
                [1, 3.504, 14.35],
                [1, 3.431, 4.334],
                [1, 2.9155, -1.761],
                [1, 2.459, -7.782],
                [1, 1.853, -13.957],
            ],
			symbolSize: 12, //点的大小
			lineStyle: {
				width: 3,
				color: colors[1],
			},
			emphasis: {
				itemStyle: {
					color: "#ccc", //高亮
				},
			},
		},
        {
			type: "line3D",
			name: "bsi-013-L",
			dimensions: [
			"x",
			"y",
			"z",
			], //悬浮到点时弹出的显示框信息
			data: [
                [2, -3.3185, 36.61],
                [2, -3.402, 24.577],
                [2, -2.957, 16.575],
                [2, -2.74, 2.491],
                [2, -2.7065, -5.544],
                [2, -2.069, -11.597],
                [2, -0.915, -17.745],
            ],
			symbolSize: 12, //点的大小
			lineStyle: {
				width: 3,
				color: colors[2],
			},
			emphasis: {
				itemStyle: {
					color: "#ccc", //高亮
				},
			},
		},
		{
			type: "line3D",
			name: "bsi-013-R",
			dimensions: [
			"x",
			"y",
			"z",
			], //悬浮到点时弹出的显示框信息
			data: [
                [2, 3.3185, 36.61],
                [2, 3.402, 24.577],
                [2, 2.957, 16.575],
                [2, 2.74, 2.491],
                [2, 2.7065, -5.544],
                [2, 2.069, -11.597],
                [2, 0.915, -17.745],
            ],
			symbolSize: 12, //点的大小
			lineStyle: {
				width: 3,
				color: colors[2],
			},
			emphasis: {
				itemStyle: {
					color: "#ccc", //高亮
				},
			},
		},
        {
			type: "scatter3D",
			name: "sub-03-L",
			dimensions: [
			"x",
			"y",
			"z",
			], //悬浮到点时弹出的显示框信息
			data: [
                [3, -3.1415, 36.61],
                [3, -3.445, 18.597],
                [3, -3.564, 6.596],
                [3, -3.674, -1.43],
                [3, -3.34, -5.452],
                [3, -3.0915, -15.471],
                [3, -2.2385, -19.515],
            ],
			symbolSize: 12, //点的大小
			itemStyle: {
				color: colors[3],
			},
			// lineStyle: {
			// 	width: 3,
			// 	color: colors[3],
			// },
			emphasis: {
				itemStyle: {
					color: "#ccc", //高亮
				},
			},
		},
		{
			type: "scatter3D",
			name: "sub-03-R",
			dimensions: [
			"x",
			"y",
			"z",
			], //悬浮到点时弹出的显示框信息
			data: [
                [3, 3.1415, 36.61],
                [3, 3.445, 18.597],
                [3, 3.564, 6.596],
                [3, 3.674, -1.43],
                [3, 3.34, -5.452],
                [3, 3.0915, -15.471],
                [3, 2.2385, -19.515],
            ],
			symbolSize: 12, //点的大小
			itemStyle: {
				color: colors[3],
			},
			// lineStyle: {
			// 	width: 3,
			// 	color: colors[3],
			// },
			emphasis: {
				itemStyle: {
					color: "#ccc", //高亮
				},
			},
		},
        {
			type: "scatter3D",
			name: "sub-hszb-L",
			dimensions: [
			"x",
			"y",
			"z",
			], //悬浮到点时弹出的显示框信息
			data: [
                [4, -2.9955, 36.61],
                [4, -2.9205, 29.528],
                [4, -3.3855, 17.478],
                [4, -3.272, 8.422],
                [4, -2.9455, 2.323],
                [4, -3.051, -6.819],
                [4, -2.8525, -12.823],
            ],
			symbolSize: 12, //点的大小
			itemStyle: {
				color: colors[4],
			},
			// lineStyle: {
			// 	width: 3,
			// 	color: colors[4],
			// },
			emphasis: {
				itemStyle: {
					color: "#ccc", //高亮
				},
			},
		},
		{
			type: "scatter3D",
			name: "sub-hszb-R",
			dimensions: [
			"x",
			"y",
			"z",
			], //悬浮到点时弹出的显示框信息
			data: [
                [4, 2.9955, 36.61],
                [4, 2.9205, 29.528],
                [4, 3.3855, 17.478],
                [4, 3.272, 8.422],
                [4, 2.9455, 2.323],
                [4, 3.051, -6.819],
                [4, 2.8525, -12.823],
            ],
			symbolSize: 12, //点的大小
			itemStyle: {
				color: colors[4],
			},
			// lineStyle: {
			// 	width: 3,
			// 	color: colors[4],
			// },
			emphasis: {
				itemStyle: {
					color: "#ccc", //高亮
				},
			},
		},
		{
			type: "scatter3D",
            name: "Medtronic-565",
			dimensions: [
			"x",
			"y",
			"z",
			], //悬浮到点时弹出的显示框信息
			data: [
                [
                    5,
                    -2.5,
                    36.61
                ],
                [
                    5,
                    -2.5,
                    27.11
                ],
                [
                    5,
                    -2.5,
                    17.61
                ],
                [
                    5,
                    -2.5,
                    8.11
                ],
                [
                    5,
                    -2.5,
                    -1.39
                ],
                [
                    5,
                    0,
                    41.36
                ],
                [
                    5,
                    0,
                    31.86
                ],
                [
                    5,
                    0,
                    22.36
                ],
                [
                    5,
                    0,
                    12.86
                ],
                [
                    5,
                    0,
                    3.36
                ],
                [
                    5,
                    0,
                    -6.14
                ],
                [
                    5,
                    2.5,
                    36.61
                ],
                [
                    5,
                    2.5,
                    27.11
                ],
                [
                    5,
                    2.5,
                    17.61
                ],
                [
                    5,
                    2.5,
                    8.11
                ],
                [
                    5,
                    2.5,
                    -1.39
                ]
            ],
			symbolSize: [6, 16], //点的大小
			symbol: 'rect',
			itemStyle: {
			color: "#B82601",
			},
			emphasis: {
				itemStyle: {
					color: "#ccc", //高亮
				},
			},
		}
	],
	backgroundColor: "#fff",
}

// 影像定位S类
var nerverootsOpinionS = {
	title: {
		text: '脊髓长度S类'
	},
	tooltip: {
	},
	xAxis3D: {
		name: "x", //x轴显示为x
		type: "category",
		data: ['bsi-007', 'sub-02', 'sub-04', 'sub-06', 'sub-zszzc', 'Medtronic'],
		axisLine: {
		//x轴坐标轴，false为隐藏，true为显示
		show: true,
		},
		axisLabel: {
		show: true,
		},
		itemStyle: {
		borderColor: "#fff",
		backgroundColor: "#fff",
		},
	},
	yAxis3D: {
		name: "y", //y轴显示为y
		type: "value",
		splitNumber: 5,
		axisTick: {
		show: false, //显示每个值对应的刻度
		},
	},
	zAxis3D: {
		name: "z", //z轴显示为z
		type: "value",
		axisTick: {
		show: false, //显示每个值对应的刻度
		},
	},
	grid3D: {
		axisLine: {
		lineStyle: {
			//坐标轴样式
			color: "#070707", //轴线颜色
			opacity: 0.8, //(单个刻度不会受影响)
			width: 1, //线条宽度
		},
		},
		axisPointer: {
		lineStyle: {
			color: "#666", //坐标轴指示线
		},
		show: true, //展示坐标轴指示线
		},
		viewControl: {
		distance: 320, //与视角的距离，值越大，图离视角越远，图越小
		alpha: 7, //绕x轴旋转的角度（上下旋转），增大，视角顺时针增大（向上）
		beta: 20, //绕y轴旋转的角度（左右旋转），增大，视角逆时针增大（向右）
		center: [0, 0, 0], //第一个参数：增大，视角沿x轴正方向水平右移动（图向左）；第二个参数：增大，视角沿y轴正方向垂直向上移动（图向下）；第三个参数：增大，视角向z轴正方向移动（图变小）
		},
		boxWidth: 50,
		boxHeight: 200,
		boxDepth: 40,
		top: -100,
        left: -50,
	},
	series: [
		{
			type: "line3D",
			name: "bsi-007-L",
			dimensions: [
			"x",
			"y",
			"z",
			],
			data: [
                [
                    0,
                    -4.0475,
                    36.61
                ],
                [
                    0,
                    -4.049,
                    30.581
                ],
                [
                    0,
                    -4.2065,
                    18.577
                ],
                [
                    0,
                    -3.8885,
                    8.547
                ],
                [
                    0,
                    -3.49,
                    4.219
                ],
                [
                    0,
                    -1.278,
                    -3.971
                ],
                [
                    0,
                    -1.584,
                    -12.076
                ]
            ],
			symbolSize: 12,
			lineStyle: {
				width: 3,
				color: colors[0],
			},
			emphasis: {
				itemStyle: {
					color: "#ccc", //高亮
				},
			},
		},
		{
			type: "line3D",
			name: "bsi-007-R",
			dimensions: [
			"x",
			"y",
			"z",
			],
			data: [
                [
                    0,
                    4.0475,
                    36.61
                ],
                [
                    0,
                    4.049,
                    30.581
                ],
                [
                    0,
                    4.2065,
                    18.577
                ],
                [
                    0,
                    3.8885,
                    8.547
                ],
                [
                    0,
                    3.49,
                    4.219
                ],
                [
                    0,
                    1.278,
                    -3.971
                ],
                [
                    0,
                    1.584,
                    -12.076
                ]
            ],
			symbolSize: 12,
			lineStyle: {
				width: 3,
				color: colors[0],
			},
			emphasis: {
				itemStyle: {
					color: "#ccc", //高亮
				},
			},
		},
        {
			type: "line3D",
			name: "sub-02-L",
			dimensions: [
			"x",
			"y",
			"z",
			],
			data: [
                [1, -3.61, 36.61],
                [1, -3.431, 30.569],
                [1, -3.3985, 22.555],
                [1, -3.1765, 14.449],
                [1, -3.248, 4.435],
                [1, -3.1615, 0.418],
                [1, -3.169, -5.648],
            ],
			symbolSize: 12,
			lineStyle: {
				width: 3,
				color: colors[1],
			},
			emphasis: {
				itemStyle: {
					color: "#ccc", //高亮
				},
			},
		},
		{
			type: "line3D",
			name: "sub-02-R",
			dimensions: [
			"x",
			"y",
			"z",
			],
			data: [
                [1, 3.61, 36.61],
                [1, 3.431, 30.569],
                [1, 3.3985, 22.555],
                [1, 3.1765, 14.449],
                [1, 3.248, 4.435],
                [1, 3.1615, 0.418],
                [1, 3.169, -5.648],
            ],
			symbolSize: 12,
			lineStyle: {
				width: 3,
				color: colors[1],
			},
			emphasis: {
				itemStyle: {
					color: "#ccc", //高亮
				},
			},
		},
        {
			type: "line3D",
			name: "sub-04-L",
			dimensions: [
			"x",
			"y",
			"z",
			],
			data: [
                [2, -3.258, 36.61],
                [2, -3.3275, 31.185],
                [2, -3.2645, 20.548],
                [2, -2.8725, 16.918],
                [2, -2.8705, 11.447],
                [2, -2.9455, 5.991],
                [2, -2.962, 0.588],
            ],
			symbolSize: 12,
			lineStyle: {
				width: 3,
				color: colors[2],
			},
			emphasis: {
				itemStyle: {
					color: "#ccc", //高亮
				},
			},
		},
		{
			type: "line3D",
			name: "sub-04-R",
			dimensions: [
			"x",
			"y",
			"z",
			],
			data: [
                [2, 3.258, 36.61],
                [2, 3.3275, 31.185],
                [2, 3.2645, 20.548],
                [2, 2.8725, 16.918],
                [2, 2.8705, 11.447],
                [2, 2.9455, 5.991],
                [2, 2.962, 0.588],
            ],
			symbolSize: 12,
			lineStyle: {
				width: 3,
				color: colors[2],
			},
			emphasis: {
				itemStyle: {
					color: "#ccc", //高亮
				},
			},
		},
        {
			type: "line3D",
			name: "sub-06-L",
			dimensions: [
			"x",
			"y",
			"z",
			],
			data: [
                [3, -3.5075, 36.61],
                [3, -3.8215, 24.602],
                [3, -3.307, 20.53],
                [3, -3.7325, 6.487],
                [3, -3.5755, 0.47],
                [3, -3.31, -5.534],
                [3, -2.793, -9.645],
            ],
			symbolSize: 12,
			lineStyle: {
				width: 3,
				color: colors[3],
			},
			emphasis: {
				itemStyle: {
					color: "#ccc", //高亮
				},
			},
		},
		{
			type: "line3D",
			name: "sub-06-R",
			dimensions: [
			"x",
			"y",
			"z",
			],
			data: [
                [3, 3.5075, 36.61],
                [3, 3.8215, 24.602],
                [3, 3.307, 20.53],
                [3, 3.7325, 6.487],
                [3, 3.5755, 0.47],
                [3, 3.31, -5.534],
                [3, 2.793, -9.645],
            ],
			symbolSize: 12,
			lineStyle: {
				width: 3,
				color: colors[3],
			},
			emphasis: {
				itemStyle: {
					color: "#ccc", //高亮
				},
			},
		},
        {
			type: "line3D",
			name: "sub-zszzc-L",
			dimensions: [
			"x",
			"y",
			"z",
			],
			data: [
                [4, -4.739, 36.61],
                [4, -4.1595, 27.601],
                [4, -3.527, 24.429],
                [4, -3.348, 20.424],
                [4, -2.194, 16.597],
                [4, -1.7825, 10.474],
                [4, -2.5695, 3.775],
            ],
			symbolSize: 12,
			lineStyle: {
				width: 3,
				color: colors[4],
			},
			emphasis: {
				itemStyle: {
					color: "#ccc", //高亮
				},
			},
		},
		{
			type: "line3D",
			name: "sub-zszzc-R",
			dimensions: [
			"x",
			"y",
			"z",
			],
			data: [
                [4, 4.739, 36.61],
                [4, 4.1595, 27.601],
                [4, 3.527, 24.429],
                [4, 3.348, 20.424],
                [4, 2.194, 16.597],
                [4, 1.7825, 10.474],
                [4, 2.5695, 3.775],
            ],
			symbolSize: 12,
			lineStyle: {
				width: 3,
				color: colors[4],
			},
			emphasis: {
				itemStyle: {
					color: "#ccc", //高亮
				},
			},
		},
		{
			type: "scatter3D",
            name: "Medtronic-565",
			dimensions: [
			"x",
			"y",
			"z",
			], //悬浮到点时弹出的显示框信息
			data: [
                [
                    5,
                    -2.5,
                    36.61
                ],
                [
                    5,
                    -2.5,
                    27.11
                ],
                [
                    5,
                    -2.5,
                    17.61
                ],
                [
                    5,
                    -2.5,
                    8.11
                ],
                [
                    5,
                    -2.5,
                    -1.39
                ],
                [
                    5,
                    0,
                    41.36
                ],
                [
                    5,
                    0,
                    31.86
                ],
                [
                    5,
                    0,
                    22.36
                ],
                [
                    5,
                    0,
                    12.86
                ],
                [
                    5,
                    0,
                    3.36
                ],
                [
                    5,
                    0,
                    -6.14
                ],
                [
                    5,
                    2.5,
                    36.61
                ],
                [
                    5,
                    2.5,
                    27.11
                ],
                [
                    5,
                    2.5,
                    17.61
                ],
                [
                    5,
                    2.5,
                    8.11
                ],
                [
                    5,
                    2.5,
                    -1.39
                ]
            ],
			symbolSize: [6, 16], //点的大小
			symbol: 'rect',
			itemStyle: {
			color: "#B82601",
			},
			emphasis: {
				itemStyle: {
					color: "#ccc", //高亮
				},
			},
		}
	],
	backgroundColor: "#fff",
}


export { 
	nerverootsOpinionMNew,
	nerverootsOpinionLNew,
	nerverootsOpinionSNew,
	nerverootsOpinionOne,
	nerverootsOpinionL, 
    nerverootsOpinionM, 
    nerverootsOpinionS,
    medtronic565,
    msV10_L,
    msV10_M,
    msV10_S,
	medtronic565_one,
    msV10_L_one,
    msV10_M_one,
    msV10_S_one,
	nerverootsOpinionM2D,
	nerverootsOpinionL2D,
	nerverootsOpinionS2D,
	nerverootsOpinionM2DMdt,
	nerverootsOpinionL2DMdt,
	nerverootsOpinionS2DMdt,
}