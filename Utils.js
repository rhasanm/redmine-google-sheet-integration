const checkIfIssuesExists = (issue) => {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const issueId = issue.id;

  const existingData = sheet
    .getRange(`A2:A${sheet.getLastRow()}`)
    .getValues()
    .flat();

  return existingData.includes(issueId);
};

const handleIssues = (issues) => {
  for (const issue of issues) {
    insertNewIssue(issue);
    // const isNewIssue = !checkIfIssuesExists(issue);
    // isNewIssue ? insertNewIssue(issue) : updateIssueStatus(issue);
  }
};

const clearSheet = (sheet) => {
  sheet.clear();

  const charts = sheet.getCharts();
  for (const chart of charts) {
    sheet.removeChart(chart);
  }
};

const setHeaderRow = (sheet) => {
  const headerColumns = ['id', 'project', 'status', 'priority', 'author', 'assigned_to', 'subject', 'start_date', 'created_on'];
  const headerRange = sheet.getRange(1, 1, 1, headerColumns.length);
  headerRange.setValues([headerColumns]);
  applyHeaderStyle(headerRange);
};