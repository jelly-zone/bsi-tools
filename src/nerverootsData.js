// 影像定位L类
var nerverootsOpinionL = {
	title: {
		text: '影像定位-L'
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
                color: "#007849",
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

// 影像定位M类
var nerverootsOpinionM = {
	title: {
		text: '影像定位-M'
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
                [
                    0,
                    -3.5425,
                    36.61
                ],
                [
                    0,
                    -3.4755,
                    22.573
                ],
                [
                    0,
                    -3.9995,
                    10.569
                ],
                [
                    0,
                    -3.767,
                    4.521
                ],
                [
                    0,
                    -3.684,
                    -1.493
                ],
                [
                    0,
                    -3.043,
                    -9.592
                ],
                [
                    0,
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
                    0,
                    3.5425,
                    36.61
                ],
                [
                    0,
                    3.4755,
                    22.573
                ],
                [
                    0,
                    3.9995,
                    10.569
                ],
                [
                    0,
                    3.767,
                    4.521
                ],
                [
                    0,
                    3.684,
                    -1.493
                ],
                [
                    0,
                    3.043,
                    -9.592
                ],
                [
                    0,
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
		text: '影像定位-S'
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
				color: "#F7B733",
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
export { nerverootsOpinionL, nerverootsOpinionM, nerverootsOpinionS }