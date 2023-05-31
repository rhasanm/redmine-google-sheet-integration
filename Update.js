const updateIssueStatus = (issue) => {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const issueId = issue.id;
  const newStatus = issue.status;

  const dataRange = sheet.getRange(`A2:A${sheet.getLastRow()}`);
  const values = dataRange.getValues();
  const rowIndex = values.findIndex((row) => row[0] === issueId);

  if (rowIndex !== -1) {
    const statusCell = sheet.getRange(`D${rowIndex + 2}`);
    statusCell.setValue(newStatus);
  }
};
