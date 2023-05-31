const insertNewIssue = (issue) => {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  const columns = ['id', 'project', 'status', 'priority', 'author', 'assigned_to', 'subject', 'start_date', 'created_on'];
  
  const values = getIssueValues(issue, columns);
  const priorityIndex = columns.indexOf('priority');
  const priorityCell = sheet.getRange(2, priorityIndex + 1);
  const priorityValue = values[priorityIndex];
  
  setPriorityCell(priorityCell, priorityValue);
  insertIssueRow(sheet, columns, values);
  autoResizeColumns(sheet, columns.length);
};

const getIssueValues = (issue, columns) => {
  return columns.map((key) => {
    let value = issue[key];
    if (typeof value === 'object' && value !== null && 'name' in value) {
      value = value.name;
    }
    return value || '';
  });
};

const setPriorityCell = (cell, value) => {
  const priorityColors = {
    Low: '#b7e1cd',
    Normal: '#f3ffcd',
    High: '#ffcaca',
    Urgent: '#ff9191',
    Immediate: '#ff0000',
  };

  cell.setValue(value);

  if (priorityColors.hasOwnProperty(value)) {
    cell.setBackground(priorityColors[value]);
  }
};

const insertIssueRow = (sheet, columns, values) => {
  sheet.insertRowBefore(2);
  sheet.getRange(2, 1, 1, columns.length).setValues([columns]);
  sheet.getRange(2, 1, 1, values.length).setValues([values]);
};

const autoResizeColumns = (sheet, numColumns) => {
  sheet.autoResizeColumns(1, numColumns);
};
