let bsi008_curve = [
                {
                    "id": "1",
                    "label": "OC-1",
                    "description": "",
                    "associatedNodeID": "vtkMRMLScalarVolumeNode16",
                    "position": [-10.366982898168306, 53.36411173802934, -408.42152674846653],
                    "orientation": [-1.0, -0.0, -0.0, -0.0, -1.0, -0.0, 0.0, 0.0, 1.0],
                    "selected": true,
                    "locked": false,
                    "visibility": true,
                    "positionStatus": "defined"
                },
                {
                    "id": "2",
                    "label": "OC-2",
                    "description": "",
                    "associatedNodeID": "vtkMRMLScalarVolumeNode16",
                    "position": [-9.110273522169102, 53.86657423728417, -408.4364394868354],
                    "orientation": [-1.0, -0.0, -0.0, -0.0, -1.0, -0.0, 0.0, 0.0, 1.0],
                    "selected": true,
                    "locked": false,
                    "visibility": true,
                    "positionStatus": "defined"
                },
                {
                    "id": "3",
                    "label": "OC-3",
                    "description": "",
                    "associatedNodeID": "vtkMRMLScalarVolumeNode16",
                    "position": [-7.350880395767998, 54.11780548691711, -408.44389585602],
                    "orientation": [-1.0, -0.0, -0.0, -0.0, -1.0, -0.0, 0.0, 0.0, 1.0],
                    "selected": true,
                    "locked": false,
                    "visibility": true,
                    "positionStatus": "defined"
                },
                {
                    "id": "4",
                    "label": "OC-4",
                    "description": "",
                    "associatedNodeID": "vtkMRMLScalarVolumeNode16",
                    "position": [-5.675267894432441, 54.11780548692532, -408.4438958560202],
                    "orientation": [-1.0, -0.0, -0.0, -0.0, -1.0, -0.0, 0.0, 0.0, 1.0],
                    "selected": true,
                    "locked": false,
                    "visibility": true,
                    "positionStatus": "defined"
                },
                {
                    "id": "5",
                    "label": "OC-5",
                    "description": "",
                    "associatedNodeID": "vtkMRMLScalarVolumeNode16",
                    "position": [-3.9996553930952494, 53.7828304874344, -408.4339540304413],
                    "orientation": [-1.0, -0.0, -0.0, -0.0, -1.0, -0.0, 0.0, 0.0, 1.0],
                    "selected": true,
                    "locked": false,
                    "visibility": true,
                    "positionStatus": "defined"
                },
                {
                    "id": "6",
                    "label": "OC-6",
                    "description": "",
                    "associatedNodeID": "vtkMRMLScalarVolumeNode16",
                    "position": [-2.491604141890786, 53.280367988193106, -408.4190412920729],
                    "orientation": [-1.0, -0.0, -0.0, -0.0, -1.0, -0.0, 0.0, 0.0, 1.0],
                    "selected": true,
                    "locked": false,
                    "visibility": true,
                    "positionStatus": "defined"
                },
                {
                    "id": "7",
                    "label": "OC-7",
                    "description": "",
                    "associatedNodeID": "vtkMRMLScalarVolumeNode16",
                    "position": [-0.9835528906842725, 52.35918673957791, -408.3917012717306],
                    "orientation": [-1.0, -0.0, -0.0, -0.0, -1.0, -0.0, 0.0, 0.0, 1.0],
                    "selected": true,
                    "locked": false,
                    "visibility": true,
                    "positionStatus": "defined"
                }
            ]

let bsi008_curve_points = []
	bsi008_curve.forEach(e => {
	bsi008_curve_points.push([e.position[0], e.position[1]])
})

// let points = [
//                 {
//                     "id": "1",
//                     "label": "OC-1",
//                     "description": "",
//                     "associatedNodeID": "vtkMRMLScalarVolumeNode17",
//                     "position": [30.77039010174432, 80.65932313347164, -318.1062927246001],
//                     "orientation": [-1.0, -0.0, -0.0, -0.0, -1.0, -0.0, 0.0, 0.0, 1.0],
//                     "selected": true,
//                     "locked": false,
//                     "visibility": true,
//                     "positionStatus": "defined"
//                 },
//                 {
//                     "id": "2",
//                     "label": "OC-2",
//                     "description": "",
//                     "associatedNodeID": "vtkMRMLScalarVolumeNode17",
//                     "position": [32.00824074491789, 81.23698676695264, -318.1062927246001],
//                     "orientation": [-1.0, -0.0, -0.0, -0.0, -1.0, -0.0, 0.0, 0.0, 1.0],
//                     "selected": true,
//                     "locked": false,
//                     "visibility": true,
//                     "positionStatus": "defined"
//                 },
//                 {
//                     "id": "3",
//                     "label": "OC-3",
//                     "description": "",
//                     "associatedNodeID": "vtkMRMLScalarVolumeNode17",
//                     "position": [33.246091388091465, 81.6496036480105, -318.1062927246001],
//                     "orientation": [-1.0, -0.0, -0.0, -0.0, -1.0, -0.0, 0.0, 0.0, 1.0],
//                     "selected": true,
//                     "locked": false,
//                     "visibility": true,
//                     "positionStatus": "defined"
//                 },
//                 {
//                     "id": "4",
//                     "label": "OC-4",
//                     "description": "",
//                     "associatedNodeID": "vtkMRMLScalarVolumeNode17",
//                     "position": [34.56646540747661, 81.73212702422207, -318.1062927246001],
//                     "orientation": [-1.0, -0.0, -0.0, -0.0, -1.0, -0.0, 0.0, 0.0, 1.0],
//                     "selected": true,
//                     "locked": false,
//                     "visibility": true,
//                     "positionStatus": "defined"
//                 },
//                 {
//                     "id": "5",
//                     "label": "OC-5",
//                     "description": "",
//                     "associatedNodeID": "vtkMRMLScalarVolumeNode17",
//                     "position": [35.72179267443862, 81.73212702422207, -318.1062927246001],
//                     "orientation": [-1.0, -0.0, -0.0, -0.0, -1.0, -0.0, 0.0, 0.0, 1.0],
//                     "selected": true,
//                     "locked": false,
//                     "visibility": true,
//                     "positionStatus": "defined"
//                 },
//                 {
//                     "id": "6",
//                     "label": "OC-6",
//                     "description": "",
//                     "associatedNodeID": "vtkMRMLScalarVolumeNode17",
//                     "position": [36.712073188977485, 81.56708027179893, -318.1062927246001],
//                     "orientation": [-1.0, -0.0, -0.0, -0.0, -1.0, -0.0, 0.0, 0.0, 1.0],
//                     "selected": true,
//                     "locked": false,
//                     "visibility": true,
//                     "positionStatus": "defined"
//                 },
//                 {
//                     "id": "7",
//                     "label": "OC-7",
//                     "description": "",
//                     "associatedNodeID": "vtkMRMLScalarVolumeNode17",
//                     "position": [37.86740045593949, 81.40203351937578, -318.1062927246001],
//                     "orientation": [-1.0, -0.0, -0.0, -0.0, -1.0, -0.0, 0.0, 0.0, 1.0],
//                     "selected": true,
//                     "locked": false,
//                     "visibility": true,
//                     "positionStatus": "defined"
//                 },
//                 {
//                     "id": "8",
//                     "label": "OC-8",
//                     "description": "",
//                     "associatedNodeID": "vtkMRMLScalarVolumeNode17",
//                     "position": [38.61011084184363, 81.0719400145295, -318.1062927246001],
//                     "orientation": [-1.0, -0.0, -0.0, -0.0, -1.0, -0.0, 0.0, 0.0, 1.0],
//                     "selected": true,
//                     "locked": false,
//                     "visibility": true,
//                     "positionStatus": "defined"
//                 },
//                 {
//                     "id": "9",
//                     "label": "OC-9",
//                     "description": "",
//                     "associatedNodeID": "vtkMRMLScalarVolumeNode17",
//                     "position": [39.51786798017092, 80.57679975726006, -318.1062927246001],
//                     "orientation": [-1.0, -0.0, -0.0, -0.0, -1.0, -0.0, 0.0, 0.0, 1.0],
//                     "selected": true,
//                     "locked": false,
//                     "visibility": true,
//                     "positionStatus": "defined"
//                 }
//             ]

// 求弧度
function calculateArcRadians(points) {
	if (points.length < 3) {
		throw new Error('至少需要3个点才能计算弧度');
	}

	// 取起点、中间点和终点
	const start = points[0];
	const mid = points[Math.floor(points.length / 2)];
	const end = points[points.length - 1];

	// 计算两个向量：起点到中点，中点到终点
	const vector1 = [mid[0] - start[0], mid[1] - start[1]];
	const vector2 = [end[0] - mid[0], end[1] - mid[1]];

	// 计算向量的点积和叉积
	const dotProduct = vector1[0] * vector2[0] + vector1[1] * vector2[1];
	const crossProduct = vector1[0] * vector2[1] - vector1[1] * vector2[0];

	// 计算向量长度
	const length1 = Math.sqrt(vector1[0] ** 2 + vector1[1] ** 2);
	const length2 = Math.sqrt(vector2[0] ** 2 + vector2[1] ** 2);

	// 计算夹角（弧度）
	const angle = Math.atan2(crossProduct, dotProduct);
	const radians = Math.abs(angle);

	return radians;
}

let radians = calculateArcRadians(bsi008_curve_points)

const arcLength = 10.82 // 弧长（mm）

// 计算半径
const radius = arcLength / radians;

// 计算弦长
const chordLength = 2 * radius * Math.sin(radians / 2);

console.log('弧度：', radians)
console.log('半径：', radius)
console.log('弦长：', chordLength)

// 根据弦长、半径 计算弧长
// function calculateArcLengthFromChord(chordLength, radius) {
// 	if (chordLength <= 0 || radius <= 0) {
// 		throw new Error('弦长和半径必须为正数');
// 	}
// 	if (chordLength > 2 * radius) {
// 		throw new Error('弦长不能超过直径');
// 	}
// 	// 计算弧度
// 	const theta = 2 * Math.asin(chordLength / (2 * radius));
// 	// 计算弧长
// 	const arcLength = radius * theta;
// 	return arcLength;
// }

// const r = 19.16
// let chord = 6.89
// console.log(calculateArcLengthFromChord(chord, r))
