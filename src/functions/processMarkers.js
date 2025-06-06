const fs = require('fs');
const path = require('path');

function processAndExportMarkupFiles(directoryPath, outputFilePath, xValue) {
  try {
    // 数据收集
    const fileGroups = {};
    let leftYSum = 0, leftCount = 0;
    let rightYSum = 0, rightCount = 0;
    let globalZMax = -Infinity;

    // 读取并处理所有文件
    fs.readdirSync(directoryPath).forEach(file => {
      if (!file.endsWith('.mrk.json')) return;

      const parts = file.split('_');
      if (parts.length < 4 || parts[1] !== 'nerveroots' || parts[2] === 'T12') return;

      // 处理parts[2]（L1-1 -> L1）
      const basePart = parts[2].split('-')[0];
      const groupKey = `${basePart}_${parts[3][0]}`;
      const filePath = path.join(directoryPath, file);
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

      if (data.markups?.[0]?.controlPoints) {
        if (!fileGroups[groupKey]) fileGroups[groupKey] = [];

        data.markups[0].controlPoints.forEach(point => {
          if (point.position) {
            const [y, x, z] = point.position.map(Number);
            const roundedPos = [
              parseFloat(x.toFixed(3)),
              parseFloat(y.toFixed(3)),
              parseFloat(z.toFixed(3))
            ];

            fileGroups[groupKey].push(roundedPos);
            
            // 分L/R收集y值
            if (parts[3][0] === 'L') {
              leftYSum += y;
              leftCount++;
            } else if (parts[3][0] === 'R') {
              rightYSum += y;
              rightCount++;
            }

            // 更新z最大值
            globalZMax = Math.max(globalZMax, z);
          }
        });
      }
    });

    // 计算全局变换参数
    const leftYAvg = leftCount > 0 ? parseFloat((leftYSum / leftCount).toFixed(3)) : 0;
    const rightYAvg = rightCount > 0 ? parseFloat((rightYSum / rightCount).toFixed(3)) : 0;
    const yMidpoint = (leftYAvg + rightYAvg) / 2;
    console.log('yMidpoint', yMidpoint)
    const yTranslation = parseFloat((-yMidpoint).toFixed(3));
    const zTranslation = parseFloat((36.1 - globalZMax).toFixed(3));

    // 应用变换
    const result = {};
    let xBase = fileGroups["L1_L"][0][0]
    Object.entries(fileGroups).forEach(([groupKey, positions]) => {
      result[groupKey] = positions.map(([x, y, z]) => [
        x - xBase + xValue,
        parseFloat((y + yTranslation).toFixed(3)), // 应用全局y偏移
        parseFloat((z + zTranslation).toFixed(3))  // 应用全局z偏移
      ]);
    });

    // 验证结果
    const allTransformedZ = Object.values(result).flat().map(pos => pos[2]);
    const finalZMax = parseFloat(Math.max(...allTransformedZ).toFixed(3));
    
    // 验证y对称性
    let transLeftYSum = 0, transLeftCount = 0;
    let transRightYSum = 0, transRightCount = 0;
    
    Object.entries(result).forEach(([groupKey, positions]) => {
      positions.forEach(([_, y]) => {
        if (groupKey.endsWith('_L')) {
          transLeftYSum += y;
          transLeftCount++;
        } else if (groupKey.endsWith('_R')) {
          transRightYSum += y;
          transRightCount++;
        }
      });
    });
    
    const transYMidpoint = parseFloat(((
      (transLeftYSum / transLeftCount) + 
      (transRightYSum / transRightCount)
    ) / 2).toFixed(3));

    // if (Math.abs(transYMidpoint) > 0.001) {
    //   throw new Error(`Y轴对称验证失败: 中点应为0，实际得到${transYMidpoint}`);
    // }
    // if (finalZMax !== 36.1) {
    //   throw new Error(`Z轴验证失败: 最大z值应为36.1，实际得到${finalZMax}`);
    // }

    // 导出结果
    const fileContent = `// 最终坐标数据（合并parts[2]变体，y对称，max_z=36.1）
const BSI008_TRANSFORMED = ${JSON.stringify(result, null, 2)};
export default BSI008_TRANSFORMED;`;

    fs.writeFileSync(outputFilePath, fileContent);

    console.log('处理完成，关键指标:', {
      '合并的分组': Object.keys(result).join(', '),
      '原始L/R平均y': [leftYAvg, rightYAvg],
      '应用中点': transYMidpoint, // 应≈0
      '最大z值': finalZMax        // 应=36.1
    });
    console.log('原始L/R平均y', leftYAvg, rightYAvg)

    return result;

  } catch (error) {
    console.error('处理失败:', error);
    throw error;
  }
}


// 使用示例
console.log('0000000')
processAndExportMarkupFiles('D:/BsiOutputData20250519/markers/bsi-008', 'src/processedMrkData/bsi008_trans.js', 1);