import BSI002_TRANSFORMED from './processedMrkData/bsi002_trans'

const colors = [
    '#87f0e5',
    '#007849',
    '#96858F',
    '#F7B733',
    '#94618E',
    "#B82601"  // electrodes
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
			dimensions: [
			"x",
			"y",
			"z",
			], //悬浮到点时弹出的显示框信息
			// data: [
			// 	[0, -3.1135, 36.610],
			// 	[0, -2.2885, 28.456],
			// 	[0, -3.6965, 14.008],
			// 	[0, -3.752, 0],
			// 	[0, -3.119, -4.121],
			// 	[0, -2.544, -14.242],
			// 	[0, -1.765, -22.358],
			// ],
			data: BSI002_TRANSFORMED['L1_L'],
			// symbolSize: 3,
			// color: colors[0],
			lineStyle: {
			width: 4,
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
			name: "bsi-002-L1-R",
			dimensions: [
			"x",
			"y",
			"z",
			], //悬浮到点时弹出的显示框信息
			// data: [
			// 	[0, -3.1135, 36.610],
			// 	[0, -2.2885, 28.456],
			// 	[0, -3.6965, 14.008],
			// 	[0, -3.752, 0],
			// 	[0, -3.119, -4.121],
			// 	[0, -2.544, -14.242],
			// 	[0, -1.765, -22.358],
			// ],
			data: BSI002_TRANSFORMED['L1_R'],
			// symbolSize: 3,
			// color: colors[0],
			lineStyle: {
			width: 4,
			color: colors[0],
			},
			emphasis: {
			itemStyle: {
				color: "#ccc", //高亮
			},
			},
		},
		// {
		// 	type: "line3D",
		// 	name: "bsi-002-R",
		// 	dimensions: [
		// 	"x",
		// 	"y",
		// 	"z",
		// 	],
		// 	data: [
		// 		[0, 3.1135, 36.610],
		// 		[0, 2.2885, 28.456],
		// 		[0, 3.6965, 14.008],
		// 		[0, 3.752, 0],
		// 		[0, 3.119, -4.121],
		// 		[0, 2.544, -14.242],
		// 		[0, 1.765, -22.358],
		// 	],
		// 	lineStyle: {
		// 		width: 4,
		// 		color: "#87f0e5",
		// 	},
		// 	emphasis: {
		// 	itemStyle: {
		// 		color: "#ccc", //高亮
		// 	},
		// 	},
		// },
		{
			type: "line3D",
			name: "bsi-008-L",
			dimensions: [
                "x",
                "y",
                "z",
			],
			data: [
                [1, -3.6575, 36.61],
                [1, -3.687, 26.605],
                [1, -4.335, 10.552],
                [1, -3.9505, 4.358],
                [1, -3.3895, -5.657],
                [1, -1.8805, -19.733],
                [1, -1.8895, -25.825]
            ],
			lineStyle: {
                width: 4,
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
			name: "bsi-008-R",
			dimensions: [
                "x",
                "y",
                "z",
			],
			data: [
                [1, 3.6575, 36.61],
                [1, 3.687, 26.605],
                [1, 4.335, 10.552],
                [1, 3.9505, 4.358],
                [1, 3.3895, -5.657],
                [1, 1.8805, -19.733],
                [1, 1.8895, -25.825]
            ],
			lineStyle: {
                width: 4,
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
			name: "bsi-009-L",
			dimensions: [
                "x",
                "y",
                "z",
			],
			data: [
                [2, -3.612, 36.61],
                [2, -3.233, 22.608],
                [2, -3.214, 10.605],
                [2, -3.603, 2.601],
                [2, -3.422, -5.404],
                [2, -2.4925, -13.486],
                [2, -1.4715, -23.551],
            ],
			lineStyle: {
                width: 4,
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
			name: "bsi-009-R",
			dimensions: [
                "x",
                "y",
                "z",
			],
			data: [
                [2, 3.612, 36.61],
                [2, 3.233, 22.608],
                [2, 3.214, 10.605],
                [2, 3.603, 2.601],
                [2, 3.422, -5.404],
                [2, 2.4925, -13.486],
                [2, 1.4715, -23.551],
            ],
			lineStyle: {
                width: 4,
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
			name: "bsi-010-L",
			dimensions: [
                "x",
                "y",
                "z",
			],
			data: [
                [3, -3.733, 36.61],
                [3, -3.572, 20.601],
                [3, -4.0135, 8.572],
                [3, -4.1645, -3.431],
                [3, -3.7995, -15.654],
                [3, -2.4565, -20.074],
                [3, -1.729, -24.17],
            ],
			lineStyle: {
                width: 4,
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
			name: "bsi-010-R",
			dimensions: [
                "x",
                "y",
                "z",
			],
			data: [
                [3, 3.733, 36.61],
                [3, 3.572, 20.601],
                [3, 4.0135, 8.572],
                [3, 4.1645, -3.431],
                [3, 3.7995, -15.654],
                [3, 2.4565, -20.074],
                [3, 1.729, -24.17],
            ],
			lineStyle: {
                width: 4,
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
			name: "bsi-012-L",
			dimensions: [
                "x",
                "y",
                "z",
			],
			data: [
                [4, -3.36, 36.61],
                [4, -3.56, 22.587],
                [4, -3.6315, 6.575],
                [4, -3.6835, -5.429],
                [4, -3.4575, -15.487],
                [4, -2.8385, -23.576],
                [4, -1.9135, -31.681],
            ],
			lineStyle: {
                width: 4,
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
			name: "bsi-012-R",
			dimensions: [
                "x",
                "y",
                "z",
			],
			data: [
                [4, 3.36, 36.61],
                [4, 3.56, 22.587],
                [4, 3.6315, 6.575],
                [4, 3.6835, -5.429],
                [4, 3.4575, -15.487],
                [4, 2.8385, -23.576],
                [4, 1.9135, -31.681],
            ],
			lineStyle: {
                width: 4,
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
				width: 4,
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
				width: 4,
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
				width: 4,
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
				width: 4,
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
				width: 4,
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
				width: 4,
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
			lineStyle: {
				width: 4,
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
			lineStyle: {
				width: 4,
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
			lineStyle: {
				width: 4,
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
			lineStyle: {
				width: 4,
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
				width: 4,
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
				width: 4,
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
				width: 4,
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
				width: 4,
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
				width: 4,
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
				width: 4,
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
				width: 4,
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
				width: 4,
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
				width: 4,
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
				width: 4,
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
export { nerverootsOpinionL, 
    nerverootsOpinionM, 
    nerverootsOpinionS,
    medtronic565,
    msV10_L,
    msV10_M,
    msV10_S
}