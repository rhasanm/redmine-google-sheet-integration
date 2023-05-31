const createStatusChart = (sheet, statusCount) => {
  const statusColumns = Object.keys(statusCount);
  const statusChartData = [['Status', 'Count'], ...statusColumns.map((status) => [status, statusCount[status]])];
  const statusChart = createPieChart(sheet, statusChartData, 'Issues by Status', 2, 10);
  sheet.insertChart(statusChart);
};

const createPriorityChart = (sheet, priorityIssues) => {
  const priorityChartData = getChartData(sheet, priorityIssues, 'Priority');
  const priorityChart = createPieChart(sheet, priorityChartData, 'Issues by Priority', 2, 20);
  sheet.insertChart(priorityChart);
};

const createAuthorChart = (sheet, authorIssues) => {
  const authorChartData = getChartData(sheet, authorIssues, 'Author');
  const authorChart = createPieChart(sheet, authorChartData, 'Issues by Author', 2, 30);
  sheet.insertChart(authorChart);
};

const createAssignedToChart = (sheet, assignedToIssues) => {
  const assignedToChartData = getChartData(sheet, assignedToIssues, 'Assigned To');
  const assignedToChart = createPieChart(sheet, assignedToChartData, 'Issues by Assigned To', 2, 40);
  sheet.insertChart(assignedToChart);
};

const setTotalIssues = (sheet, totalIssues) => {
  sheet.getRange(2, 18).setValue('Total Issues');
  sheet.getRange(3, 18).setValue(totalIssues);
};
