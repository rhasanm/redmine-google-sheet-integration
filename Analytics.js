const getIssueCountByStatus = (issues) => {
  const statusCount = {};

  for (const issue of issues) {
    const status = issue.status.name;
    if (statusCount.hasOwnProperty(status)) {
      statusCount[status]++;
    } else {
      statusCount[status] = 1;
    }
  }

  return statusCount;
};

const getIssuesByPriority = (issues) => {
  const priorityIssues = {};

  for (const issue of issues) {
    const priority = issue.priority.name;
    if (priorityIssues.hasOwnProperty(priority)) {
      priorityIssues[priority].push(issue);
    } else {
      priorityIssues[priority] = [issue];
    }
  }

  return priorityIssues;
};

const getIssuesByAuthor = (issues) => {
  const authorIssues = {};
  for (const issue of issues) {
    const author = issue.author.name;
    if (!authorIssues[author]) {
      authorIssues[author] = [];
    }
    authorIssues[author].push(issue);
  }
  return authorIssues;
};

const getIssuesByAssignedTo = (issues) => {
  const assignedToIssues = {};
  for (const issue of issues) {
    const assignedTo = issue.assigned_to.name;
    if (!assignedToIssues[assignedTo]) {
      assignedToIssues[assignedTo] = [];
    }
    assignedToIssues[assignedTo].push(issue);
  }
  return assignedToIssues;
};

