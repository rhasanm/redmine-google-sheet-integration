const getChartData = (sheet, data, title) => {
  const chartData = [];
  let rowOffset = 0;
  for (const key in data) {
    sheet.getRange(rowOffset + 5, 15).setValue(`${title}: ${key}`);
    const count = data[key].length;
    sheet.getRange(rowOffset + 5, 16).setValue(count);
    chartData.push([`${title}: ${key}`, count]);
    rowOffset += 2;
  }
  return chartData;
};

const createPieChart = (sheet, chartData, title, row, column) => {
  const numRows = chartData.length;
  const numColumns = chartData[0].length;
  const chartStartRow = row + numRows + 2;
  const chartStartColumn = column;

  sheet.getRange(row, column, numRows, numColumns).setValues(chartData);

  const dataRange = sheet.getRange(row, column, numRows, numColumns);
  const chartBuilder = sheet.newChart()
    .asPieChart()
    .addRange(dataRange)
    .setPosition(chartStartRow, chartStartColumn, 0, 0)
    .setOption('title', title)

  return chartBuilder.build();
};
