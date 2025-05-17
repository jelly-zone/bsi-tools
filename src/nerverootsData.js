// 进入点
var nerverootsOpinion = {
	title: {
		text: 'L1-S2神经根进入点'
	},
	tooltip: {
	},
	xAxis3D: {
		name: "x", //x轴显示为x
		type: "category",
		data: ['bsi-002', 'bsi-005', 'bsi-007', 'bsi-008', 'Medtronic'],
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
		// min: 0,
		// max: 360,
		// interval: 90,
	},
	zAxis3D: {
		name: "z", //z轴显示为z
		type: "value",
		// min: -20,
		// max: 60,
		// interval: 20,
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
		distance: 300, //与视角的距离，值越大，图离视角越远，图越小
		alpha: 7, //绕x轴旋转的角度（上下旋转），增大，视角顺时针增大（向上）
		beta: 20, //绕y轴旋转的角度（左右旋转），增大，视角逆时针增大（向右）
		center: [-15, -5, -20], //第一个参数：增大，视角沿x轴正方向水平右移动（图向左）；第二个参数：增大，视角沿y轴正方向垂直向上移动（图向下）；第三个参数：增大，视角向z轴正方向移动（图变小）
		},
		boxWidth: 50,
		boxHeight: 200,
		boxDepth: 40,
		top: -100,
	},
	series: [
		{
			type: "line3D",
			name: "bsi-002-L",
			dimensions: [
			"x",
			"y",
			"z",
			], //悬浮到点时弹出的显示框信息
			data: [
				[0, -3.1135, 36.610],
				[0, -2.2885, 28.456],
				[0, -3.6965, 14.008],
				[0, -3.752, 0],
				[0, -3.119, -4.121],
				[0, -2.544, -14.242],
				[0, -1.765, -22.358],
			],
			lineStyle: {
			width: 4,
			color: "#87f0e5",
			},
			emphasis: {
			itemStyle: {
				color: "#ccc", //高亮
			},
			},
		},
		{
			type: "line3D",
			name: "bsi-002-R",
			dimensions: [
			"x",
			"y",
			"z",
			],
			data: [
				[0, 3.1135, 36.610],
				[0, 2.2885, 28.456],
				[0, 3.6965, 14.008],
				[0, 3.752, 0],
				[0, 3.119, -4.121],
				[0, 2.544, -14.242],
				[0, 1.765, -22.358],
			],
			lineStyle: {
				width: 4,
				color: "#87f0e5",
			},
			emphasis: {
			itemStyle: {
				color: "#ccc", //高亮
			},
			},
		},
		{
			type: "line3D",
			name: "bsi-005-L",
			dimensions: [
			"x",
			"y",
			"z",
			], //悬浮到点时弹出的显示框信息
			data: [
                [
                    1,
                    -3.5425,
                    36.61
                ],
                [
                    1,
                    -3.4755,
                    22.573
                ],
                [
                    1,
                    -3.9995,
                    10.569
                ],
                [
                    1,
                    -3.767,
                    4.521
                ],
                [
                    1,
                    -3.684,
                    -1.493
                ],
                [
                    1,
                    -3.043,
                    -9.592
                ],
                [
                    1,
                    -2.3005,
                    -13.819
                ]
            ],
			symbolSize: 12, //点的大小
			lineStyle: {
				width: 4,
				color: "#007849",
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
                [
                    1,
                    3.5425,
                    36.61
                ],
                [
                    1,
                    3.4755,
                    22.573
                ],
                [
                    1,
                    3.9995,
                    10.569
                ],
                [
                    1,
                    3.767,
                    4.521
                ],
                [
                    1,
                    3.684,
                    -1.493
                ],
                [
                    1,
                    3.043,
                    -9.592
                ],
                [
                    1,
                    2.3005,
                    -13.819
                ]
            ],
			symbolSize: 12, //点的大小
			lineStyle: {
				width: 4,
				color: "#007849",
			},
			emphasis: {
				itemStyle: {
					color: "#ccc", //高亮
				},
			},
		},
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
                    2,
                    -4.0475,
                    36.61
                ],
                [
                    2,
                    -4.049,
                    30.581
                ],
                [
                    2,
                    -4.2065,
                    18.577
                ],
                [
                    2,
                    -3.8885,
                    8.547
                ],
                [
                    2,
                    -3.49,
                    4.219
                ],
                [
                    2,
                    -1.278,
                    -3.971
                ],
                [
                    2,
                    -1.584,
                    -12.076
                ]
            ],
			symbolSize: 12,
			lineStyle: {
				width: 4,
				color: "#F7B733",
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
                    2,
                    4.0475,
                    36.61
                ],
                [
                    2,
                    4.049,
                    30.581
                ],
                [
                    2,
                    4.2065,
                    18.577
                ],
                [
                    2,
                    3.8885,
                    8.547
                ],
                [
                    2,
                    3.49,
                    4.219
                ],
                [
                    2,
                    1.278,
                    -3.971
                ],
                [
                    2,
                    1.584,
                    -12.076
                ]
            ],
			symbolSize: 12,
			lineStyle: {
				width: 4,
				color: "#F7B733",
			},
			emphasis: {
				itemStyle: {
					color: "#ccc", //高亮
				},
			},
		},
		{
			type: "line3D",
			name: "bsi-008-L",
			dimensions: [
                "x",
                "y",
                "z",
			],
			data: [
                [
                    3,
                    -3.6575,
                    36.61
                ],
                [
                    3,
                    -3.687,
                    26.605
                ],
                [
                    3,
                    -4.335,
                    10.552
                ],
                [
                    3,
                    -3.9505,
                    4.358
                ],
                [
                    3,
                    -3.3895,
                    -5.657
                ],
                [
                    3,
                    -1.8805,
                    -19.733
                ],
                [
                    3,
                    -1.8895,
                    -25.825
                ]
            ],
			lineStyle: {
                width: 4,
                color: "#96858F",
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
                [
                    3,
                    3.6575,
                    36.61
                ],
                [
                    3,
                    3.687,
                    26.605
                ],
                [
                    3,
                    4.335,
                    10.552
                ],
                [
                    3,
                    3.9505,
                    4.358
                ],
                [
                    3,
                    3.3895,
                    -5.657
                ],
                [
                    3,
                    1.8805,
                    -19.733
                ],
                [
                    3,
                    1.8895,
                    -25.825
                ]
            ],
			lineStyle: {
                width: 4,
                color: "#96858F",
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
                    4,
                    -2.5,
                    36.61
                ],
                [
                    4,
                    -2.5,
                    27.11
                ],
                [
                    4,
                    -2.5,
                    17.61
                ],
                [
                    4,
                    -2.5,
                    8.11
                ],
                [
                    4,
                    -2.5,
                    -1.39
                ],
                [
                    4,
                    0,
                    41.36
                ],
                [
                    4,
                    0,
                    31.86
                ],
                [
                    4,
                    0,
                    22.36
                ],
                [
                    4,
                    0,
                    12.86
                ],
                [
                    4,
                    0,
                    3.36
                ],
                [
                    4,
                    0,
                    -6.14
                ],
                [
                    4,
                    2.5,
                    36.61
                ],
                [
                    4,
                    2.5,
                    27.11
                ],
                [
                    4,
                    2.5,
                    17.61
                ],
                [
                    4,
                    2.5,
                    8.11
                ],
                [
                    4,
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

export default nerverootsOpinion