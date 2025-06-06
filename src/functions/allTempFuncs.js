// let bsi008_curve = []

// let bsi008_curve_points = []
// 	bsi008_curve.forEach(e => {
// 	bsi008_curve_points.push([e.position[0], e.position[1]])
// })

// // 求弧度
// function calculateArcRadians(points) {
// 	if (points.length < 3) {
// 		throw new Error('至少需要3个点才能计算弧度');
// 	}

// 	// 取起点、中间点和终点
// 	const start = points[0];
// 	const mid = points[Math.floor(points.length / 2)];
// 	const end = points[points.length - 1];

// 	// 计算两个向量：起点到中点，中点到终点
// 	const vector1 = [mid[0] - start[0], mid[1] - start[1]];
// 	const vector2 = [end[0] - mid[0], end[1] - mid[1]];

// 	// 计算向量的点积和叉积
// 	const dotProduct = vector1[0] * vector2[0] + vector1[1] * vector2[1];
// 	const crossProduct = vector1[0] * vector2[1] - vector1[1] * vector2[0];

// 	// 计算向量长度
// 	const length1 = Math.sqrt(vector1[0] ** 2 + vector1[1] ** 2);
// 	const length2 = Math.sqrt(vector2[0] ** 2 + vector2[1] ** 2);

// 	// 计算夹角（弧度）
// 	const angle = Math.atan2(crossProduct, dotProduct);
// 	const radians = Math.abs(angle);

// 	return radians;
// }

// let radians = calculateArcRadians(bsi008_curve_points)

// const arcLength = 10.82 // 弧长（mm）

// // 计算半径
// const radius = arcLength / radians;

// // 计算弦长
// const chordLength = 2 * radius * Math.sin(radians / 2);

// console.log('弧度：', radians)
// console.log('半径：', radius)
// console.log('弦长：', chordLength)

// 根据弦长、半径 计算弧长
function calculateArcLengthFromChord(chordLength, radius) {
	if (chordLength <= 0 || radius <= 0) {
		throw new Error('弦长和半径必须为正数');
	}
	if (chordLength > 2 * radius) {
		throw new Error('弦长不能超过直径');
	}
	// 计算弧度
	const theta = 2 * Math.asin(chordLength / (2 * radius));
	// 计算弧长
	const arcLength = radius * theta;
	return arcLength;
}

const r = 19.16
let chord = 6.89
console.log(calculateArcLengthFromChord(chord, r))
