function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Select Team')
    .addItem('Backend', 'updateSheetForBackend')
    .addItem('Frontend', 'updateSheetForFrontend')
    .addItem('App', 'updateSheetForApp')
    .addToUi();
}

function updateSheetForBackend() {
  updateSheet('Backend');
}

function updateSheetForFrontend() {
  updateSheet('Frontend');
}

function updateSheetForApp() {
  updateSheet('App');
}

const updateSheet = (option) => {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  clearSheet(sheet);
  setHeaderRow(sheet);
  const issues = getIssues(option);
  const totalIssues = issues.length;
  const statusCount = getIssueCountByStatus(issues);
  const priorityIssues = getIssuesByPriority(issues);
  const authorIssues = getIssuesByAuthor(issues);
  const assignedToIssues = getIssuesByAssignedTo(issues);
  createStatusChart(sheet, statusCount);
  createPriorityChart(sheet, priorityIssues);
  createAuthorChart(sheet, authorIssues);
  createAssignedToChart(sheet, assignedToIssues);
  setTotalIssues(sheet, totalIssues);
};

const getIssues = (option) => {
  let issues = [];
  if (option === 'Frontend') {
    issues = fetchFrontendIssues();
  } else if (option === 'App') {
    issues = fetchAppIssues();
  } else {
    issues = fetchBackendIssues();
  }
  return issues;
};
